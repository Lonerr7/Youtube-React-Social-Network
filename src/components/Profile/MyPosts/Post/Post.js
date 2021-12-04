import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://png.pngtree.com/png-vector/20191116/ourmid/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg"
        alt=""
      />
      {props.message} <br />
      <span>likes: {props.likeCount}</span>
    </div>
  );
};

export default Post;
