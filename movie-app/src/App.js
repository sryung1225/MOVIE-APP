import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
