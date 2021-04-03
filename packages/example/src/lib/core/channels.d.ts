import { EmitMessage, ListBroadcastChannels } from '../types';
export declare const channels: ListBroadcastChannels;
export declare function createNewChannel(nameChannel: string): BroadcastChannel;
export declare function registerChannel(nameChannel: string | string[]): void;
export declare function getChannelByName(name: string): BroadcastChannel | null;
export declare function emitMessageFromChannel({ name, message }: EmitMessage): void;
