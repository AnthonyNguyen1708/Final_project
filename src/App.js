import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "components/HeaderComponent";
import UserList from "features/User_Page/components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "features/Task_Page/TaskList";
import Login from "features/Login/Login";

function App() {
  return (
    <div>
      <Login />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
