import { createList } from "@actions/lists";
import SubmitButton from "@components/SubmitButton";

export default function AddList() {
    return (
        <form action={createList}>
            <input type="text" name="name" placeholder="List name here" />
            <SubmitButton content="Add List" loading="Submitting..." />
        </form>
    );
}
