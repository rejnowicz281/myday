"use client";

import { deleteTask } from "@/actions/tasks";
import useModalContext from "@/providers/ModalContext";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

export default function DeleteButton({ taskId }) {
    const { setModalContent, closeModal } = useModalContext();
    const { removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleAction(formData) {
        const taskId = formData.get("taskId");

        removeTask(taskId);
        deleteTask(formData);
    }

    function handleBeforeAction() {
        closeModal();
        setEditingTaskId(null);
    }

    return (
        <button
            onClick={() =>
                setModalContent(
                    <>
                        <p className="text-center text-xl">Are you sure?</p>
                        <form onSubmit={handleBeforeAction} action={handleAction}>
                            <input type="hidden" name="taskId" value={taskId} />
                            <button className="font-bold rounded disabled:cursor-not-allowed disabled:bg-red-200 disabled:text-gray-600 hover:bg-red-300 transition-colors bg-red-400 w-full mt-6 p-3">
                                Delete Task
                            </button>
                        </form>
                    </>
                )
            }
            className="text-3xl transition-colors hover:text-stone-400"
        >
            <BsTrash />
        </button>
    );
}
