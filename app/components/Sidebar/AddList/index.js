"use client";
import { createList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import { useRef } from "react";

export default function AddList() {
    const formRef = useRef(null);

    async function handleAction(formData) {
        await createList(formData);
        formRef.current.reset();
    }

    return (
        <form action={handleAction} ref={formRef}>
            <input type="text" name="name" placeholder="List name here" />
            <SubmitButton content="Add List" loading="Submitting..." />
        </form>
    );
}
