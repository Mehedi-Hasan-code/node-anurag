// import fs from "node:fs/promises";

// // const value = fs.readFileSync("./index.html", "utf8")

// // fs.readFile("./index.html", "utf8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data); 
// // })

// const fileValue = await fs.readFile("./index.html", "utf8")
// console.log(fileValue);

// console.log('end');

const a = new ArrayBuffer(6);
const view = new DataView(a, 2)

view.setInt8(0, 255);
view.setInt8(1, 0x32);
view.setInt8(2, 0o62);
view.setInt8(3, 0b00110010);

console.log(a);
console.log(view.getInt8(0));