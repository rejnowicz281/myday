"use client";

import { CustomizeProvider } from "@providers/CustomizeContext";
import { createContext, experimental_useOptimistic as useOptimistic } from "react";

const TasksContext = createContext();

export function TasksProvider({ children, tasks, showList = false }) {
    const [optimisticTasks, setOptimisticTasks] = useOptimistic(tasks);

    function removeTask(id) {
        setOptimisticTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task._id !== id);

            return updatedTasks;
        });
    }

    function setCompleted(id, completed) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.completed = completed;

            return [...optimisticTasks];
        });
    }

    function setDueDate(id, due_date) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.due_date = due_date;

            return [...optimisticTasks];
        });
    }

    function setName(id, name) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.name = name;

            return [...optimisticTasks];
        });
    }

    function setMyDay(id, my_day) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.my_day = my_day;

            return [...optimisticTasks];
        });
    }

    function setNote(id, note) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.note = note;

            return [...optimisticTasks];
        });
    }

    function setPriority(id, priority) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.priority = priority;

            return [...optimisticTasks];
        });
    }

    function setRepeat(id, repeat) {
        setOptimisticTasks((prevTasks) => {
            const updateTask = prevTasks.find((task) => task._id == id);

            if (updateTask) updateTask.repeat = repeat;

            return [...optimisticTasks];
        });
    }

    return (
        <TasksContext.Provider
            value={{
                tasks: optimisticTasks,
                removeTask,
                setCompleted,
                setDueDate,
                setName,
                setMyDay,
                setNote,
                setPriority,
                setRepeat,
                showList,
            }}
        >
            <CustomizeProvider>{children}</CustomizeProvider>
        </TasksContext.Provider>
    );
}

export default TasksContext;
