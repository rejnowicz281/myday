"use client";
import { createList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import { useRef } from "react";
import { VscAdd } from "react-icons/vsc";
import css from "./index.module.css";

export default function AddList() {
    const formRef = useRef(null);

    async function handleAction(formData) {
        await createList(formData);
        formRef.current.reset();
    }

    return (
        <form className={css.form} action={handleAction} ref={formRef}>
            <input placeholder="Add List" className={css.input} type="text" name="name" />
            <SubmitButton className={css.submit} content={<VscAdd />} />
        </form>
    );
}
