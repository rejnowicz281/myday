"use client";

import Completed from "@components/tasks/Completed";
import DueDateDisplay from "@components/tasks/DueDateDisplay";
import MyDay from "@components/tasks/MyDay";
import RepeatDisplay from "@components/tasks/RepeatDisplay";
import TasksContext from "@providers/TasksContext";
import Link from "next/link";
import { useContext } from "react";
import css from "./index.module.css";

export default function Task({ task, showList }) {
    const { editingTaskId, setEditingTaskId } = useContext(TasksContext);

    return (
        <div
            className={`${css.container}${editingTaskId == task._id ? ` ${css.editing}` : ""}`}
            onClick={() => setEditingTaskId(task._id)}
        >
            <h2>{task.name}</h2>
            {showList && (
                <div>
                    List:
                    {task.list ? (
                        <Link href={`/lists/${task.list._id}`}>{task.list.name}</Link>
                    ) : (
                        <Link href="/lists/tasks">Tasks</Link>
                    )}
                </div>
            )}
            <Completed taskId={task._id} completed={task.completed} />
            <MyDay taskId={task._id} my_day={task.my_day} />

            <RepeatDisplay repeat={task.repeat} />

            <div>Priority: {task.priority}</div>
            {task.due_date && <DueDateDisplay dueDate={task.due_date} taskId={task._id} />}
            <hr />
        </div>
    );
}
