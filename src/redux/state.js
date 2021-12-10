let rerenderEntireTree = () => {
  console.log(`State was changed!`);
}

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are u?", likesCount: 20 },
      { id: 2, message: "It's my first post", likesCount: 15 },
    ],
    newPostText: '',
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
    newMessage: '',
  },

  sidebar: {
    friends: [
      { id: 1, name: "Vanya", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 2, name: "Andrew", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
      { id: 3, name: "Dima", avatar: "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png" },
    ],
  },
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  const newMessage = {
    id: 4,
    message: state.dialogsPage.newMessage,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessage = '';
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessage = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

window.state = state;
export default state;
