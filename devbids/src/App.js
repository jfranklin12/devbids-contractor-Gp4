import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
import LoginSignup from "./pages/LoginSignup/LoginSignup";

function App() {
  return (
    <div>
      <div className="routes">
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
