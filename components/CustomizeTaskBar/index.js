"use client";

import Completed from "@/components/tasks/Completed";
import MyDay from "@/components/tasks/MyDay";
import TasksContext from "@/providers/TasksContext";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import { useContext } from "react";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";
import css from "./index.module.css";

export default function CustomizeTaskBar({ task }) {
    const { showList } = useContext(TasksContext);

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <EditableName name={task.name} taskId={task._id} />
                {showList && (
                    <div>
                        List:
                        {task.list ? (
                            <Link className={css["link-list"]} href={`/lists/${task.list._id}`}>
                                {task.list.name}
                            </Link>
                        ) : (
                            <Link className={css["link-list"]} href="/lists/tasks">
                                Tasks
                            </Link>
                        )}
                    </div>
                )}
                <div>Created: {formatDate(task.createdAt)}</div>
                <div>Last updated: {formatDate(task.updatedAt)}</div>
                <DeleteButton taskId={task._id} />
                <Completed taskId={task._id} completed={task.completed} />
                <MyDay taskId={task._id} my_day={task.my_day} />
                <Repeat taskId={task._id} repeat={task.repeat} />
                <Priority priority={task.priority} taskId={task._id} />
                <DueDate dueDate={task.due_date} taskId={task._id} />
                <Note taskId={task._id} note={task.note} />
            </div>
        </div>
    );
}
