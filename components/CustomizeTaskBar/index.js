import MyDay from "@/components/CustomizeTaskBar/MyDay";
import CompleteButton from "@/components/tasks/CompleteButton";
import { formatDateWithTime } from "@/utils/general/date";
import CloseButton from "./CloseButton";
import DeleteButton from "./DeleteButton";
import DueDate from "./DueDate";
import EditableName from "./EditableName";
import Note from "./Note";
import Priority from "./Priority";
import Repeat from "./Repeat";

export default function CustomizeTaskBar({ task }) {
    return (
        <div className="basis-[400px] flex-grow-0 flex-shrink-0 relative">
            <div className="absolute inset-0 flex flex-col break-words py-6 px-4 overflow-y-auto">
                <div className="flex justify-between items-center pb-5">
                    <CloseButton />
                    <DeleteButton taskId={task._id} />
                </div>
                <div>Created: {formatDateWithTime(task.createdAt)}</div>
                <div>Last updated: {formatDateWithTime(task.updatedAt)}</div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 pt-3">
                        <CompleteButton
                            className="cursor-pointer appearance-none m-0 p-4 border border-green-300 transition-all duration-100  checked:bg-green-500 checked:shadow-[inset_0_0_0_4px_White] hover:bg-green-400 hover:shadow-[inset_0_0_0_4px_White]"
                            taskId={task._id}
                            completed={task.completed}
                        />
                        <EditableName name={task.name} taskId={task._id} />
                    </div>
                    <MyDay taskId={task._id} my_day={task.my_day} />
                    <Repeat taskId={task._id} repeat={task.repeat} />
                    <Priority priority={task.priority} taskId={task._id} />
                    <DueDate dueDate={task.due_date} taskId={task._id} />
                    <Note taskId={task._id} note={task.note} />
                </div>
            </div>
        </div>
    );
}
