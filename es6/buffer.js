import { Buffer } from "node:buffer";

const nodeBuffer = Buffer.alloc(4)
const a = new ArrayBuffer(4)
const nodeBuffer2 = Buffer.from(a)
const uint8Array = new Uint8Array(a)

uint8Array[0] = 0x43
uint8Array[1] = 0x6f
uint8Array[2] = 0x72
uint8Array[3] = 0x50

console.log(nodeBuffer);
console.log(nodeBuffer2);

console.log(nodeBuffer2.buffer === uint8Array.buffer);

console.log(nodeBuffer2.toString('utf-8'));