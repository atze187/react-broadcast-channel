import React from 'react';
import { BroadcastEmiterProps } from './types';
import useBroadcastChannel from './useBroadcastChannel';

const BroadcastEmiter = ({ children, channel }: BroadcastEmiterProps) => {
  const { emit } = useBroadcastChannel(channel);
  
  return children
    ? children((message) => {
        emit(message);
      })
    : null;
};

export default BroadcastEmiter;
