import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.setMaxListeners(3)

emitter.on('abc', () => {
  console.log("abc event fired 1");
})

emitter.on('bcd', () => {
  console.log("bcd event fired 2");
})

emitter.emit('abc')
emitter.emit('bcd')