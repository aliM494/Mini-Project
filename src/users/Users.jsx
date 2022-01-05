import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import axios from "axios";
import withAlert from "../HOC/withAlert";

const Users = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [mainUsers, setMainUsers] = useState([]);

  const { Alert } = props;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setMainUsers(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleDelete = async (itemId, username) => {
    if (
      await Alert(
        "شما اطمینان دارید ؟",
        "warning",
        `آیا از حذف ${username} اطمینان دارید ؟`,
        ["خیر", "بله"],
        true
      )
    ) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${itemId}`)
        .then((res) => {
          if (res.status === 200) {
            const newusers = users.filter((u) => u.id !== itemId);
            setUsers(newusers);

            Alert("عملیات با موفقیت انجام شد", "success", "");
          } else {
            Alert("عملیات با خطا مواجه شد", "error");
          }
        });
    } else {
      Alert("عملیات لغو شد");
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setUsers(
      mainUsers.filter(
        (u) => u.name.includes(e.target.value) || u.id === e.target.value
      )
    );
  };

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
            onChange={handleSearch}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/user/add" className="fas fa-plus text-light">
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>

      {users.length ? (
        <table className="table bg-light shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>نام کاربری</th>
              <th>ایمیل</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => navigate(`/user/add/${user.id}`)}
                  ></i>

                  <i
                    className="fas fa-trash text-danger mx-2 pointer"
                    onClick={() => handleDelete(user.id, user.username)}
                  ></i>
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

export default withAlert(Users);
