import { updateTaskMyDay } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function MyDay({ taskId, my_day }) {
    const { setMyDay, isMyDayPage, removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleAction(formData) {
        const taskId = formData.get("taskId");
        const myDayInput = formData.get("my_day") === "true";

        setMyDay(taskId, myDayInput);
        if (isMyDayPage && my_day) removeTask(taskId);

        updateTaskMyDay(formData);
    }

    function handleBeforeAction() {
        if (isMyDayPage && my_day) setEditingTaskId(null);
    }

    return (
        <form className="flex" onSubmit={handleBeforeAction} action={handleAction}>
            <input type="hidden" name="taskId" value={taskId} />
            <input type="hidden" name="my_day" value={!my_day} />
            <button
                className={`flex-1 rounded hover:bg-emerald-300 transition-colors bg-emerald-400 p-3 font-bold${
                    my_day ? ` bg-red-500 hover:bg-red-400` : ""
                }`}
            >
                {my_day ? "Remove From My Day" : "Add To My Day"}
            </button>
        </form>
    );
}
