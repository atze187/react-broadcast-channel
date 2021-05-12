import { Handler } from './../types';

const listeners = new Map<string, Handler<any>[]>();

function currentListener(name) {
  return listeners.get(name) || [];
}

const pubsub = {
  publish<T>(name: string, payload: T) {
    currentListener(name).map((currentHandler) => {
      currentHandler(payload);
    });
  },

  subscribe<T>(name: string, handler: Handler<T>) {
    const currentListener = listeners.get(name);
    const isAdded = currentListener && currentListener.push(handler);
    if (!isAdded) {
      listeners.set(name, [handler]);
    }
  },

  size(name: string) {
    return (listeners.get(name) || []).length;
  },

  unsubscribe<T>(name: string, handler: Handler<T>) {
    const handlers = currentListener(name);
    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
  },

};

export default pubsub;
