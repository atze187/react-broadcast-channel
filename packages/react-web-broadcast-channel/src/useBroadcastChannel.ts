import { useCallback, useEffect, useState } from 'react';
import { emitMessageFromChannel, getChannelByName } from './core/channels';
import { EmitPostMessage } from './types';

export default function useBroadcastChannel(name: string) {
  const [ data, setDataEmiter ] = useState(null);

  const emit = (message: EmitPostMessage) => {
    setDataEmiter(message);
    emitMessageFromChannel({ name, message });
  };

  const subscribe = useCallback(( callback : (payload : any) => void ) => {
    callback(data);
  },[data]);

  
  useEffect(() => {
    const channel = getChannelByName(name);
    const handler = (ev : MessageEvent<any>) => {
      setDataEmiter(ev.data);
    }
    channel && channel.addEventListener('message', handler);
  },[]);

  
  return {
    emit,
    subscribe,
    data
  };
}
