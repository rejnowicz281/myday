"use server";

import List from "@models/list";
import Task from "@models/task";
import { connectToDB } from "@utils/database";
import formatValidationError from "@utils/formatValidationError";
import getCurrentUser from "@utils/getServerSession";
import { revalidatePath } from "next/cache";

export async function createTask(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = formData.get("list");
    const name = formData.get("name");
    const my_day = formData.get("my_day");
    const due_date = formData.get("due_date");
    const repeat = formData.get("repeat");
    const priority = formData.get("priority");
    const note = formData.get("note");

    const task = new Task({
        name: name || undefined,
        my_day: my_day || undefined,
        due_date: due_date || undefined,
        repeat: repeat || undefined,
        priority: priority || undefined,
        note: note || undefined,
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
