import MyDay from "@/components/CustomizeTaskBar/MyDay";
import CompleteButton from "@/components/tasks/CompleteButton";
import { formatDateWithTime } from "@/utils/date";
import CloseButton from "./CloseButton";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";
import css from "./index.module.css";

export default function CustomizeTaskBar({ task }) {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css["top-buttons"]}>
                    <CloseButton />
                    <DeleteButton taskId={task._id} />
                </div>
                <div>Created: {formatDateWithTime(task.createdAt)}</div>
                <div>Last updated: {formatDateWithTime(task.updatedAt)}</div>
                <div className={css["name-box"]}>
                    <CompleteButton className={css["complete-button"]} taskId={task._id} completed={task.completed} />
                    <EditableName name={task.name} taskId={task._id} />
                </div>
                <MyDay taskId={task._id} my_day={task.my_day} />
                <Repeat taskId={task._id} repeat={task.repeat} />
                <Priority priority={task.priority} taskId={task._id} />
                <DueDate dueDate={task.due_date} taskId={task._id} />
                <Note taskId={task._id} note={task.note} />
            </div>
        </div>
    );
}
