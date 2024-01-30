"use client";

import { updateTaskRepeat } from "@/actions/tasks";
import RepeatDisplay from "@/components/tasks/RepeatDisplay";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ManualUpdate from "./ManualUpdate";

export default function Repeat({ repeat, taskId }) {
    const { setRepeat } = useContext(TasksContext);
    const [expanded, setExpanded] = useState(false);

    function handleUpdate(value) {
        if (value > -1 && value != repeat) {
            setRepeat(taskId, value);
            updateTaskRepeat(taskId, value);
        }
    }

    return (
        <div className="flex flex-col">
            <button
                className="hover:text-gray-500 font-bold flex items-center justify-center"
                onClick={() => setExpanded(!expanded)}
            >
                <RepeatDisplay repeat={repeat} />
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <>
                    <button className="p-1 hover:text-gray-500" onClick={() => handleUpdate(0)}>
                        No Repeat
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={() => handleUpdate(1)}>
                        Daily
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={() => handleUpdate(7)}>
                        Weekly
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={() => handleUpdate(30)}>
                        Monthly
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={() => handleUpdate(365)}>
                        Yearly
                    </button>
                    <div className="border-t border-b">
                        <ManualUpdate repeat={repeat} taskId={taskId} />
                    </div>
                </>
            )}
        </div>
    );
}
