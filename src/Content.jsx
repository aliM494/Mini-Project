import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import AddPost from "./posts/AddPost";
import Posts from "./posts/Posts";
import ShowPost from "./posts/ShowPost";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import AddUser from "./users/AddUser";
import Users from "./users/Users";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>

      <Routes>
        <Route path="/user" element={<Users />} />
        <Route path="/user/add" element={<AddUser />}>
          <Route path=":userId" />
        </Route>

        <Route path="/post" element={<Posts />} />
        <Route path="/posts/show" element={<ShowPost />}>
          <Route path=":postId" />
        </Route>
        <Route path="/posts/add" element={<AddPost />}>
          <Route path=":postId" />
        </Route>

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Content;
