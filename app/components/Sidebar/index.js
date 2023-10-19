import { getLists } from "@actions/lists";
import Link from "next/link";
import AddList from "./AddList";

export default async function Sidebar() {
    const lists = await getLists();

    return (
        <>
            <AddList />
            <ul>
                {lists.map((list) => (
                    <li key={list.id}>
                        <Link href={`/lists/${list.id}`}>{list.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
