import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} source={d.avatar} />
  ));

  const messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageBody(text);
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
