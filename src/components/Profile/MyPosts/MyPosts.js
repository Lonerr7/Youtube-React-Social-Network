import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const posts = [
    { id: 1, post: "Hi, how are u?", likesCount: 20 },
    { id: 2, post: "It's my first post", likesCount: 15 },
  ];

  const postsElements = posts.map(post => <Post message={post.post} likeCount={post.likesCount} />)

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
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
