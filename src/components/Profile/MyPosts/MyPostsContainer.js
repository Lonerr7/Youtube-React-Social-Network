import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     },
//   };
// };

const dispatchToProps = {
  addPost,
  updateNewPostText,
};

const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;
