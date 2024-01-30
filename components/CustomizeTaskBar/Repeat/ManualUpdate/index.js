import { updateTaskRepeat } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext, experimental_useOptimistic as useOptimistic, useState } from "react";

export default function ManualUpdate({ taskId, repeat }) {
    const { setRepeat } = useContext(TasksContext);
    const [input, setInput] = useOptimistic(repeat);
    const [everyX, setEveryX] = useState(1);

    function handleInputChange(e) {
        const value = e.target.value;

        if (value == "") setInput(0);
        else if (value.toString().length > 1 && value.toString()[0] == "0") setInput(value.substring(1));
        else if (value > -1) setInput(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (input > -1 && input != repeat && everyX > 0) {
            const final = input * everyX;

            setRepeat(taskId, final);
            updateTaskRepeat(taskId, final);
        }
    }

    return (
        <form className="p-1 flex flex-col gap-1 items-center" onSubmit={handleSubmit}>
            <div className="flex gap-3 items-center">
                <span>Every</span>
                <input
                    className="p-1 cursor-default hover:text-gray-500 font-bold outline-none"
                    type="number"
                    value={input}
                    placeholder="every x"
                    onChange={handleInputChange}
                />
                <select
                    className="font-bold bg-inherit outline-none hover:text-gray-500"
                    onChange={(e) => setEveryX(e.target.value)}
                >
                    <option value={1}>Days</option>
                    <option value={7}>Weeks</option>
                    <option value={30}>Months</option>
                    <option value={365}>Years</option>
                </select>
            </div>
            <button className="w-full font-bold hover:text-gray-500">Save</button>
        </form>
    );
}
