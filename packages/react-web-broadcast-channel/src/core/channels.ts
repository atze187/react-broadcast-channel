import { EmitPostMessage } from '../types';

export function createNewBroadcastChannel(channelName: string) {
  const channel = new BroadcastChannel(channelName);
  return channel;
}

export function emitMessageFromChannel(channel : BroadcastChannel) {
  return {
    send(message : EmitPostMessage) {
      channel.postMessage(message);
    }
  }
}


