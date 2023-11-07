import { getList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import { formatDate } from "@/utils/date";
import AddTaskButton from "../components/AddTaskButton";
import Tasks from "../components/Tasks";
import css from "../page.module.css";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <TasksProvider tasks={list.tasks}>
                    <div className={css.main}>
                        <EditableName listId={id} name={list.name} />
                        <div className={css.createdAt}>Created {formatDate(list.createdAt)}</div>
                        <DeleteButton listId={id} />
                        <AddTaskButton listId={id} />
                        <Tasks />
                    </div>
                </TasksProvider>
            </div>
        </div>
    );
}
