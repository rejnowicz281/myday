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
                        <div className={css["link-icon"]}>
                            <LiaSunSolid />
                        </div>
                        <div className={css["link-text"]}>My Day</div>
                    </NavLink>
                    <NavLink href="/lists/tasks" className={css.link} activeClassName={css["active-link"]}>
                        <div className={css["link-icon"]}>
                            <AiOutlineHome />
                        </div>
                        <div className={css["link-text"]}>Tasks</div>
                    </NavLink>
                    {lists.map((list) => (
                        <NavLink
                            key={list.id}
                            href={`/lists/${list.id}`}
                            className={css.link}
                            activeClassName={css["active-link"]}
                        >
                            <div className={css["link-icon"]}>
                                <AiOutlineUnorderedList />
                            </div>
                            <div className={css["link-text"]}>{list.name}</div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
