import Tag from "../tag/Tag";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form className="task_form">
        <input
          type="text"
          className="task_input"
          placeholder="Enter task detail"
        />

        <div className="task_form_bottom">
          <div>
            <Tag tagName="Dev" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>

          <div>
            <select className="task_status">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
