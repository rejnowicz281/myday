import { getMyDayList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";

export default async function MyDayPage() {
    const tasks = JSON.parse(await getMyDayList());

    return (
        <div className="flex flex-1">
            <TasksProvider tasks={tasks} isMyDayPage={true}>
                <div className="flex-1 flex relative break-words">
                    <div className="absolute inset-0 overflow-y-auto p-8">
                        <div className="pl-3">
                            <h1 className="text-[3.75rem] leading-[inherit] font-bold block">My Day</h1>
                            <AddTaskButton />
                        </div>

                        {tasks.length > 0 && <Tasks />}
                    </div>
                </div>
            </TasksProvider>
        </div>
    );
}
