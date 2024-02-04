"use client";
import { deleteList } from "@/actions/lists";
import SubmitButton from "@/components/SubmitButton";
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
import { useState } from "react";
import { BsTrash } from "react-icons/bs";

export default function DeleteButton({ listId }) {
    const [open, setOpen] = useState(false);

    async function handleDelete(formData) {
        await deleteList(formData);
        setOpen(true);
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger>
                <BsTrash className="text-3xl transition-colors hover:text-stone-400" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are about to permanently delete the list and all of its tasks.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <form action={handleDelete}>
                        <input type="hidden" name="list" value={listId} />
                        <AlertDialogAction asChild>
                            <SubmitButton content="Delete List" loading="Deleting..." />
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
