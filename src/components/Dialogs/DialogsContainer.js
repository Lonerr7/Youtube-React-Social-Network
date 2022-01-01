import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const dispatchToProps = {
  sendMessage,
  updateNewMessageBody,
};

export default compose(
  connect(mapStateToProps, dispatchToProps),
  withAuthRedirect
)(Dialogs);
