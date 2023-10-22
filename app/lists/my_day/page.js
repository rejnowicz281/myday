import { getMyDayList } from "@actions/lists";
import { createTask } from "@actions/tasks";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default async function MyDayPage() {
    const tasks = await getMyDayList();

    return (
        <>
            <h1>My Day</h1>
            <AddTask action={createTask} forceMyDay={true} />
            <Tasks tasks={tasks} showList={true} forceMyDay={true} />
        </>
    );
}
