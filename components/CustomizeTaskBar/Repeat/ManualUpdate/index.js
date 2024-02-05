import { updateTaskRepeat } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TasksContext from "@/providers/TasksContext";
import { useContext, useEffect, useRef } from "react";

export default function ManualUpdate({ taskId, repeat }) {
    const { setRepeat } = useContext(TasksContext);
    const inputRef = useRef(null);
    const everyXRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = repeat;
    }, [repeat]);

    function handleInputChange(e) {
        const value = e.target.value;

        if (value == "") e.target.value = 0;
        else if (value.toString().length > 1 && value.toString()[0] == "0") e.target.value = value.substring(1);
        else if (value > -1) e.target.value = value;
    }

    function handleAction(formData) {
        const taskId = formData.get("taskId");
        const everyX = formData.get("everyX");
        formData.set("repeat", formData.get("repeat") * everyX);
        const repeatInput = formData.get("repeat");

        if (repeatInput > -1 && repeatInput != repeat && everyX > 0) {
            setRepeat(taskId, repeatInput);
            updateTaskRepeat(formData);
            everyXRef.current.value = 1;
        }
    }

    return (
        <form className="p-1 flex flex-col gap-1 items-center" action={handleAction}>
            <input type="hidden" name="taskId" value={taskId} />
            <div className="flex gap-3 items-center">
                <span>Every</span>
                <Input
                    min="0"
                    className="border-none hover:text-gray-500 font-bold"
                    type="number"
                    name="repeat"
                    placeholder="every x"
                    defaultValue={repeat}
                    onChange={handleInputChange}
                    ref={inputRef}
                />
                <select
                    ref={everyXRef}
                    className="font-bold cursor-pointer bg-inherit outline-none hover:text-gray-500"
                    name="everyX"
                >
                    <option value={1}>Days</option>
                    <option value={7}>Weeks</option>
                    <option value={30}>Months</option>
                    <option value={365}>Years</option>
                </select>
            </div>
            <Button className="w-full font-bold" variant="ghost">
                Save
            </Button>
        </form>
    );
}
