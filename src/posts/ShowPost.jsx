import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handelGetWithId } from "../services/Services";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({ userName: "", userId: 0 });

  useEffect(() => {
    handelGetWithId("posts", postId).then((res) => {
      setPost(res.data);
    });
  }, []);

  useEffect(() => {
    handelGetWithId("users", post.userId).then((res) => {
      setUser({ userName: res.data.username, userId: res.data.id });
    });
  }, [post]);

  return (
    <>
      <div className="row justify-content-center mt-5 ">
        <div class="card" style={{ width: "40rem" }}>
          <div class="card-body">
            <h3 class="card-title">{post.title}</h3>
            <p class="card-text">{post.body}</p>

            <div className="col-12 text-start">
              <p className="ms-2">UserName: {user.userName} </p>
              <p> {user.userId} :UserID </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPost;
