import { useState } from "react";
import Tag from "../tag/Tag";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "To Do",
    tags: [],
  });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectedTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item != tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form className="task_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter task detail"
          name="task"
          value={taskData.task}
          onChange={handleTaskChange}
        />

        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="Dev"
              selectedTag={selectedTag}
              selected={checkTag("Dev")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleTaskChange}
            >
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
