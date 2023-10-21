import { DateTime } from "luxon";

export default function isDateToday(date) {
    const new_date = date.toFormat("yyyy-MM-dd");
    const today = DateTime.now().toFormat("yyyy-MM-dd");

    return new_date == today;
}
