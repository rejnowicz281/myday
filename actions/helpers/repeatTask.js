import Task from "@/models/task";
import { DateTime } from "luxon";
import isDateToday from "./isDateToday";

export default async function repeatTask(task) {
    if (task.completed && task.repeat > 0) {
        // if task has due_date, add +(task.repeat) to due_date, else add +(task.repeat) to current date
        const new_date = (task.due_date ? DateTime.fromJSDate(task.due_date) : DateTime.now()).plus({
            days: task.repeat,
        });

        // if task has due_date check if it is today, else no need to check since we are adding task.repeat to current date anyway
        const my_day = task.due_date ? isDateToday(new_date) : false;

        Task.create({
            owner: task.owner,
            list: task.list,
            name: task.name,
            my_day,
            due_date: new_date,
            priority: task.priority,
            repeat: task.repeat,
            note: task.note,
            completed: false,
        });
    }
}
