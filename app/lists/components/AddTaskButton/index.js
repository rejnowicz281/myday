"use client";

import useModalContext from "@/providers/ModalContext";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddTask from "./AddTask";
import css from "./index.module.css";

export default function AddTaskButton({ listId }) {
    const { isMyDayPage } = useContext(TasksContext);
    const { setModalContent } = useModalContext();

    return (
        <button
            className={css.button}
            onClick={() => setModalContent(<AddTask forceMyDay={isMyDayPage} listId={listId} />)}
        >
            <IoAddCircleOutline />
        </button>
    );
}
