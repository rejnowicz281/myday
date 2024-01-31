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

    function handleUpdate(formData) {
        const repeatInput = formData.get("repeat");
        const taskId = formData.get("taskId");

        if (repeatInput > -1 && repeatInput != repeat) {
            setRepeat(taskId, repeatInput);
            updateTaskRepeat(formData);
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
                <div className="flex flex-col items-center justify-center">
                    <form action={handleUpdate}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="repeat" value={0} />
                        <button className="p-1 hover:text-gray-500">No Repeat</button>
                    </form>

                    <form action={handleUpdate}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="repeat" value={1} />
                        <button className="p-1 hover:text-gray-500">Daily</button>
                    </form>

                    <form action={handleUpdate}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="repeat" value={7} />
                        <button className="p-1 hover:text-gray-500">Weekly</button>
                    </form>

                    <form action={handleUpdate}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="repeat" value={30} />
                        <button className="p-1 hover:text-gray-500">Monthly</button>
                    </form>

                    <form action={handleUpdate}>
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="repeat" value={365} />
                        <button className="p-1 hover:text-gray-500">Yearly</button>
                    </form>

                    <div className="border-t border-b">
                        <ManualUpdate repeat={repeat} taskId={taskId} />
                    </div>
                </div>
            )}
        </div>
    );
}
