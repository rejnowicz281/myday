import { DateTime } from "luxon";

export function isDateToday(date) {
    if (typeof date != "string") date = date.toISOString();

    const new_date = DateTime.fromISO(date).toFormat("yyyy-MM-dd");
    const today = DateTime.now().toFormat("yyyy-MM-dd");

    return new_date == today;
}

export function isOverdue(date) {
    if (typeof date != "string") date = date.toISOString();

    const new_date = DateTime.fromISO(date).startOf("day");
    const yesterday = DateTime.now().startOf("day");

    return new_date < yesterday;
}

export function formatDate(date) {
    if (typeof date != "string") date = date.toISOString();

    const new_date = DateTime.fromISO(date).toFormat("yyyy-MM-dd");
    const today = DateTime.now().toFormat("yyyy-MM-dd");
    const tomorrow = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");
    const yesterday = DateTime.now().plus({ days: -1 }).toFormat("yyyy-MM-dd");

    return new_date == today
        ? "Today"
        : new_date == yesterday
        ? "Yesterday"
        : new_date == tomorrow
        ? "Tomorrow"
        : new_date;
}

export function formatDateWithTime(date) {
    if (typeof date != "string") date = date.toISOString();

    const temp = DateTime.fromISO(date);
    const time = `${temp.hour < 10 ? "0" : ""}${temp.hour}:${temp.minute < 10 ? "0" : ""}${temp.minute}`;

    const new_date = DateTime.fromISO(date).toFormat("yyyy-MM-dd");
    const today = DateTime.now().toFormat("yyyy-MM-dd");
    const tomorrow = DateTime.now().plus({ days: 1 }).toFormat("yyyy-MM-dd");
    const yesterday = DateTime.now().plus({ days: -1 }).toFormat("yyyy-MM-dd");

    return new_date == today
        ? `Today | ${time}`
        : new_date == yesterday
        ? `Yesterday | ${time}`
        : new_date == tomorrow
        ? `Tomorrow | ${time}`
        : `${new_date} | ${time}`;
}
