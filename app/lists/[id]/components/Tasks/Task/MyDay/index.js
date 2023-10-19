import { updateTaskMyDay } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";

export default function MyDay({ listId, taskId, my_day }) {
    return (
        <div>
            My Day:
            <form action={updateTaskMyDay}>
                <input type="hidden" name="list" value={listId} />
                <input type="hidden" name="task" value={taskId} />
                <input type="hidden" name="my_day" value={!my_day} />
                <SubmitButton content={my_day.toString()} loading={`${my_day.toString()}...`} />
            </form>
        </div>
    );
}
