"use client";

import CompleteButton from "@/components/tasks/CompleteButton";
import DueDateDisplay from "@/components/tasks/DueDateDisplay";
import RepeatDisplay from "@/components/tasks/RepeatDisplay";
import TasksContext from "@/providers/TasksContext";
import Link from "next/link";
import { useContext } from "react";

export default function Task({ task }) {
    const { isMyDayPage, editingTaskId, setEditingTaskId } = useContext(TasksContext);

    return (
        <div
            className={`group px-3 py-5 cursor-pointer border rounded text-lg${
                editingTaskId == task._id ? ` bg-gray-100` : ""
            }${task.completed ? ` text-gray-300` : ""}`}
            onClick={() => setEditingTaskId(task._id)}
        >
            <div className="flex items-center gap-2">
                <CompleteButton
                    className="cursor-pointer appearance-none m-0 p-4 border border-green-300 transition-all duration-100 hover:bg-green-400 hover:shadow-[inset_0_0_0_4px_White] checked:bg-green-500 checked:shadow-[inset_0_0_0_4px_White]"
                    taskId={task._id}
                    completed={task.completed}
                />
                <h3 className={`group-hover:text-gray-500 text-3xl font-bold${task.completed ? " line-through" : ""}`}>
                    {task.name}
                </h3>
            </div>

            {isMyDayPage && (
                <li className="first-of-type:pt-4">
                    From{" "}
                    {task.list ? (
                        <Link className="font-bold hover:text-gray-500" href={`/lists/${task.list._id}`}>
                            {task.list.name}
                        </Link>
                    ) : (
                        <Link className="font-bold hover:text-gray-500" href="/lists/tasks">
                            Tasks
                        </Link>
                    )}
                </li>
            )}
            {!isMyDayPage && task.my_day && <li className="first-of-type:pt-4">My Day</li>}
            {task.repeat > 0 && (
                <li className="first-of-type:pt-4">
                    <RepeatDisplay repeat={task.repeat} />
                </li>
            )}
            {task.priority > 0 && <li className="first-of-type:pt-4">{task.priority} Priority</li>}
            {task.due_date && (
                <li className="first-of-type:pt-4">
                    <DueDateDisplay dueDate={task.due_date} taskId={task._id} />
                </li>
            )}
        </div>
    );
}
