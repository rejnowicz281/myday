"use client";

import { deleteTask } from "@/actions/tasks";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

export default function DeleteButton({ taskId }) {
    const { removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleDelete(formData) {
        const taskId = formData.get("taskId");

        removeTask(taskId);
        deleteTask(formData);
    }

    function handleBeforeDelete() {
        setEditingTaskId(null);
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <BsTrash className="text-3xl transition-colors hover:text-stone-400" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>You are about to permanently this task.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form onSubmit={handleBeforeDelete} action={handleDelete}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <AlertDialogAction asChild>
                            <button type="submit">Delete Task</button>
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
