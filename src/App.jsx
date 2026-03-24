import "./App.css";
import TaskColumn from "./components/task-column/TaskColumn";
import TaskForm from "./components/task-form/TaskForm";
import { Bug } from "lucide-react";
import { Loader } from "lucide-react";
import { CheckLine } from "lucide-react";
import { Code } from "lucide-react";

const App = () => {
  return (
    <div className="app">
      <h1 className="app_title">Sprint Desk</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To Do" Icon={Code} color="#0052CC" />
        <TaskColumn title="In Progress" Icon={Loader} color="#FF8B00" />
        <TaskColumn title="In Review" Icon={Bug} color="#8B5CF6" />
        <TaskColumn title="Done" Icon={CheckLine} color="#00875A" />
      </main>
    </div>
  );
};

export default App;
