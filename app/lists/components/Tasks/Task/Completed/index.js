import { updateTaskCompleted } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";

export default function Completed({ taskId, completed }) {
    return (
        <div>
            Completed:
            <form action={updateTaskCompleted}>
                <input type="hidden" name="task" value={taskId} />
                <input type="hidden" name="completed" value={!completed} />
                <SubmitButton content={completed.toString()} loading={`${completed.toString()}...`} />
            </form>
        </div>
    );
}
