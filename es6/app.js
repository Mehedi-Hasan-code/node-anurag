import fs from "node:fs/promises";

// const value = fs.readFileSync("./index.html", "utf8")

// fs.readFile("./index.html", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data); 
// })

const fileValue = await fs.readFile("./index.html", "utf8")
console.log(fileValue);

console.log('end');