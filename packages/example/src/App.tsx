import React,{ useEffect, useRef, useState } from "react";
import { useBroadcastChannel  } from "./lib"

const TEST_CHANNEL = "TEST_CHANNEL";

function SubmitMessage() {
  const { emit } = useBroadcastChannel(TEST_CHANNEL);
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
  const { subscribe } = useBroadcastChannel(TEST_CHANNEL);
  useEffect(() => {
    const unsubscribe = subscribe((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <ol>
      {messages.map((item, id) => (
        <li key={id}>{item.message}</li>
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
