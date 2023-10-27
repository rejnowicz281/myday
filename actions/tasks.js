"use server";

import Task from "@/models/task";
import { connectToDB } from "@/utils/database";
import { isDateToday } from "@/utils/date";
import formatValidationError from "@/utils/formatValidationError";
import getCurrentUser from "@/utils/getServerSession";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";
import repeatTask from "./helpers/repeatTask";

export async function createTask(formData, forceMyDay = false) {
    await connectToDB();

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

        const data = {
            action: "createTask",
            success: true,
            task: JSON.stringify(task),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "createTask",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskCompleted(id, completed) {
    await connectToDB();

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

        const data = {
            action: "updateTaskCompleted",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskCompleted",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskMyDay(id, my_day) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                my_day,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        const data = {
            action: "updateTaskMyDay",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskMyDay",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskName(id, name) {
    await connectToDB();

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

        const data = {
            action: "updateTaskName",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskName",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskNote(id, note) {
    await connectToDB();

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

        const data = {
            action: "updateTaskNote",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskNote",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskRepeat(id, repeat) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                repeat,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        const data = {
            action: "updateTaskRepeat",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskRepeat",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskPriority(id, priority) {
    await connectToDB();

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

        const data = {
            action: "updateTaskPriority",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskPriority",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateTaskDueDate(id, due_date) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: user?.id },
            {
                due_date,
                my_day: isDateToday(due_date) || undefined,
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${updatedTask?.list}`);

        const data = {
            action: "updateTaskDueDate",
            success: true,
            task: JSON.stringify(updatedTask),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateTaskDueDate",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function deleteTask(id) {
    await connectToDB();

    const user = await getCurrentUser();

    const deletedTask = await Task.findOneAndDelete({ _id: id, owner: user?.id });

    revalidatePath(`/lists/${deletedTask?.list}`);

    const data = {
        action: "deleteTask",
        success: true,
        task: id,
    };
    console.log(data);
    return data;
}
