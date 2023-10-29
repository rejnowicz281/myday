import { getList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import { formatDate } from "@/utils/date";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <div>
            <EditableName listId={id} name={list.name} />
            <DeleteButton listId={id} />
            <div>Created {formatDate(list.createdAt)}</div>
            <AddTask listId={id} />
            <TasksProvider tasks={list.tasks}>
                <Tasks />
            </TasksProvider>
        </div>
    );
}
