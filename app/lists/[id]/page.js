import { getList } from "@actions/lists";
import Tasks from "./components/Tasks";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <>
            <h1>{list.name}</h1>
            <p>{list.createdAt.toString()}</p>
            <Tasks listId={id} tasks={list.tasks} />
        </>
    );
}
