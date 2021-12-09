import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are u?", likesCount: 20 },
      { id: 2, message: "It's my first post", likesCount: 15 },
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Vanya", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 2, name: "Andrew", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 3, name: "Dima", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 4, name: "VaDick", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 5, name: "Ilya", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "Luv u" },
    ],
  },

  sidebar: {
    friends: [
      { id: 1, name: "Vanya", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 2, name: "Andrew", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 3, name: "Dima", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
    ],
  },
};

export const addPost = (postMessage) => {
  const newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
