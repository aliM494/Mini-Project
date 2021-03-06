import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import withAlert from "../HOC/withAlert";
import { handelGet } from "../services/Services";
import style from "../style.module.css";
import { userInit, userReducer } from "../services/postReducer";

const Posts = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);
  const [uId, setUid] = useState("");

  useEffect(() => {
    handelGet("posts").then((res) => {
      setPosts(res.data);
      setMainPosts(res.data);
    });
    handelGet("users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handelSearchPosts = (id) => {
    if (id > 0) setPosts(mainPosts.filter((p) => p.userId == id));
    else setPosts(mainPosts);
  };

  useEffect(() => {
    handelSearchPosts(uId);
  }, [uId]);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست ها</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <select
            className="form-control"
            onChange={(e) => handelSearchPosts(e.target.value)}
          >
            <option value="">کاربر مورد نظر را انتخاب کنید</option>

            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/posts/add" className="fas fa-plus text-light">
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>

      {posts.length ? (
        <table className="table bg-light shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>کد کاربر</th>
              <th>تیتر</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setUid(post.userId)}
                >
                  {post.userId}
                </td>
                <td>{post.title}</td>
                <td>
                  <i
                    className="fas fa-eye text-primary mx-2 pointer"
                    onClick={() => navigate(`/posts/show/${post.id}`)}
                  ></i>

                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => navigate(`/posts/add/${post.id}`)}
                  ></i>

                  <i className="fas fa-trash text-danger mx-2 pointer"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center text-info">لطفا صبر کنید ......</h4>
      )}
    </div>
  );
};

export default withAlert(Posts);
