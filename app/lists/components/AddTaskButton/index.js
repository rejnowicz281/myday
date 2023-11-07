"use client";

import useModalContext from "@/providers/ModalContext";
import { IoAddCircleOutline } from "react-icons/io5";
import AddTask from "./AddTask";
import css from "./index.module.css";

export default function AddTaskButton({ forceMyDay = false, listId }) {
    const { setModalContent } = useModalContext();

    return (
        <button
            className={css.button}
            onClick={() => setModalContent(<AddTask forceMyDay={forceMyDay} listId={listId} />)}
        >
            <IoAddCircleOutline />
        </button>
    );
}
