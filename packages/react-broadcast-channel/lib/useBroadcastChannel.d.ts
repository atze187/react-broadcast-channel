import { EmitPostMessage } from './types';
export default function useBroadcastChannel(name: string): {
    emit: (message: EmitPostMessage) => void;
    subscribe: (callback: (payload: any) => void) => void;
};
