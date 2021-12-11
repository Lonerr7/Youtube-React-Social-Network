import React from 'react';

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => (
    <Post message={post.message} likeCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost} className={s.posts__Btn}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
