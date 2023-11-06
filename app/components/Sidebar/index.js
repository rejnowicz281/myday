import { getLists } from "@/actions/lists";
import NavLink from "@/components/NavLink";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";
import { LiaSunSolid } from "react-icons/lia";
import AddList from "./AddList";
import Signout from "./Signout";
import css from "./index.module.css";

export default async function Sidebar() {
    const lists = await getLists();

    return (
        <div className={css.container}>
            <Signout />
            <AddList />
            <div className={css["lists-wrapper"]}>
                <div className={css.lists}>
                    <NavLink href="/lists/my_day" className={css.link} activeClassName={css["active-link"]}>
                        <LiaSunSolid />
                        My Day
                    </NavLink>
                    <NavLink href="/lists/tasks" className={css.link} activeClassName={css["active-link"]}>
                        <AiOutlineHome />
                        Tasks
                    </NavLink>
                    {lists.map((list) => (
                        <NavLink
                            key={list.id}
                            href={`/lists/${list.id}`}
                            className={css.link}
                            activeClassName={css["active-link"]}
                        >
                            <AiOutlineUnorderedList />
                            {list.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
