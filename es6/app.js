// import fs from "node:fs/promises";

// // const value = fs.readFileSync("./index.html", "utf8")

// // fs.readFile("./index.html", "utf8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data); 
// // })

// const fileValue = await fs.readFile("./index.html", "utf8")
// console.log(fileValue);

// console.log('end');

const a = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view = new DataView(a);


for(let i = 0; i < a.byteLength; i++) {
  view.setInt8(i, i+1)
}

console.log(a);