import React, { useEffect } from 'react';
import { useBroadcastChannel, registerChannel, } from './lib';

const CHANNEL = 'test';
registerChannel([CHANNEL]);



export default function App() {
  const { emit, subscribe } = useBroadcastChannel(CHANNEL);
  subscribe((data) => {
    console.log(data)
  })
  return (
    <div>
      <button onClick={()=>emit("hola")}>emit</button>
    </div>
  );
}
