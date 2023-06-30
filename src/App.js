import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Sigin from "./Components/Sigin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/register" element={<register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
