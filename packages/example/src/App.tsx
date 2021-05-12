import React,{ useEffect, useRef, useState } from "react";
import { useBroadcastEmitter, useBroadcastSubscriber  } from "./lib"

const TEST_CHANNEL = "TEST_CHANNEL";

function SubmitMessage() {
  const { emit } = useBroadcastEmitter(TEST_CHANNEL);
  const input = useRef<HTMLInputElement>(null);
  
  const sendMessage = () => {
    emit({
      message: input.current.value
    });
  };

  return (
    <header>
      <input ref={input} />
      <button onClick={sendMessage}>send a message</button>
    </header>
  );
}

const ListMessages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useBroadcastSubscriber(TEST_CHANNEL);
  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, data]);
  }, [data]);
  return (
    <ol>
      {messages.map((item, id) => (
        <li key={id}>{item?.message}</li>
      ))}
    </ol>
  );
};


export default function App() {
  return (
    <div className="App">
      <SubmitMessage />
      <ListMessages />
    </div>
  );
}
