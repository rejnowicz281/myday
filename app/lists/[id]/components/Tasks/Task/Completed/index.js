import { updateTaskCompleted } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";

export default function Completed({ listId, taskId, completed }) {
    return (
        <div>
            Completed:
            <form action={updateTaskCompleted}>
                <input type="hidden" name="list" value={listId} />
                <input type="hidden" name="task" value={taskId} />
                <input type="hidden" name="completed" value={!completed} />
                <SubmitButton content={completed.toString()} loading={`${completed.toString()}...`} />
            </form>
        </div>
    );
}
