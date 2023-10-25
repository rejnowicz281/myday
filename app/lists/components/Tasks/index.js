"use client";

import TasksContext from "@providers/TasksContext";
import { useContext } from "react";
import SortBy from "./SortBy";
import Task from "./Task";

export default function Tasks({ showList = false }) {
    const { tasks, currentSortKey, currentSortOrder } = useContext(TasksContext);

    return (
        <>
            <SortBy />
            {tasks
                .sort((a, b) => {
                    // Define a comparison function based on the sorting key
                    let result;
                    switch (currentSortKey) {
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

                    // Adjust the comparison result based on the currentSortOrder
                    if (currentSortOrder == "Desc") result *= -1; // Reverse the order for descending

                    return result;
                })
                .map((task) => (
                    <Task key={task._id} task={task} showList={showList} />
                ))}
        </>
    );
}
