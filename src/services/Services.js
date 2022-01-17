import swal from "sweetalert";
import { jpAxios } from "../jpAxios";

export const handelGet = async (resources) => {
  const res = await jpAxios.get(`/${resources}`);

  return res;
};

export const handelGetWithId = async (resources, Id) => {
  const res = await jpAxios.get(`/${resources}/${Id}`);

  return res;
};

export const handelAdd = async (resources, data) => {
  const res = await jpAxios.post(`/${resources}`, data);

  if (res) {
    console.log(res);
    swal(`${res.data.name} با موفقیت ایجاد شد `, {
      icon: "success",
    });
  }
};

export const handelEdit = async (resources, data, Id) => {
  const res = await jpAxios.put(`/${resources}/${Id}`, data);
  if (res) {
    console.log(res);
    swal(`${res.data.name} با موفقیت ویرایش شد `, {
      icon: "success",
    });
  }
};

export const handleDelete = async (resources, itemId) => {
  jpAxios.delete(`/${resources}/${itemId}`);
};
