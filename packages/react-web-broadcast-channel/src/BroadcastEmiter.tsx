import pubsubChannels from './core/pubsubChannels';
import { BroadcastEmiterProps } from './types';

const BroadcastEmiter = ({ children, channel }: BroadcastEmiterProps) => {
  
  return children
    ? children((message) => {
        pubsubChannels.emit(channel,message)
      })
    : null;
};

export default BroadcastEmiter;
