import { getList, updateListName } from "@actions/lists";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";
import Tasks from "./components/Tasks";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <>
            <EditableName action={updateListName} listId={id} name={list.name} />
            <DeleteButton listId={id} />
            <p>{list.createdAt.toString()}</p>
            <Tasks listId={id} tasks={list.tasks} />
        </>
    );
}
