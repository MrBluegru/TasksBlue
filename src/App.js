import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import TaskList from "./components/container/task_list";
import LoginFormik from "./components/pure/forms/loginFormik";
import Error from "./pages/error/Error";
import DashBoard from "./pages/dashboard/DashBoard";
import RegisterFormik from "./components/pure/forms/registerFormik";
import "./App.css";

function App() {
  let loggedIn = true;

  return (
    <Routes>
      <Route path="/login" element={<LoginFormik />} />
      <Route path="/register" element={<RegisterFormik />} />
      <Route path="/dashBoard" element={<DashBoard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
