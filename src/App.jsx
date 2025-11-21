import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import { useEffect, useState } from "react";

//로컬스토리지에 저장된 할일 불러오기 없으면 빈배열
const saveTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function App() {
  const [tasks, setTasks] = useState(saveTasks); //저장된 할일이 있으면 불러오고 없으면 빈배열
  //할일 삭제 함수(인덱스번호 입력)
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  //할일이 변경될때마다 실행
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //문자열로 변환해서 저장
  }, [tasks]);
  return (
    <>
      <div className="app">
        <TaskForm setTasks={setTasks} />
        <main className="app_main">
          <TaskColumn
            handleDelete={handleDelete}
            tasks={tasks}
            status="todo"
            title="할 일"
            icon={todoIcon}
          />
          <TaskColumn
            handleDelete={handleDelete}
            tasks={tasks}
            status="doing"
            title="진행중"
            icon={doingIcon}
          />
          <TaskColumn
            handleDelete={handleDelete}
            tasks={tasks}
            status="done"
            title="완 료"
            icon={doneIcon}
          />
        </main>
      </div>
    </>
  );
}

export default App;
