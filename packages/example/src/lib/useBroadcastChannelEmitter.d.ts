import { EmitPostMessage } from './types';
export default function useBroadcastChannelEmitter(name: string): {
    emit: (message: EmitPostMessage) => void;
    data: any;
};
