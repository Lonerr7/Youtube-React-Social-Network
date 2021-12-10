import React from 'react';

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

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };
 
  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage} />
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
