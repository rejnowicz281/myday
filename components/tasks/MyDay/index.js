import { updateTaskMyDay } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function MyDay({ taskId, my_day }) {
    const { setMyDay } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();
        setMyDay(taskId, !my_day);
        updateTaskMyDay(taskId, !my_day);
    }

    return (
        <div>
            My Day:
            <button onClick={handleAction}>{my_day.toString()}</button>
        </div>
    );
}
