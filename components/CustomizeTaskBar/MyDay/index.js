import { updateTaskMyDay } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

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
        <button
            className={`rounded hover:bg-emerald-300 transition-colors bg-emerald-400 p-3 font-bold${
                my_day ? ` bg-red-500 hover:bg-red-400` : ""
            }`}
            onClick={handleAction}
        >
            {my_day ? "Remove From My Day" : "Add To My Day"}
        </button>
    );
}
