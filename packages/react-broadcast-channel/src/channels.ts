import { EmitMessage, ListBroadcastChannels } from './types';

export const channels: ListBroadcastChannels = [];

export function createNewChannel(nameChannel: string) {
  const channel = new BroadcastChannel(nameChannel);
  return channel;
}

export function registerChannel(nameChannel: string) {
  channels.push(createNewChannel(nameChannel));
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

export function emitMessageFromChannel({ name, message }: EmitMessage) {
  channels.forEach((channel) => {
    if (channel.name === name) {
      channel.postMessage(message);
    }
  });
}
