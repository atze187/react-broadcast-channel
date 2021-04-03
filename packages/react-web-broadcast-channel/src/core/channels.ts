import { EmitPostMessage, ListBroadcastChannels } from '../types';

export const channels: ListBroadcastChannels = [];

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

export function registerChannel(nameChannel: string | string[]) {
  if(Array.isArray(nameChannel)) {
    const parseChannels = nameChannel.map((currentNameChannel) => createNewBroadcastChannel(currentNameChannel));
    channels.push(...parseChannels);
    return;
  }
  channels.push(createNewBroadcastChannel(nameChannel));
}

export function getChannelByName(name: string): BroadcastChannel | null {
  let channel: BroadcastChannel | null = null;
  channels.forEach((currentChannel) => {
    if (currentChannel.name === name) {
      channel = currentChannel;
    }
  });
  return channel;
}


