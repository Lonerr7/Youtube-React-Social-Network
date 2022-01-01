import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const DialogsRedirect = withAuthRedirect(Dialogs);

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
  updateNewMessageBody,
};

const DialogsContainer = connect(mapStateToProps, dispatchToProps)(DialogsRedirect);

export default DialogsContainer;
