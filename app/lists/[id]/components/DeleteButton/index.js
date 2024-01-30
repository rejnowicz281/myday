"use client";

import useModalContext from "@/providers/ModalContext";
import { BsTrash } from "react-icons/bs";
import Confirm from "./Confirm";

export default function DeleteButton({ listId }) {
    const { setModalContent } = useModalContext();

    return (
        <button
            onClick={() => setModalContent(<Confirm listId={listId} />)}
            className="text-3xl transition-colors hover:text-stone-400"
        >
            <BsTrash />
        </button>
    );
}
