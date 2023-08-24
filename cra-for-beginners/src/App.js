import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" || counter !== 0) {
      console.log(
        "키워드가 ",
        keyword,
        "로 새롭게 바뀌었거나 counter가 바뀌었슈"
      );
    }
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
