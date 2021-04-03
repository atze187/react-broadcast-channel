import { useEffect, useState } from 'react';
import pubsubChannels from './core/pubsubChannels';
import { CallbackEvent, EmitPostMessage } from './types';

export default function useBroadcastChannel(name: string) {
  const [ data, setDataEmiter ] = useState(null);

  const emit = (message: EmitPostMessage) => {
    setDataEmiter(message);
    pubsubChannels.emit(name,message);
  };

  const subscribe = (callback : CallbackEvent) => pubsubChannels.subscribe(name,callback);
  
  useEffect(() => {
    subscribe(data => {
      setDataEmiter(data);
    })
  },[]);

  
  return {
    emit,
    subscribe,
    data,
  };
}
