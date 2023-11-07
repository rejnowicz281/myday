"use client";

import { deleteList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import useModalContext from "@/providers/ModalContext";
import css from "./index.module.css";

export default function Confirm({ listId }) {
    const { closeModal } = useModalContext();

    async function handleDelete(formData) {
        await deleteList(formData);
        closeModal();
    }

    return (
        <>
            <p className={css.sure}>Are you sure?</p>
            <form action={handleDelete}>
                <input type="hidden" name="list" value={listId} />
                <SubmitButton className={css.submit} content="Delete List" loading="Deleting..." />
            </form>
        </>
    );
}
