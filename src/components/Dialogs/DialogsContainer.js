import { connect } from "react-redux";

import {
  sendMessage,
  updateNewMessageBody,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageCreator());
//     },
//     updateNewMessageBody: (text) => {
//       dispatch(updateNewMessageBodyCreator(text));
//     },
//   };
// };

const dispatchToProps = {
  sendMessage,
  updateNewMessageBody
};

const DialogsContainer = connect(mapStateToProps, dispatchToProps)(Dialogs);

export default DialogsContainer;
