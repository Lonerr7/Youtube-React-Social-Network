const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are u?", likesCount: 20 },
        { id: 2, message: "It's my first post", likesCount: 15 },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Vanya",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 2,
          name: "Andrew",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 3,
          name: "Dima",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 4,
          name: "VaDick",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 5,
          name: "Ilya",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Luv u" },
      ],
      newMessage: "",
    },

    sidebar: {
      friends: [
        {
          id: 1,
          name: "Vanya",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 2,
          name: "Andrew",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
        {
          id: 3,
          name: "Dima",
          avatar:
            "https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log(`State was changed!`);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      const newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessage,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessage = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
export default store;