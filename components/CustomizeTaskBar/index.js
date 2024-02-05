import MyDay from "@/components/CustomizeTaskBar/MyDay";
import CompleteButton from "@/components/tasks/CompleteButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatDateWithTime } from "@/utils/general/date";
import DueDateDisplay from "../tasks/DueDateDisplay";
import RepeatDisplay from "../tasks/RepeatDisplay";
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
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="hover:no-underline hover:text-gray-500 justify-center gap-2 font-bold">
                                <RepeatDisplay repeat={task.repeat} />
                            </AccordionTrigger>
                            <AccordionContent>
                                <Repeat taskId={task._id} repeat={task.repeat} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="hover:no-underline hover:text-gray-500 justify-center gap-2 font-bold">
                                {task.priority <= 0 ? "No" : task.priority} Priority
                            </AccordionTrigger>
                            <AccordionContent>
                                <Priority taskId={task._id} priority={task.priority} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="hover:no-underline hover:text-gray-500 justify-center gap-2 font-bold">
                                <DueDateDisplay dueDate={task.due_date} />
                            </AccordionTrigger>
                            <AccordionContent>
                                <DueDate taskId={task._id} dueDate={task.due_date} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Note taskId={task._id} note={task.note} />
                </div>
            </div>
        </div>
    );
}
