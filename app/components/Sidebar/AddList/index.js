"use client";
import { createList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
import { VscAdd } from "@react-icons/all-files/vsc/VscAdd";
import { useRef } from "react";

export default function AddList() {
    const formRef = useRef(null);

    async function handleAction(formData) {
        await createList(formData);
        formRef.current.reset();
    }

    return (
        <form className="flex py-4 gap-4" action={handleAction} ref={formRef}>
            <input
                placeholder="Add List"
                className="flex-1 text-xl border-b border-b-slate-600 outline-none"
                type="text"
                name="name"
            />
            <SubmitButton
                className="hover:text-stone-400 disabled:text-stone-400 disabled:animate-[spin_2s_linear_infinite] text-xl transition-colors"
                content={<VscAdd />}
            />
        </form>
    );
}
