import { Buffer, constants } from "node:buffer";

// const nodeBuffer1 = Buffer.alloc(50000);
// const nodeBuffer2 = Buffer.allocUnsafe(5000)

// // console.log(nodeBuffer1);
// // console.log(nodeBuffer2);

// console.log(nodeBuffer1.toString())
// console.log(nodeBuffer2.toString('utf-8'));

// const a = Buffer.alloc(4)
// const z = Buffer.alloc(4)

// const joined = Buffer.concat([a,z])

// console.log(joined);
// const b = Buffer.allocUnsafe(4095);
// const c = Buffer.allocUnsafe(4095 - 7)

// b[4095] = 1
// c[0] = 2

// console.log(b.buffer === c.buffer);

// console.log(a);
// console.log(b);
// console.log(c);


const b = Buffer.from('a'.repeat(constants.MAX_STRING_LENGTH))
const d = b.toString()

console.log(d);

