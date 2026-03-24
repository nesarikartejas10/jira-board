import "./TaskColumn.css";

const TaskColumn = ({ title, Icon, color }) => {
  return (
    <section className="task_column">
      <div className="task_column_heading">
        <Icon size={20} strokeWidth={2.8} color={color} />
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default TaskColumn;
