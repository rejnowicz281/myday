"use server";

import List from "@/models/list";
import Task from "@/models/task";
import { connectToDB } from "@/utils/database";
import formatValidationError from "@/utils/formatValidationError";
import getCurrentUser from "@/utils/getServerSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getLists() {
    await connectToDB();

    const user = await getCurrentUser();

    const lists = await List.find({ owner: user?.id }).sort({ createdAt: -1 });

    return lists;
}

export async function getMyDayList() {
    await connectToDB();

    const user = await getCurrentUser();

    const tasks = await Task.find({ my_day: true, owner: user?.id }).populate("list");

    const formattedTasks = tasks.map((task) => {
        const formattedTask = { ...task._doc };
        if (task.list) formattedTask.list = task.list._doc;
        return formattedTask;
    });

    return formattedTasks;
}

export async function getListlessTasks() {
    await connectToDB();

    const user = await getCurrentUser();

    const tasks = await Task.find({ list: undefined || null, owner: user?.id });

    return tasks;
}

export async function getList(id) {
    await connectToDB();

    const user = await getCurrentUser();

    const [list, tasks] = await Promise.all([
        List.findOne({ _id: id, owner: user?.id }),
        Task.find({ list: id }).select("-list"),
    ]);

    const data = { ...list._doc, tasks };

    return data;
}

export async function createList(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const name = formData.get("name");

    const list = new List({
        owner: user?.id,
        name: name || undefined,
    });

    try {
        await list.save();

        revalidatePath("/");

        const data = {
            action: "createList",
            success: true,
            list: JSON.stringify(list),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "createTimer",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function updateListName(new_name, id) {
    await connectToDB();

    const user = await getCurrentUser();

    try {
        const newList = await List.findOneAndUpdate(
            { _id: id, owner: user?.id },
            { name: new_name || undefined },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${id}`);

        const data = {
            action: "updateListName",
            success: true,
            list: JSON.stringify(newList),
        };
        console.log(data);
        return data;
    } catch (err) {
        const validationError = formatValidationError(err);
        const data = {
            action: "updateListName",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}

export async function deleteList(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = formData.get("list");

    await Promise.all([
        List.findOneAndDelete({ _id: list, owner: user?.id }),
        Task.deleteMany({ list, owner: user?.id }),
    ]);

    const data = {
        action: "deleteList",
        success: true,
        list,
    };
    console.log(data);
    redirect("/");
}
