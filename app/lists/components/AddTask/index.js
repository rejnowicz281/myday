"use client";

import { createTask } from "@/actions/tasks";
import SubmitButton from "@/components/SubmitButton";
import { useRef } from "react";
import css from "./index.module.css";

export default function AddTask({ listId, forceMyDay = false }) {
    const formRef = useRef(null);

    async function handleAction(formData) {
        await createTask(formData, forceMyDay);
        formRef.current.reset();
    }

    return (
        <form className={css.form} action={handleAction} ref={formRef}>
            <input className={css.field} type="hidden" name="list" value={listId} />
            <input className={css.field} type="text" name="name" placeholder="Name" />
            <input className={css.field} type="date" name="due_date" placeholder="Due Date" />
            <input className={css.field} min="0" type="number" name="repeat" placeholder="Repeat every n days" />
            <input className={css.field} min="0" type="number" name="priority" placeholder="Priority" />
            <textarea className={css.field} name="note" placeholder="Optional Note"></textarea>
            <label htmlFor="my_day">My Day</label>
            <input className={css.my_day} type="checkbox" name="my_day" />
            <SubmitButton className={css.submit} content="Add Task" loading="Submitting..." />
        </form>
    );
}
