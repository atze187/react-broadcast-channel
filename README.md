# React broadcast channel

![last commit](https://img.shields.io/github/last-commit/jhony-24/react-broadcast-channel)
![version](https://img.shields.io/github/package-json/v/jhony-24/react-broadcast-channel)
![licence](https://img.shields.io/github/license/jhony-24/react-broadcast-channel)
![code](https://img.shields.io/github/languages/top/jhony-24/react-broadcast-channel)

Implementation of [**BroadcastChannel API**](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) in react to emit and subscribe any messages to a particular channel.

## Introduction

If you open other tab in your browser, you cant see how the message sent is updated in all tabs.

```javascript
import React from 'react';
import { useBroadcastChannel } from "react-web-broadcast-channel"


const TEST_CHANNEL = "TEST_CHANNEL";

export default function App() {
  const { emit, data } = useBroadcastChannel(TEST_CHANNEL);

  const sendMessage = () => {
    emit(prompt())
  }


  return(
    <div>
      <button onClick={sendMessage}>emit event</button>
      <h1>{data}</h1>
    </div>
  )
}
```

## Emiting messages to channel

```javascript
import { useEffect } from "react";
import { BroadcastSubscriber, BroadcastEmiter, useBroadcastChannel } from "react-web-broadcast-channel";

function EmitMessageFromA() {
    const { emit } = useBroadcastChannel(TEST_CHANNEL);
    
    const sendMessage = () => {
      emit(prompt())
    }

    return <button onClick={sendMessage}>send message from a</button>
}

function EmitMessageFromB() {
    return(
     <BroadcastEmiter channel={TEST_CHANNEL}>
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
import {, BroadcastSubscriber, useBroadcastChannel } from "react-web-broadcast-channel";

function SubscriberA() {
  const { subscribe } = useBroadcastChannel(TEST_CHANNEL);
  useEffect(() => {
    const unsubscribe = subscribe( data => {
      console.log(data)
    })
    return () => {
      unsubscribe();
    }
  },[])

  return <div>Subscribe from A</div>
}

function SubscriberB() {
  return(
   <BroadcastSubscriber channel={TEST_CHANNEL}>
    {(data) => (
      <div>{data}<div>
    )}
   </BroadcastSubscriber>
  ) 
}
```
