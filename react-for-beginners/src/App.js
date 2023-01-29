import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />}/>
      <Route path="/" element={<Home />}/> {/* path경로를 /으로 작성 시 home으로 이동한다는 의미*/}
    </Routes>
  </Router>;
}

export default App;