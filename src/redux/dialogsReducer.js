const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const initialState = {
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageBody,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: "",
      };

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newText,
      };

    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newText: text,
});

export default dialogsReducer;
