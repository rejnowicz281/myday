"use client";

import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import SortBy from "./SortBy";
import Task from "./Task";

export default function Tasks() {
    const { tasks } = useContext(TasksContext);
    const [sortKey, setSortKey] = useState("created_at");
    const [sortOrder, setSortOrder] = useState("Descending");

    return (
        <>
            <SortBy sortKey={sortKey} setSortKey={setSortKey} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            {tasks
                .sort((a, b) => {
                    // Define a comparison function based on the sorting key
                    let result;
                    switch (sortKey) {
                        case "created_at":
                            result = new Date(a.createdAt) - new Date(b.createdAt);
                            break;
                        case "due_date":
                            result = new Date(a.due_date) - new Date(b.due_date);
                            break;
                        case "priority":
                            result = a.priority - b.priority;
                            break;
                        case "complete":
                            result = (a.completed ? 1 : 0) - (b.completed ? 1 : 0);
                            break;
                        case "name":
                            result = a.name.localeCompare(b.name);
                            break;
                        default:
                            // If the key is not recognized, don't perform any sorting
                            result = 0;
                    }

                    // Adjust the comparison result based on the sort order
                    if (sortOrder == "Descending") result *= -1; // Reverse the order for descending

                    // Sort by "completed" status, with completed tasks at the end
                    if (sortKey != "complete")
                        if (a.completed && !b.completed) {
                            return 1;
                        } else if (!a.completed && b.completed) {
                            return -1;
                        }

                    return result;
                })
                .map((task) => (
                    <Task key={task._id} task={task} />
                ))}
        </>
    );
}
