"use client";

import CompleteButton from "@/components/tasks/CompleteButton";
import DueDateDisplay from "@/components/tasks/DueDateDisplay";
import RepeatDisplay from "@/components/tasks/RepeatDisplay";
import TasksContext from "@/providers/TasksContext";
import Link from "next/link";
import { useContext } from "react";
import css from "./index.module.css";

export default function Task({ task }) {
    const { showList, editingTaskId, setEditingTaskId } = useContext(TasksContext);

    return (
        <div
            className={`${css.container}${editingTaskId == task._id ? ` ${css.editing}` : ""}${
                task.completed ? ` ${css.completed}` : ""
            }`}
            onClick={() => setEditingTaskId(task._id)}
        >
            <div className={css["top-box"]}>
                <CompleteButton className={css["complete-button"]} taskId={task._id} completed={task.completed} />
                <h3 className={css.name}>{task.name}</h3>
            </div>
            {showList && (
                <li>
                    From{" "}
                    {task.list ? (
                        <Link className={css["link-list"]} href={`/lists/${task.list._id}`}>
                            {task.list.name}
                        </Link>
                    ) : (
                        <Link className={css["link-list"]} href="/lists/tasks">
                            Tasks
                        </Link>
                    )}
                </li>
            )}
            {!showList && task.my_day && <li>My Day</li>}
            {task.repeat > 0 && (
                <li className={css.repeat}>
                    <RepeatDisplay repeat={task.repeat} />
                </li>
            )}
            {task.priority > 0 && <li>{task.priority} Priority</li>}
            {task.due_date && (
                <li>
                    <DueDateDisplay dueDate={task.due_date} taskId={task._id} />
                </li>
            )}
        </div>
    );
}
