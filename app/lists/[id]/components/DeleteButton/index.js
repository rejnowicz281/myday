"use client";

import useModalContext from "@/providers/ModalContext";
import { BsTrash } from "react-icons/bs";
import Confirm from "./Confirm";
import css from "./index.module.css";

export default function DeleteButton({ listId }) {
    const { setModalContent } = useModalContext();

    return (
        <button onClick={() => setModalContent(<Confirm listId={listId} />)} className={css.button}>
            <BsTrash />
        </button>
    );
}
