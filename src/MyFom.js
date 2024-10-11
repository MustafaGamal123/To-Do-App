import { useState } from "react";

export default function MyForm() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [nextId, setNextId] = useState(0); 
    

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask(); 
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() === "") return; 
        setTasks([...tasks, { id: nextId, task: inputValue }]);
        setNextId(nextId + 1);
        setInputValue(""); 
    };

    const handleTaskSelect = (event, selectedTask) => {
        if (selectedTasks.some(t => t.id === selectedTask.id)) {
            setSelectedTasks(selectedTasks.filter(t => t.id !== selectedTask.id));
        } else {
            setSelectedTasks([...selectedTasks, selectedTask]);
        }
    };

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id); 
        setTasks(newTasks);
    };

    return (
        <div className="ui">
            <h1 className="head">To Do List</h1>
            <div className="input-container">
                <input
                    className="in"
                    type="text"
                    placeholder="Enter The Task Here"
                    required
                    value={inputValue}
                    onKeyDown={handleKeyPress}
                    onChange={handleInputChange}
                />
                <button className="add" onClick={handleAddTask}>Add</button>
            </div>
            <div>
                <h2 className="so">Tasks:</h2>
                {tasks.map((taskObj) => (
                    <label key={taskObj.id} className="ka">
                        <input
                            type="checkbox"
                            name="tasks"
                            className="la"
                            value={taskObj.task}
                            checked={selectedTasks.some(t => t.id === taskObj.id)}
                            onChange={(e) => handleTaskSelect(e, taskObj)}
                        />
                        {taskObj.task}
                        <button className="ha"
                            onClick={() => handleDelete(taskObj.id)} 
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Delete
                        </button>
                    </label>
                ))}
            </div>
            <br />
            <h2 className = "op">Selected Tasks:</h2>
            <div className="uu">
                {selectedTasks.map((taskObj) => (
                    <div key={taskObj.id}>{taskObj.task}</div>
                ))}
            </div>
        </div>
    );
}
