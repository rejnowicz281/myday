"use server";

import List from "@/models/list";
import Task from "@/models/task";
import actionError from "@/utils/actions/actionError";
import actionSuccess from "@/utils/actions/actionSuccess";
import formatValidationError from "@/utils/actions/formatValidationError";
import { connectToDB } from "@/utils/general/database";
import getCurrentUser from "@/utils/general/getServerSession";

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

    const actionName = "createList";

    const user = await getCurrentUser();

    const name = formData.get("name");

    const list = new List({
        owner: user?.id,
        name: name || undefined,
    });

    try {
        await list.save();

        return actionSuccess(actionName, { list: JSON.stringify(list) }, "/");
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function updateListName(new_name, id) {
    await connectToDB();

    const actionName = "updateListName";

    const user = await getCurrentUser();

    try {
        const newList = await List.findOneAndUpdate(
            { _id: id, owner: user?.id },
            { name: new_name || undefined },
            { new: true, runValidators: true }
        );

        return actionSuccess(actionName, { list: JSON.stringify(newList) }, `/lists/${id}`);
    } catch (err) {
        return actionError(actionName, { errors: formatValidationError(err) });
    }
}

export async function deleteList(formData) {
    await connectToDB();

    const actionName = "deleteList";

    const user = await getCurrentUser();

    const list = formData.get("list");

    await Promise.all([
        List.findOneAndDelete({ _id: list, owner: user?.id }),
        Task.deleteMany({ list, owner: user?.id }),
    ]);

    return actionSuccess(actionName, { list }, null, "/");
}
