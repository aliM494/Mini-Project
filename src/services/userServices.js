import swal from "sweetalert";
import { jpAxios } from "../jpAxios";

export const handlAddUser = async (data) => {
  const res = await jpAxios.post("/users", data);

  if (res) {
    console.log(res);
    swal(`${res.data.name} با موفقیت ایجاد شد `, {
      icon: "success",
    });
  }
};

export const handlEditUser = async (data, userId) => {
  const res = await jpAxios.put(`/users/${userId}`, data);
  if (res) {
    console.log(res);
    swal(`${res.data.name} با موفقیت ویرایش شد `, {
      icon: "success",
    });
  }
};

export const handelGetUser = async (userId) => {
  const res = await jpAxios.get(`/users/${userId}`);

  if (res) {
    let data = {
      name: res.data.name,
      username: res.data.username,
      email: res.data.email,
      address: {
        street: res.data.address.street,
        suite: res.data.address.suite,
        city: res.data.address.city,
        zipcode: res.data.address.zipcode,
      },
    };

    return data;
  }
};
