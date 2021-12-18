import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likesCount} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost} className={s.posts__Btn}>
            Add Post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
