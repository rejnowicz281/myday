"use client";

import useModalContext from "@/providers/ModalContext";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddTask from "./AddTask";

export default function AddTaskButton({ listId }) {
    const { isMyDayPage } = useContext(TasksContext);
    const { setModalContent } = useModalContext();

    return (
        <button
            className="text-3xl transition-colors hover:text-stone-400"
            onClick={() => setModalContent(<AddTask forceMyDay={isMyDayPage} listId={listId} />)}
        >
            <IoAddCircleOutline />
        </button>
    );
}
