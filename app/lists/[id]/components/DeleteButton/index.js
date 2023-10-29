import { deleteList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import css from "./index.module.css";

export default function DeleteButton({ listId }) {
    return (
        <form action={deleteList}>
            <input type="hidden" name="list" value={listId} />
            <SubmitButton className={css.submit} content="Delete List" loading="Deleting..." />
        </form>
    );
}
