"use server";

import List from "@models/list";
import Task from "@models/task";
import { connectToDB } from "@utils/database";
import { isDateToday } from "@utils/date";
import formatValidationError from "@utils/formatValidationError";
import getCurrentUser from "@utils/getServerSession";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";
import repeatTask from "./helpers/repeatTask";

export async function createTask(formData) {
    await connectToDB();

    const user = await getCurrentUser();
    const list = formData.get("list");
    const name = formData.get("name") || undefined;
    const due_date = formData.get("due_date") || undefined;
    const my_day = // if my_day is on, assign true, else check if due_date is today, if no due_date assign false
        formData.get("my_day") == "on" ? true : due_date ? DateTime.now().toFormat("yyyy-MM-dd") == due_date : false;
    const repeat = formData.get("repeat") || undefined;
    const priority = formData.get("priority") || undefined;
    const note = formData.get("note") || undefined;

    const task = new Task({
        name,
        my_day,
        due_date,
        repeat,
        priority,
        note,
        completed: false,
    });

    try {
        await List.findOneAndUpdate(
            { _id: list, user: user?.id },
            {
                $push: { tasks: task },
            },
            { new: true, runValidators: true }
        );

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

export async function updateTaskCompleted(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = formData.get("list");
    const task = formData.get("task");
    const completed = formData.get("completed");

    try {
        await List.findOneAndUpdate(
            { _id: list, user: user?.id, "tasks._id": task },
            {
                $set: {
                    "tasks.$.completed": completed,
                },
            },
            { new: true, runValidators: true }
        );

        if (completed == "true") await repeatTask(list, task, user);

        revalidatePath(`/lists/${list}`);

        const data = {
            action: "updateTaskCompleted",
            success: true,
            task,
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

export async function updateTaskMyDay(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = formData.get("list");
    const task = formData.get("task");
    const my_day = formData.get("my_day");

    try {
        await List.findOneAndUpdate(
            { _id: list, user: user?.id, "tasks._id": task },
            {
                $set: {
                    "tasks.$.my_day": my_day,
                },
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${list}`);

        const data = {
            action: "updateTaskMyDay",
            success: true,
            task,
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

export async function updateTaskName(new_name, listId, taskId) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        await List.findOneAndUpdate(
            { _id: listId, user: user?.id, "tasks._id": taskId },
            {
                $set: {
                    "tasks.$.name": new_name,
                },
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${listId}`);

        const data = {
            action: "updateTaskName",
            success: true,
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

export async function updateTaskNote(note, listId, taskId) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        await List.findOneAndUpdate(
            { _id: listId, user: user?.id, "tasks._id": taskId },
            {
                $set: {
                    "tasks.$.note": note,
                },
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${listId}`);

        const data = {
            action: "updateTaskNote",
            success: true,
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

export async function updateTaskRepeat(repeat, listId, taskId) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        await List.findOneAndUpdate(
            { _id: listId, user: user?.id, "tasks._id": taskId },
            {
                $set: {
                    "tasks.$.repeat": repeat,
                },
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${listId}`);

        const data = {
            action: "updateTaskRepeat",
            success: true,
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

export async function updateTaskPriority(priority, listId, taskId) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        await List.findOneAndUpdate(
            { _id: listId, user: user?.id, "tasks._id": taskId },
            {
                $set: {
                    "tasks.$.priority": priority,
                },
            },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${listId}`);

        const data = {
            action: "updateTaskPriority",
            success: true,
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

export async function updateTaskDueDate(due_date, listId, taskId) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        const updateQuery = isDateToday(due_date)
            ? {
                  $set: {
                      "tasks.$.due_date": due_date,
                      "tasks.$.my_day": true,
                  },
              }
            : {
                  $set: {
                      "tasks.$.due_date": due_date,
                  },
              };

        await List.findOneAndUpdate({ _id: listId, user: user?.id, "tasks._id": taskId }, updateQuery, {
            new: true,
            runValidators: true,
        });

        revalidatePath(`/lists/${listId}`);

        const data = {
            action: "updateTaskDueDate",
            success: true,
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

export async function deleteTask(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = formData.get("list");
    const task = formData.get("task");

    await List.findOneAndUpdate(
        { _id: list, user: user?.id },
        {
            $pull: { tasks: { _id: task } },
        },
        { new: true }
    );

    revalidatePath(`/lists/${list}`);

    const data = {
        action: "deleteTask",
        success: true,
    };
    console.log(data);
    return data;
}
