import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} source={d.avatar} />
  ));

  const messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  // const newMessageRef = React.createRef();

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    // const text = newMessageRef.current.value;
    const text = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messages_elements}>{messagesElements}</div>
        <div className={s.send_message}>
          <textarea
            className={s.textarea}
            onChange={onNewMessageChange}
            // ref={newMessageRef}
            value={props.dialogsPage.newMessageBody}
            placeholder="Enter your message"
          />
          <button className={s.send_button} onClick={onSendMessageClick}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
