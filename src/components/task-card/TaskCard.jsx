import "./TaskCard.css";

import { Trash2 } from "lucide-react";
import Tag from "../tag/Tag";

const TaskCard = ({ task, handleDeleteTask }) => {
  return (
    <article className="task_card">
      <p className="task_text">{task.task}</p>
      <div className="task_card_bottom">
        <div className="task_card_tags">
          {task.tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete">
          <Trash2
            className="trash_icon"
            onClick={() => handleDeleteTask(task.id)}
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
