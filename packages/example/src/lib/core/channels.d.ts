import { EmitPostMessage } from '../types';
export declare function createNewBroadcastChannel(channelName: string): BroadcastChannel;
export declare function emitMessageFromChannel(channel: BroadcastChannel): {
    send(message: EmitPostMessage): void;
};
