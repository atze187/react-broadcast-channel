# React broadcast channel

Implementation of [**BroadcastChannel API**](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) in react to emit and subscribe any messages to a particular channel.

## Emiting messages to channel

```javascript
import { useEffect } from "react";
import { BroadcastSubscriber, BroadcastEmiter, useBroadcastChannel } from "react-broadcast-channel";

function EmitMessageFromA() {
    const { emit } = useBroadcastChannel("test_channel");
    
    const sendMessage = () => {
      emit(prompt())
    }

    return <button onClick={sendMessage}>send message from a</button>
}

function EmitMessageFromB() {
    return(
     <BroadcastEmiter channel="test_channel">
       {(emit) => {
         return <button onClick={() => emit(prompt()) }>
           send message from b
         </button>    
       }}
     </BroadcastEmiter>
    )
}


```

## Suscribe a channel 

```javascript
import {, BroadcastSubscriber, useBroadcastChannel } from "react-broadcast-channel";

function SubscriberA() {
  const { subscriber } = useBroadcastChannel("test_channel");
  useEffect(() => {
    subscriber( data => {
      console.log(data)
    })
  },[])

  return <div>Subscribe from A</div>
}

function SubscriberB() {
  return(
   <BroadcastSubscriber channel="test_channel">
    {(data) => (
      <div>{data}<div>
    )}
   </BroadcastSubscriber>
  ) 
}
```