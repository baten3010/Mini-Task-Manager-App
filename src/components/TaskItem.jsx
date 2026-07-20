export default function TaskItem({ task, onToggle }) {
  return (
    <li className="task-item">
      <button
        className={`checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark task as not done' : 'Mark task as done'}
      >
        <svg viewBox="0 0 24 24">
          <polyline points="4 12 9 18 20 6" />
        </svg>
      </button>
      <span className={`task-title ${task.completed ? 'done' : ''}`}>
        {task.title}
      </span>
    </li>
  );
}
