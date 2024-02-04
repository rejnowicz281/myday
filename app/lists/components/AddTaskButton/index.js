"use client";

import { createTask } from "@/actions/tasks";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AddTaskButton({ listId }) {
    const [open, setOpen] = useState(false);
    const { isMyDayPage } = useContext(TasksContext);

    async function handleAction(formData) {
        await createTask(formData, isMyDayPage);

        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <IoAddCircleOutline className="text-3xl transition-colors hover:text-stone-400" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>Create a task. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-2" action={handleAction}>
                    <input type="hidden" name="list" value={listId} />
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" name="name" defaultValue="Untitled Task" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="due_date" className="text-right">
                            Due Date
                        </Label>
                        <Input type="date" id="due_date" name="due_date" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="priority" className="text-right">
                            Priority
                        </Label>
                        <Input
                            min="0"
                            type="number"
                            defaultValue="0"
                            name="priority"
                            id="priority"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="repeat" className="text-right">
                            Repeat
                        </Label>
                        <Input
                            min="0"
                            type="number"
                            placeholder="Every n days"
                            id="repeat"
                            name="repeat"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="note" className="text-right">
                            Note
                        </Label>
                        <Textarea
                            placeholder="Optional Note"
                            name="note"
                            id="note"
                            className="resize-none col-span-3"
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <Checkbox name="my_day" id="my_day" />
                        <Label className="pl-2" htmlFor="my_day">
                            My Day
                        </Label>
                    </div>

                    <DialogFooter>
                        <Button asChild>
                            <SubmitButton content="Create Task" loading="Creating..." />
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
