import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../style.module.css";

const AddUser = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.state}`)
      .then((res) => {
        setUser(res.data);
        console.log(user);
      });
  }, []);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
      <h4 className="text-center text-primary">
        {params.state ? "ویرایش کاربر" : "افزودن کاربر"}
      </h4>
      <div className="row justify-content-center mt-5 ">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label className="form-label">نام و نام خانوادگی</label>
            <input type="text" className="form-control" value={user.name} />
          </div>
          <div className="mb-3">
            <label className="form-label">نام کاربری</label>
            <input type="text" className="form-control" value={user.username} />
          </div>
          <div className="mb-3">
            <label className="form-label">ایمیل</label>
            <input type="email" className="form-control" value={user.email} />
          </div>
          <div className="mb-3 row">
            <label className="form-label">آدرس</label>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="شهر"
                value=""
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="خیابان"
                value=""
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="ادامه آدرس"
                value=""
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="کد پستی"
                value=""
              />
            </div>
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
              {params.state ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default AddUser;
