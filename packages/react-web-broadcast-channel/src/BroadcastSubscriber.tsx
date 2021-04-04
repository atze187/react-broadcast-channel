import { useEffect, useState } from 'react';
import pubsubChannels from './core/pubsubChannels';
import { BroadcastSubscriberProps } from './types';

const BroadcastSubscriber = ({
  children,
  channel,
}: BroadcastSubscriberProps) => {
  const [  data, setData  ] = useState(null);
  
  useEffect(() => {
    const unsubscribe = pubsubChannels.subscribe(channel,(payloadData) => {
      setData(payloadData);
    })
    return () => {
      unsubscribe();
    }
  }, []);

  return children ? children(data) : null;
};

export default BroadcastSubscriber;
