import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
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
          <div>
            <button>Setting</button>
            <button>Hello user</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
