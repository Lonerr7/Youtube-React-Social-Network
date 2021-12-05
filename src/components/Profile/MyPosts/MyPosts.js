import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: 1, post: "Hi, how are u?", likesCount: 20 },
    { id: 2, post: "It's my first post", likesCount: 15 },
  ];

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
        <Post message={postsData[0].post} likeCount={postsData[0].likesCount} />
        <Post message={postsData[1].post} likeCount={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
