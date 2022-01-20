import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  handelAdd,
  handelEdit,
  handelGet,
  handelGetWithId,
} from "../services/Services";
import { reducer, init } from "../services/postReducer";
import style from "../style.module.css";

const AddPost2 = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [data, dispatch] = useReducer(reducer, init);

  const handlePost = (e) => {
    e.preventDefault();
    if (postId) {
      handelEdit("posts", data, postId);
    } else {
      handelAdd("posts", data);
    }
  };

  const setInputValues = (e, propName) => {
    dispatch({
      type: "setInputValue",
      propName: propName,
      propValue: e.target.value,
    });
  };

  useEffect(() => {
    handelGet("users")
      .then((res) => {
        dispatch({
          type: "changeUsers",
          users: res.data,
        });
      })
      .catch((err) => {});

    if (postId) {
      handelGetWithId("posts", postId).then((res) => {
        dispatch({
          type: "isUpdate",
          payLoad: res.data,
        });
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
              value={data.postData.userId}
              onChange={(e) => setInputValues(e, "userId")}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>
              {data.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">آی دی کاربر</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.userId}
              onChange={(e) => setInputValues(e, "userId")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">عنوان</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.title}
              onChange={(e) => setInputValues(e, "title")}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">متن اصلی</label>
            <textarea
              rows={5}
              type="text"
              className="form-control"
              value={data.postData.body}
              onChange={(e) => setInputValues(e, "body")}
            ></textarea>
          </div>
          <div className="col-12 text-start">
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => navigate(-1)}
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

export default AddPost2;
