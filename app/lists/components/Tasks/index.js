"use client";

import { useContext } from "react";
import TasksContext from "../../providers/TasksContext";
import Task from "./Task";

export default function Tasks({ showList = false }) {
    const { tasks } = useContext(TasksContext);

    return tasks.map((task) => <Task key={task._id} task={task} showList={showList} />);
}
