// import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className="posts">
        <Post message="Hi, how are u?" likeCount='20' />
        <Post message="It's my first post" likeCount='15' />
      </div>
    </div>
  );
};

export default MyPosts;
