import { getMyDayList } from "@actions/lists";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { TasksProvider } from "../providers/TasksContext";

export default async function MyDayPage() {
    const tasks = await getMyDayList();

    return (
        <>
            <h1>My Day</h1>
            <TasksProvider tasks={tasks}>
                <AddTask forceMyDay={true} />
                <Tasks showList={true} />
            </TasksProvider>
        </>
    );
}
