import { getList } from "@actions/lists";
import { formatDate } from "@utils/date";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { TasksProvider } from "../providers/TasksContext";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <>
            <EditableName listId={id} name={list.name} />
            <DeleteButton listId={id} />
            <div>Created {formatDate(list.createdAt)}</div>
            <TasksProvider tasks={list.tasks}>
                <AddTask listId={id} />
                <Tasks listId={id} />
            </TasksProvider>
        </>
    );
}
