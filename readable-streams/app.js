import fs, { read } from 'node:fs';

const readStream = fs.createReadStream('chars.txt', {
  highWaterMark: 4,
});


readStream.setEncoding('utf-8')

// let readCount = 0;
// readStream.on('data', (chunk) => {
//    console.log(chunk.toString());
//   const { bytesRead, readableHighWaterMark } = readStream
//   console.log(bytesRead, readableHighWaterMark);
//    readCount++;

//   if (bytesRead === readableHighWaterMark) {
//     fs.writeFileSync('./abc.txt', chunk);
//   }

//   fs.appendFileSync('abc.txt', chunk);
//   readStream.pause();

//   setTimeout(() => {
//     readStream.resume();
//   }, 500);
// });



// readStream.on('readable', () => {
//   console.log(readStream.readableLength);
//   console.log(readStream.read(4));
//   console.log(readStream.readableLength);
// })

readStream.on('data', (chunk) => {
  console.log(chunk);
});