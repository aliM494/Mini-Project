import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jpAxios } from "../jpAxios";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    jpAxios.get(`/posts/${postId}`).then((res) => {
      setPost(res.data);
    });
  });

  return (
    <>
      <div className="row justify-content-center mt-5 ">
        <div class="card " style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPost;
