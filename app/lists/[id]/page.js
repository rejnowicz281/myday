import { getList, updateListName } from "@actions/lists";
import { createTask } from "@actions/tasks";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <>
            <EditableName action={updateListName} listId={id} name={list.name} />
            <DeleteButton listId={id} />
            <p>{list.createdAt.toString()}</p>
            <AddTask listId={id} action={createTask} />
            <Tasks listId={id} tasks={list.tasks} />
        </>
    );
}
