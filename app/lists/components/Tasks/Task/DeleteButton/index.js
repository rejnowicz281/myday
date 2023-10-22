import { deleteTask } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";

export default function DeleteButton({ taskId }) {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="task" value={taskId} />

            <SubmitButton content="Delete Task" loading="Deleting..." />
        </form>
    );
}
