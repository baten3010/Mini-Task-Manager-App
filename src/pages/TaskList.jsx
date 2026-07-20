import { useEffect, useRef, useState } from 'react';
import TaskItem from '../components/TaskItem';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);
  const countRef = useRef(null);


  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5'
        );
        if (!res.ok) throw new Error('Failed to fetch tasks');
        const data = await res.json();

        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          completed: item.completed,
        }));

        setTasks(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  useEffect(() => {
    if (countRef.current) {
      const doneCount = tasks.filter((t) => t.completed).length;
      countRef.current.innerText = `${doneCount} / ${tasks.length} done`;
    }
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmed = newTitle.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTitle('');
    inputRef.current?.focus();
  };

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <form className="add-task-form" onSubmit={handleAddTask}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task…"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <span className="task-count" ref={countRef}>
        0 / 0 done
      </span>

      {loading && <p className="status-msg">Loading starter tasks…</p>}
      {error && <p className="status-msg error">Couldn't load tasks: {error}</p>}

      {!loading && !error && (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={handleToggle} />
          ))}
        </ul>
      )}
    </div>
  );
}
