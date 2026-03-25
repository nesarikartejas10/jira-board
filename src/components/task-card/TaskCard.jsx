import "./TaskCard.css";

import { Trash2 } from "lucide-react";
import Tag from "../tag/Tag";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">Sample text</p>
      <div className="task_card_bottom">
        <div className="task_card_tags">
          <Tag tagName="Dev" />
          <Tag tagName="QA" />
        </div>
        <div className="task_delete">
          <Trash2 className="trash_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
