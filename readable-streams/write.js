import fs from 'node:fs';

// const readStream = fs.createReadStream(
//   "C:\\Users\\pc\\Videos\\Screen-Recordings\\video.mp4",
//   {
//     highWaterMark: 4,
//   }
// );

const writesStream = fs.createWriteStream('bc.txt', {
  highWaterMark: 4,
});

let i = 1;
while (i < 100) {
  console.log(writesStream.writableLength);
  let isEmpty = writesStream.write('a');
  i++;
  if (!isEmpty) {
    break;
  }
  console.log(isEmpty);
}

writesStream.on('drain', () => {
  console.log('drain', writesStream.writableLength);
  while (i < 100) {
    console.log(writesStream.writableLength);
    let isEmpty = writesStream.write('a');
    i++;
    if (!isEmpty) {
      break;
    }
    console.log(isEmpty);
  }
});

// readStream.on('data', (chunk) => {
//   writesStream.write(chunk);
// })
