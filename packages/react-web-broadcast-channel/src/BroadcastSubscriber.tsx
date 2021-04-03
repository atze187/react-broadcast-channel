import { BroadcastSubscriberProps } from './types';
import useBroadcastChannel from './useBroadcastChannel';

const BroadcastSubscriber = ({
  children,
  channel,
}: BroadcastSubscriberProps)  => {
  const { data } = useBroadcastChannel(channel);
  return children ? children(data) : null;
};

export default BroadcastSubscriber;
