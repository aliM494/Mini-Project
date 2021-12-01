import React from "react";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";

const Content = () => {
  return (
    <div className={style.content_section}>
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
      ></i>
      <Users />
      <Posts />
      <Gallery />
      <Todos />
    </div>
  );
};

export default Content;
