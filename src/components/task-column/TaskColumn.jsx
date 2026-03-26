import TaskCard from "../task-card/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, Icon, color, tasks, status }) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <Icon size={20} strokeWidth={2.8} color={color} />
        <h2>{title}</h2>
      </div>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
