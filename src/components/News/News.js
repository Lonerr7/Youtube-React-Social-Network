import React from 'react';

const News = () => {
  const newMessage = React.createRef();

  const sendMessage = () => {
    const text = newMessage.current.value;
    alert(text);
  };

  return (
    <div>
      <div>News</div>
      <div>
        <textarea ref={newMessage}></textarea>
        <div>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default News;
