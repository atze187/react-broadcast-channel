import { useEffect, useState } from "react";
import pubsubChannels from "./core/pubsubChannels";
import { EmitPostMessage } from "./types";

export default function useBroadcastSubscriber<T extends EmitPostMessage >(name: string) {
    const [ data, setDataEmiter ] = useState<T>(null);
    useEffect(() => {
        const unsubscribe = pubsubChannels.subscribe(name,data => {
            setDataEmiter(data as T);
          })
        return () => {
          unsubscribe();
        }
      },[]);

    return {
        data,
    }
}