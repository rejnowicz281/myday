"use client";

import { deleteTask } from "@/actions/tasks";
import useModalContext from "@/providers/ModalContext";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import css from "./index.module.css";

export default function DeleteButton({ taskId }) {
    const { setModalContent, closeModal } = useModalContext();
    const { removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleDelete() {
        setEditingTaskId(null);
        closeModal();
        removeTask(taskId);
        deleteTask(taskId);
    }

    return (
        <button
            onClick={() =>
                setModalContent(
                    <>
                        <p className={css.sure}>Are you sure?</p>
                        <button className={css.delete} onClick={handleDelete}>
                            Delete Task
                        </button>
                    </>
                )
            }
            className={css.button}
        >
            <BsTrash />
        </button>
    );
}
