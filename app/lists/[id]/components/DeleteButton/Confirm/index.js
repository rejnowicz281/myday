"use client";

import { deleteList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import useModalContext from "@/providers/ModalContext";

export default function Confirm({ listId }) {
    const { closeModal } = useModalContext();

    async function handleDelete(formData) {
        await deleteList(formData);
        closeModal();
    }

    return (
        <>
            <p className="text-center text-xl">Are you sure?</p>
            <form action={handleDelete}>
                <input type="hidden" name="list" value={listId} />
                <SubmitButton
                    className="font-bold rounded disabled:cursor-not-allowed disabled:bg-red-200 disabled:text-gray-600 hover:bg-red-300 transition-colors bg-red-400 w-full mt-6 p-3"
                    content="Delete List"
                    loading="Deleting..."
                />
            </form>
        </>
    );
}
