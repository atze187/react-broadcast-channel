import { useState } from 'react';
import pubsubChannels from './core/pubsubChannels';
import { EmitPostMessage } from './types';

export default function useBroadcastEmitter<T extends EmitPostMessage>(name: string) {
  const [ data, setDataEmiter ] = useState<T>(null);

  const emit = (message: EmitPostMessage) => {
    setDataEmiter(message as T);
    pubsubChannels.emit(name,message);
  };
  
  return {
    emit,
    data,
  };
}
