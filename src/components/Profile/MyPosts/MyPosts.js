import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={s.posts__Btn}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are u?" likeCount="20" />
        <Post message="It's my first post" likeCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
