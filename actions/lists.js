"use server";

import List from "@models/list";
import { connectToDB } from "@utils/database";
import formatValidationError from "@utils/formatValidationError";
import getCurrentUser from "@utils/getServerSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getLists() {
    await connectToDB();

    const user = await getCurrentUser();

    const lists = await List.find({ user: user?.id });

    return lists;
}

export async function getList(id) {
    await connectToDB();

    const user = await getCurrentUser();

    const list = await List.findOne({ _id: id, user: user?.id });

    return list;
}

export async function createList(formData) {
    await connectToDB();

    const user = await getCurrentUser();

    const name = formData.get("name");

    const list = new List({
        user: user?.id,
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
            { _id: id, user: user?.id },
            { name: new_name || undefined },
            { new: true, runValidators: true }
        );

        revalidatePath(`/lists/${id}`);

        const data = {
            action: "updateListName",
            success: true,
            newList: JSON.stringify(newList),
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

    await List.findOneAndDelete({ _id: list, user: user?.id });

    const data = {
        action: "deleteList",
        success: true,
    };
    console.log(data);
    redirect("/");
}
