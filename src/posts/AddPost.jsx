import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  handelAdd,
  handelEdit,
  handelGet,
  handelGetWithId,
} from "../services/Services";
import style from "../style.module.css";

const AddPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const handlePost = (e) => {
    e.preventDefault();
    if (postId) {
      handelEdit("posts", data, postId);
    } else {
      handelAdd("posts", data);
    }
  };

  useEffect(() => {
    handelGet("users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (postId) {
      handelGetWithId("posts", postId).then((res) => {
        setData(res.data);
      });
    }
  }, []);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {postId ? "ویرایش پست" : "افزودن پست"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form
          onSubmit={handlePost}
          className="col-12 col-md-6 bg-light rounded shadow-lg p-3"
        >
          <div className="mb-3">
            <label className="form-label">کاربر</label>
            <select
              className="form-control"
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>

              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">کد کاربری</label>
            <input
              type="text"
              className="form-control"
              value={data.userId}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">عنوان</label>
            <input
              type="email"
              className="form-control"
              value={data.email}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="mb-3 row">
            <label className="form-label">متن</label>
            <div className="col-6 my-1">
              <textarea
                rows="5"
                type="email"
                className="form-control"
                value={data.body}
                onChange={(e) =>
                  setData({
                    ...data,
                    body: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>

          <div className="col-12 text-start">
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => navigate("/")}
            >
              بازگشت
            </button>
            <button type="submit" className="btn btn-primary">
              {postId ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
