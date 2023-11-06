"use client";

import useModalContext from "@/providers/ModalContext";
import AddTask from "./AddTask";

export default function AddTaskButton({ forceMyDay = false, listId }) {
    const { setModalContent } = useModalContext();

    return (
        <button onClick={() => setModalContent(<AddTask forceMyDay={forceMyDay} listId={listId} />)}>Add Task</button>
    );
}
