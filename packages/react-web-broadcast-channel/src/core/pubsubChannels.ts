import { BroadcastChannelItem, CallbackEvent, EmitPostMessage } from '../types';
import isEmpty from '../utils/isEmpty';
import { createNewBroadcastChannel, emitMessageFromChannel } from './channels';

const events: Record<string, BroadcastChannelItem> = {};

const pubsubChannels = {

  subscribe(channel: string = '', callback: CallbackEvent) {
    
    if (!isEmpty(channel)) {
      if (events[channel]?.broadcastChannel) {
        events[channel].callbacks.push(callback);
      } else {
        events[channel] = {
          broadcastChannel: createNewBroadcastChannel(channel),
          callbacks: [callback],
        };
      }

      events[channel].broadcastChannel.onmessage = (ev: MessageEvent<EmitPostMessage>) => {
        events[channel].callbacks.forEach((currentCallback: CallbackEvent) => {
          currentCallback(ev.data as EmitPostMessage);
        });
      };
      const { broadcastChannel, callbacks } = events[channel];

      const handler = (ev: MessageEvent<EmitPostMessage>) => {
        callbacks.forEach((currentCallback: CallbackEvent) => {
          if (typeof currentCallback === 'function') {
            currentCallback(ev.data as EmitPostMessage);
          }
        });
      };
      broadcastChannel.addEventListener('message', handler);
      
      return () => {
        broadcastChannel.removeEventListener('message', handler);
      };
    }

    return () => null;
  },

  emit(channel: string = '', data: EmitPostMessage) {
    const getCurrentChannel = events[channel];
    if (getCurrentChannel || getCurrentChannel !== null) {
      const { callbacks, broadcastChannel } = getCurrentChannel;
      //broadcastChannel.postMessage(data);
      emitMessageFromChannel(broadcastChannel).send(data);
      callbacks.forEach((currentCallback: CallbackEvent) => {
        currentCallback(data);
      });
    }
  },

  exists(channel : string) {
    return Object.keys(events).includes(channel);
  }

};

export default pubsubChannels;
