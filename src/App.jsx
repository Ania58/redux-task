import { useSelector,useDispatch } from 'react-redux';
import { addTask, updateInput, deleteTask } from './redux/todoSlice';
import './App.css';


const App = () => {
  const tasks = useSelector((state => state.tasks.tasks));
  const input = useSelector((state) => state.tasks.input);
  const dispatch = useDispatch()
  
  const handleAddTask = () => {
    dispatch(addTask()); 
  };

  const handleInputChange = (e) => {
    dispatch(updateInput(e.target.value)); 
  };

  return (
    <>
    <h1>Task List</h1>
      <input
        type="text"
        value={input} 
        onChange={handleInputChange} 
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
