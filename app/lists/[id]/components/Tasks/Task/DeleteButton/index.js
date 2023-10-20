import { deleteTask } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";

export default function DeleteButton({ listId, taskId }) {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="list" value={listId} />
            <input type="hidden" name="task" value={taskId} />

            <SubmitButton content="Delete Task" loading="Deleting..." />
        </form>
    );
}
