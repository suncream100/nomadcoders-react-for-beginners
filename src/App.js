import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />}/> {/* path경로를 /으로 작성 시 home으로 이동한다는 의미*/}
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </Router>;
}

export default App;