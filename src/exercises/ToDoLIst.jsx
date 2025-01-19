import React,{useState} from "react";
function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    const handleAddTask =() => {
        if(newTask.trim() !== "") {
            const updatedTask = [...tasks,newTask];
        setTasks(updatedTask);
        setNewTask("");
        }
    }
    const handleDelete = (index) =>{
        setTasks(tasks.filter((_,i) => i !== index));
    }
    const handleNewTask = (e) => setNewTask(e.target.value)
    return (
        <div>
            <h1>To-Do List</h1>
            <input
             type="text"
             value={newTask}
             onChange={handleNewTask} 
             placeholder="Enter a Task..."
             />
            <button
             onClick={handleAddTask}>Add Task
            </button>
            <ul>
            {tasks.map((task,index) => <li 
                key={index}>
                {task}
                <button onClick={() =>handleDelete(index)}>Delete</button>
                </li> )}

            </ul>
        </div>
    )
}
export default ToDoList;