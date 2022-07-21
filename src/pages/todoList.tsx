import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>(["task 1", "task 2"]);
  const onSubmit = (e: any) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const onDelete = (index: number) => {
    setTaskList(taskList.filter((_, _index) => _index !== index));
  };
  return (
    <div>
      Todo list
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      {taskList.map((e, index) => (
        <div key={index}>
          <span>{e}</span>
          <button onClick={() => onDelete(index)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
