import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Complaint from "./Pages/Compaint";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/compaint-types" element={<Complaint />} />
      </Routes>
    </Router>
  );
};

export default App;