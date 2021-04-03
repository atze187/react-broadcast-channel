import { ReactElement } from "react";
export declare type EmitPostMessage = string | object | number | boolean;
export declare type BroadcastEmiterProps = {
    channel: string;
    children?: (emit: (message: EmitPostMessage) => void) => ReactElement;
};
export declare type BroadcastSubscriberProps = {
    channel: string;
    children?: (message: EmitPostMessage) => ReactElement;
};
export declare type CallbackEvent = (data: EmitPostMessage) => void;
export interface BroadcastChannelItem {
    broadcastChannel: BroadcastChannel;
    callbacks: CallbackEvent[];
}
