import { getLists } from "@/actions/lists";
import NavLink from "@/components/NavLink";
import AddList from "./AddList";
import css from "./index.module.css";

export default async function Sidebar() {
    const lists = await getLists();

    return (
        <div className={css.container}>
            <AddList />
            <div className={css["lists-wrapper"]}>
                <div className={css.lists}>
                    <NavLink href="/lists/my_day" className={css.link} activeClassName={css["active-link"]}>
                        My Day
                    </NavLink>
                    <NavLink href="/lists/tasks" className={css.link} activeClassName={css["active-link"]}>
                        Tasks
                    </NavLink>
                    {lists.map((list) => (
                        <NavLink
                            key={list.id}
                            href={`/lists/${list.id}`}
                            className={css.link}
                            activeClassName={css["active-link"]}
                        >
                            {list.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
