import { deleteList } from "@actions/lists";
import SubmitButton from "@components/SubmitButton";

export default function DeleteButton({ listId }) {
    return (
        <form action={deleteList}>
            <input type="hidden" name="list" value={listId} />
            <SubmitButton content="Delete List" loading="Deleting..." />
        </form>
    );
}
