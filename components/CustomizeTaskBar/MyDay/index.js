import { updateTaskMyDay } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function MyDay({ taskId, my_day }) {
    const { setMyDay, isMyDayPage, removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();

        setMyDay(taskId, !my_day);
        updateTaskMyDay(taskId, !my_day);

        if (isMyDayPage && my_day) {
            setEditingTaskId(null);
            removeTask(taskId);
        }
    }

    return (
        <button className={`${css.button}${my_day ? ` ${css.added}` : ""}`} onClick={handleAction}>
            {my_day ? "Remove From My Day" : "Add To My Day"}
        </button>
    );
}
