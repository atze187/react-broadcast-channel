import { BroadcastChannelItem, CallbackEvent, EmitPostMessage } from '../types';
import isEmpty from '../utils/isEmpty';

const events: Record<string, BroadcastChannelItem> = {};
const pubsubChannels = {
  subscribe(channel: string = '', callback: CallbackEvent) {
    if (!isEmpty(channel)) {
      if (events[channel]?.broadcastChannel) {
        events[channel].callbacks.push(callback);
      } else {
        events[channel] = {
          broadcastChannel: new BroadcastChannel(channel),
          callbacks: [callback],
        };
      }
      events[channel].broadcastChannel.onmessage = (ev: MessageEvent<any>) => {
        events[channel].callbacks.forEach((currentCallback: CallbackEvent) => {
          currentCallback(ev.data as EmitPostMessage);
        });
      };
    }
  },
  emit(channel: string = '', data: EmitPostMessage) {
    const getCurrentChannel = events[channel];
    if (getCurrentChannel || getCurrentChannel !== null) {
      const { callbacks, broadcastChannel } = getCurrentChannel;
      broadcastChannel.postMessage(data);
      callbacks.forEach((currentCallback: CallbackEvent) => {
        currentCallback(data);
      });
    }
  },
};

export default pubsubChannels;
