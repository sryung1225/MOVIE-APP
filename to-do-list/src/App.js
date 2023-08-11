import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const checkToDos = () => {
    console.log(toDos);
  };
  useEffect(checkToDos, [toDos]);
  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 작성하세요"
        />
        <button>할 일 추가</button>
      </form>
    </div>
  );
}

export default App;
