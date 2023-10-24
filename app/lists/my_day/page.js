import { getMyDayList } from "@actions/lists";
import { TasksProvider } from "@providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

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
