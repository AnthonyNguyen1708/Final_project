import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "components/HeaderComponent";
import UserList from "features/User_Page/components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "features/Task_Page/TaskList";

import AppRouter from "app/AppRouter";
import Login from "features/Login/Login";
import Signup from "features/Login/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<AppRouter component={Login} isAuth />}
          />
          <Route
            path="/user"
            element={<AppRouter component={UserList} isPrivate />}
          />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
