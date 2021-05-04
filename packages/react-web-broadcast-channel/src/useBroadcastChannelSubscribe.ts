import { useEffect, useState } from "react";
import pubsubChannels from "./core/pubsubChannels";

export default function useBroadcastChannelSubscribe<T extends any>(name: string) {
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
