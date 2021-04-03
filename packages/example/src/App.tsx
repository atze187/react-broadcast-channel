import React from 'react';
import { useBroadcastChannel  } from "./lib"


const TEST_CHANNEL = "TEST_CHANNEL";


export default function App() {
  const { emit, data } = useBroadcastChannel(TEST_CHANNEL);

  const sendMessage = () => {
    emit(prompt())
  }

  return(
    <div>
      <button onClick={sendMessage}>emit event</button>
      <h1>{data}</h1>
    </div>
  )
}
