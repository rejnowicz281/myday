import { DateTime } from "luxon";

export function isDateToday(date) {
    const new_date = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
    const today = DateTime.now().toFormat("yyyy-MM-dd");

    return new_date == today;
}

export function isOverdue(date) {
    const new_date = DateTime.fromJSDate(date).startOf("day");
    const yesterday = DateTime.now().startOf("day");

    return new_date < yesterday;
}

export function formatDate(date) {
    const new_date = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
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
    const temp = DateTime.fromJSDate(date);
    const time = `${temp.hour < 10 ? "0" : ""}${temp.hour}:${temp.minute < 10 ? "0" : ""}${temp.minute}`;

    const new_date = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd");
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
