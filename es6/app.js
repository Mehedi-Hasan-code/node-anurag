import fs from 'node:fs/promises'

// // const value = fs.readFileSync("./index.html", "utf8")

// // fs.readFile("./index.html", "utf8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data); 
// // })

// const fileValue = await fs.readFile("./index.html", "utf8")
// console.log(fileValue);

// console.log('end');

// array buffers using data view

// const a = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
// const view = new DataView(a);


// for(let i = 0; i < a.byteLength; i++) {
//   view.setInt8(i, i+1)
// }

// console.log(a);

// typed arrays


// const unit8Array = new Uint8Array(8)

// unit8Array[0] = 0x50
// unit8Array[1] = 0x72
// unit8Array[2] = 0x6f
// unit8Array[3] = 0x43
// unit8Array[4] = 0x6f
// unit8Array[5] = 0x64
// unit8Array[6] = 0x72
// unit8Array[7] = 0x73



// console.log(unit8Array);
// const view = new DataView(unit8Array.buffer)

// fs.writeFile("buffer-text.txt", view)




