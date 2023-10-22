import Task from "./Task";

export default function Tasks({ tasks, showList = false }) {
    return tasks.map((task) => <Task key={task.id} task={task} showList={showList} />);
}
