import React, { useEffect } from 'react';
import { useBroadcastChannel, registerChannel } from 'react-broadcast-channel';

const CHANNEL = 'test';
registerChannel(CHANNEL);

export default function App() {
  const { emit, subscribe } = useBroadcastChannel(CHANNEL);
  useEffect(() => {
    subscribe((data: any) => {
      console.log(data);
    });
  },[]);
  return (
    <div>
      <button onClick={() => emit(prompt())}>emit</button>
    </div>
  );
}
