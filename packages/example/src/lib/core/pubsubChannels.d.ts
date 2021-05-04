import { CallbackEvent, EmitPostMessage } from '../types';
declare const pubsubChannels: {
    subscribe(channel: string, callback: CallbackEvent): () => void;
    emit(channel: string, data: EmitPostMessage): void;
    exists(channel: string): boolean;
};
export default pubsubChannels;
