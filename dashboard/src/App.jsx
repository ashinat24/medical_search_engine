import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Manage } from "./pages/Manage";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
