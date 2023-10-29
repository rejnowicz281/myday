import { getMyDayList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default async function MyDayPage() {
    const tasks = await getMyDayList();

    return (
        <div>
            <h1>My Day</h1>
            <AddTask forceMyDay={true} />
            <TasksProvider tasks={tasks} showList={true}>
                <Tasks />
            </TasksProvider>
        </div>
    );
}
