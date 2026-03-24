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
            <button className="tag">Dev</button>
            <button className="tag">QA</button>
            <button className="tag">Product Owner</button>
          </div>

          <div>
            <select className="task_status">
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
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
