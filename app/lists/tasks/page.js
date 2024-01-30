import { getListlessTasks } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";

export default async function TasksPage() {
    const tasks = await getListlessTasks();

    return (
        <div className="flex flex-1">
            <TasksProvider tasks={tasks}>
                <div className="flex-1 flex relative break-words">
                    <div className="absolute inset-0 overflow-y-auto p-8">
                        <div className="pl-3">
                            <h1 className="text-[3.75rem] leading-[inherit] font-bold block">Tasks</h1>
                            <AddTaskButton />
                        </div>

                        {tasks.length > 0 && <Tasks />}
                    </div>
                </div>
            </TasksProvider>
        </div>
    );
}
