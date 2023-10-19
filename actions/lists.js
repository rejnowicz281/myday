"use server";

import List from "@models/list";
import { connectToDB } from "@utils/database";
import formatValidationError from "@utils/formatValidationError";
import getCurrentUser from "@utils/getServerSession";
import { revalidatePath } from "next/cache";

export async function getLists() {
    await connectToDB();

    const user = await getCurrentUser();

    const lists = await List.find({ user: user?.id });

    return lists;
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
