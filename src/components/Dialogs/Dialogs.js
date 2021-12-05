import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from "./Dialogs.module.css";

const Dialogs = () => {
  const dialogs = [
    { id: 1, name: "Vanya" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Dima" },
    { id: 4, name: "VaDick" },
    { id: 5, name: "Ilya" },
  ];

  const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Luv u" },
  ];

  const dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
