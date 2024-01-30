import { getList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <div className="flex flex-1">
            <TasksProvider tasks={list.tasks}>
                <div className="flex-1 flex relative break-words">
                    <div className="absolute inset-0 overflow-y-auto p-8">
                        <div className="pl-3">
                            <EditableName listId={id} name={list.name} />

                            <div className="flex items-center gap-2">
                                <DeleteButton listId={id} />
                                <AddTaskButton listId={id} />
                            </div>
                        </div>

                        {list.tasks.length > 0 && <Tasks />}
                    </div>
                </div>
            </TasksProvider>
        </div>
    );
}
