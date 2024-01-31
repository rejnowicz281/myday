"use server";

import Task from "@/models/task";
import formatValidationError from "@/utils/actions/formatValidationError";
import { connectToDB } from "@/utils/general/database";
import { isDateToday } from "@/utils/general/date";
import getCurrentUser from "@/utils/general/getServerSession";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";
import repeatTask from "./helpers/repeatTask";

export async function createTask(formData, forceMyDay = false) {
    await connectToDB();

    const actionName = "createTask";

    const user = await getCurrentUser();

    const list = formData.get("list") || undefined;
    const name = formData.get("name") || undefined;
    const due_date = formData.get("due_date") || undefined;
    const my_day = // if my_day is on or forceMyDay is true, assign true, else check if due_date is today, if no due_date assign false
        formData.get("my_day") == "on" || forceMyDay
            ? true
            : due_date
            ? DateTime.now().toFormat("yyyy-MM-dd") == due_date
            : false;
    const repeat = formData.get("repeat") || undefined;
    const priority = formData.get("priority") || undefined;
    const note = formData.get("note") || undefined;

    const task = await new Task({
        owner: user?.id,
        list,
        name,
        my_day,
        due_date,
        repeat,
        priority,
        note,
        completed: false,
    }).populate("list");

    try {
        if (task.list && task.list.owner != user?.id)
            throw new Error("You are not allowed to create tasks for this list");

        await task.save();

        revalidatePath(`/lists/${list}`);

        return actionSuccess(actionName, { task: JSON.stringify(task) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskCompleted(id, completed) {
    await connectToDB();

    const actionName = "updateTaskCompleted";

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                completed,
            },
            { new: true, runValidators: true }
        );

        await repeatTask(updatedTask); // repeat task if possible

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskMyDay(formData) {
    await connectToDB();

    const actionName = "updateTaskMyDay";

    const user = await getCurrentUser();

    const id = formData.get("taskId");
    const my_day = formData.get("my_day") === "true";

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                my_day,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskName(id, name) {
    await connectToDB();

    const actionName = "updateTaskName";

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                name,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskNote(id, note) {
    await connectToDB();

    const actionName = "updateTaskNote";

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                note,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskRepeat(formData) {
    await connectToDB();

    const actionName = "updateTaskRepeat";

    const user = await getCurrentUser();

    const id = formData.get("taskId");
    const repeat = formData.get("repeat");

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                repeat,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskPriority(formData) {
    await connectToDB();

    const actionName = "updateTaskPriority";

    const id = formData.get("taskId");
    const priority = formData.get("priority");

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                priority,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateTaskDueDate(id, due_date) {
    await connectToDB();

    const actionName = "updateTaskDueDate";

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                due_date,
                my_day: (due_date !== null && isDateToday(due_date)) || undefined,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        return actionSuccess(actionName, { task: JSON.stringify(updatedTask) });
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function deleteTask(formData) {
    await connectToDB();

    const actionName = "deleteTask";

    const user = await getCurrentUser();

    const id = formData.get("taskId");

    const deletedTask = await Task.findOneAndDelete({ _id: id, owner: user?.id });

    revalidatePath(`/lists/${deletedTask?.list}`);

    return actionSuccess(actionName, { task: id });
}
