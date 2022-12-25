import { Button } from "antd/es/radio";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.profile);

  const handleLogOut = () => { 
    
   }

  return (
    <div>
      <header className="bg-slate-900 h-20">
        <div className=" px-4 h-full mx-auto flex justify-between items-center">
          <nav className="left  d-flex items-center">
            <a className="text-4xl no-underline px-2 text-white">JIRA</a>
            <a className="text-2xl no-underline px-2 text-white">Projects</a>
            <a className="text-2xl no-underline px-2 text-white">User</a>
            <a className="text-2xl no-underline px-2 text-white">Create Task</a>
          </nav>
          <div className="d-flex text-white">
            <p className="text-xl m-0 px-4">Hello {user.name}</p>
            <Button>Log Out</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
