import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/user">کاربران</Link>
        </li>
        <li>
          <Link to="/post">پست ها</Link>
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
        </li>
        <li>
          <Link to="/todos">کارها</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
