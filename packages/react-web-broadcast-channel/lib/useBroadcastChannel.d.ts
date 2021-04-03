import { CallbackEvent, EmitPostMessage } from './types';
export default function useBroadcastChannel(name: string): {
    emit: (message: EmitPostMessage) => void;
    subscribe: (callback: CallbackEvent) => void;
    data: any;
};
