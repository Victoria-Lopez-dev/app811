import React from "react";
import { BrowserRouter as Router, 
    Routes, 
    Route 
} from "react-router-dom";
import Login from "../Componentes/Auth/Login";
import Calendar from "../Componentes/Calendario/Calendar";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <nav></nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}