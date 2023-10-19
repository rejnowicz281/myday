import AddTask from "./AddTask";

export default function Tasks({ listId, tasks }) {
    return (
        <>
            <AddTask listId={listId} />
            <ul>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <div>Name: {task.name}</div>
                        <div>Created at: {task.createdAt.toString()}</div>
                        <div>Last updated: {task.updatedAt.toString()}</div>
                        <div>My day: {task.my_day.toString()}</div>
                        {task.due_date && <div>Due: {task.due_date}</div>}
                        {task.repeat && <div>Repeating: every {task.repeat} day(s)</div>}
                        {task.priority && <div>Priority: {task.priority}</div>}
                        {task.note && <div>Note: {task.note}</div>}
                        <hr />
                    </div>
                ))}
            </ul>
        </>
    );
}
