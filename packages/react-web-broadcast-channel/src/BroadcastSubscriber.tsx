import { useEffect } from 'react';
import { getChannelByName } from './core/channels';
import { BroadcastSubscriberProps } from './types';

const BroadcastSubscriber = ({
  children,
  channel,
}: BroadcastSubscriberProps) => {
  useEffect(() => {
    const ch = getChannelByName(channel);
    const handler = (ev: MessageEvent<any>) => {
      console.log("from subscriber component",ch)
      console.log(ev.data);
    };
    ch && ch.addEventListener('message', handler);
  }, []);
  return children ? children([]) : null;
};

export default BroadcastSubscriber;
