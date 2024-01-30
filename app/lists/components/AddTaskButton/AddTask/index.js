"use client";

import { createTask } from "@/actions/tasks";
import SubmitButton from "@/components/SubmitButton";
import useModalContext from "@/providers/ModalContext";

export default function AddTask({ listId, forceMyDay = false }) {
    const { closeModal } = useModalContext();

    async function handleAction(formData) {
        await createTask(formData, forceMyDay);
        closeModal();
    }

    return (
        <form action={handleAction}>
            <input className="w-full shadow my-2 p-4" type="hidden" name="list" value={listId} />
            <input className="w-full shadow my-2 p-4" type="text" name="name" placeholder="Name" />
            <input className="w-full shadow my-2 p-4" type="date" name="due_date" placeholder="Due Date" />
            <input
                className="w-full shadow my-2 p-4"
                min="0"
                type="number"
                name="repeat"
                placeholder="Repeat every n days"
            />
            <input className="w-full shadow my-2 p-4" min="0" type="number" name="priority" placeholder="Priority" />
            <textarea className="resize-none w-full shadow my-2 p-4" name="note" placeholder="Optional Note"></textarea>
            <label htmlFor="my_day">My Day</label>
            <input className="ml-3" type="checkbox" name="my_day" />
            <SubmitButton
                className="font-bold rounded disabled:cursor-not-allowed disabled:bg-emerald-200 disabled:text-gray-600 hover:bg-emerald-300 transition-colors bg-emerald-400 w-full mt-6 p-3"
                content="Add Task"
                loading="Submitting..."
            />
        </form>
    );
}
