import React from "react";

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  };

  return (
    <Dialogs dialogsPage={state.dialogsPage} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} />
  );
};

export default DialogsContainer;
