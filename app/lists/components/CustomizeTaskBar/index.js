import Completed from "@components/tasks/Completed";
import { formatDate } from "@utils/date";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import MyDay from "./MyDay";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";

export default function CustomizeTaskBar({ task, showList }) {
    return (
        <div>
            <EditableName name={task.name} taskId={task._id} />
            <Note taskId={task._id} note={task.note} />
            <DeleteButton taskId={task._id} />
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
            <div>Created: {formatDate(task.createdAt)}</div>
            <div>Last updated: {formatDate(task.updatedAt)}</div>
            <Completed taskId={task._id} completed={task.completed} />
            <MyDay taskId={task._id} my_day={task.my_day} />
            <Repeat taskId={task._id} repeat={task.repeat} />
            <Priority priority={task.priority} taskId={task._id} />
            <DueDate dueDate={task.due_date} taskId={task._id} />
            <hr />
        </div>
    );
}
