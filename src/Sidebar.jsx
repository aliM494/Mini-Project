import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import style from "./style.module.css";

const Sidebar = () => {
  const { showMenu } = useContext(MainContext);

  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="/assets/images/user2.jpg" alt="" />
        </li>

        <NavLink
          className={({ isActive }) => (isActive ? "active_nav" : "")}
          to="/user"
        >
          <li>کاربران</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active_nav" : "")}
          to="/post"
        >
          <li>پست ها</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active_nav" : "")}
          to="/gallery"
        >
          <li>گالری</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active_nav" : "")}
          to="/todos"
        >
          <li>کارها</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
