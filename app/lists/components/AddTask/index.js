"use client";

import { createTask } from "@actions/tasks";
import SubmitButton from "@components/SubmitButton";
import { useRef } from "react";

export default function AddTask({ listId, forceMyDay = false }) {
    const formRef = useRef(null);

    async function handleAction(formData) {
        await createTask(formData, forceMyDay);
        formRef.current.reset();
    }

    return (
        <form action={handleAction} ref={formRef}>
            <input type="hidden" name="list" value={listId} />
            <div>
                <input type="text" name="name" placeholder="Task name here" />
            </div>
            <div>
                <input type="date" name="due_date" placeholder="due date" />
            </div>
            <div>
                <input type="repeat" name="repeat" placeholder="repeat every n days" />
            </div>
            <div>
                <input type="priority" name="priority" placeholder="task priority" />
            </div>
            <div>
                <textarea name="note" placeholder="optional note"></textarea>
            </div>
            <div>
                <label htmlFor="my_day">My Day</label>
                <input type="checkbox" name="my_day" />
            </div>
            <SubmitButton content="Add Task" loading="Submitting..." />
        </form>
    );
}
