import { getList } from "@/actions/lists";
import { TasksProvider } from "@/providers/TasksContext";
import { formatDate } from "@/utils/date";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import DeleteButton from "./components/DeleteButton";
import EditableName from "./components/EditableName";
import css from "./page.module.css";

export default async function ListPage({ params: { id } }) {
    const list = await getList(id);

    return (
        <div className={css.container}>
            <EditableName listId={id} name={list.name} />
            <div className={css.createdAt}>Created {formatDate(list.createdAt)}</div>
            <DeleteButton listId={id} />
            <AddTask listId={id} />
            <TasksProvider tasks={list.tasks}>
                <Tasks />
            </TasksProvider>
        </div>
    );
}
