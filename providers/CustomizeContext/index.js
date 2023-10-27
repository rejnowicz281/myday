"use client";

import CustomizeTaskBar from "@/app/lists/components/CustomizeTaskBar";
import TasksContext from "@/providers/TasksContext";
import { createContext, useContext, useState } from "react";

const CustomizeContext = createContext();

export function CustomizeProvider({ children }) {
    const { tasks } = useContext(TasksContext);
    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <CustomizeContext.Provider
            value={{
                editingTaskId,
                setEditingTaskId,
            }}
        >
            {editingTaskId && <CustomizeTaskBar task={tasks.find((task) => task._id == editingTaskId)} />}
            {children}
        </CustomizeContext.Provider>
    );
}

export default CustomizeContext;
