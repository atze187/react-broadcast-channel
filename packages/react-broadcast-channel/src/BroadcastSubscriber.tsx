import React, { useEffect, useState } from 'react';
import { BroadcastSubscriberProps, EmitPostMessage } from './types';
import useBroadcastChannel from './useBroadcastChannel';

const BroadcastSubscriber = ({
  children,
  channel,
}: BroadcastSubscriberProps) => {
  
  const { subscribe } = useBroadcastChannel(channel);
  const [message, setMessage] = useState<EmitPostMessage>(null);
  
  useEffect(() => {
    const unsubscriber = subscribe((ev) => {
      setMessage(ev.data);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  return children ? children(message) : null;
};

export default BroadcastSubscriber;
