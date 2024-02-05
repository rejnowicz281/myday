"use client";

import { updateTaskRepeat } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import ManualUpdate from "./ManualUpdate";

export default function Repeat({ repeat, taskId }) {
    const { setRepeat } = useContext(TasksContext);

    function handleUpdate(formData) {
        const repeatInput = formData.get("repeat");
        const taskId = formData.get("taskId");

        if (repeatInput > -1 && repeatInput != repeat) {
            setRepeat(taskId, repeatInput);
            updateTaskRepeat(formData);
        }
    }

    return (
        <>
            <form action={handleUpdate}>
                <input type="hidden" name="taskId" value={taskId} />
                <input type="hidden" name="repeat" value={0} />
                <Button className="w-full" variant="ghost">
                    Never
                </Button>
            </form>
            <form action={handleUpdate}>
                <input type="hidden" name="taskId" value={taskId} />
                <input type="hidden" name="repeat" value={1} />
                <Button className="w-full" variant="ghost">
                    Daily
                </Button>
            </form>
            <form action={handleUpdate}>
                <input type="hidden" name="taskId" value={taskId} />
                <input type="hidden" name="repeat" value={7} />
                <Button className="w-full" variant="ghost">
                    Weekly
                </Button>
            </form>
            <form action={handleUpdate}>
                <input type="hidden" name="taskId" value={taskId} />
                <input type="hidden" name="repeat" value={30} />
                <Button className="w-full" variant="ghost">
                    Monthly
                </Button>
            </form>
            <form action={handleUpdate}>
                <input type="hidden" name="taskId" value={taskId} />
                <input type="hidden" name="repeat" value={365} />
                <Button className="w-full" variant="ghost">
                    Yearly
                </Button>
            </form>

            <ManualUpdate repeat={repeat} taskId={taskId} />
        </>
    );
}
