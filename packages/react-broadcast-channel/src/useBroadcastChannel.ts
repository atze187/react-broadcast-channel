import { emitMessageFromChannel, getChannelByName } from './channels';
import { EmitPostMessage } from './types';

export default function useBroadcastChannel(name: string) {
  const emit = (message: EmitPostMessage) => {
    emitMessageFromChannel({ name, message });
  };

  const subscribe = (callback: (ev: EmitPostMessage) => void) => {
    const channel = getChannelByName(name);
    const handler = (ev : MessageEvent<any>) => {
      callback(ev.data)
    }
    channel && channel.addEventListener('message', handler);
    return () => {
      channel && channel.removeEventListener('message', handler);
    };
  };
  
  return {
    emit,
    subscribe,
  };
}
