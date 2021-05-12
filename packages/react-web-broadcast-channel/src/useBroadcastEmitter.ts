import { useState } from 'react';
import pubsubChannels from './core/pubsubChannels';
import { EmitPostMessage } from './types';

export default function useBroadcastEmitter(name: string) {
  const [ data, setDataEmiter ] = useState(null);

  const emit = (message: EmitPostMessage) => {
    setDataEmiter(message);
    pubsubChannels.emit(name,message);
  };
  
  return {
    emit,
    data,
  };
}
