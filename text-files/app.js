import fs from 'node:fs/promises';

const filePath = process.argv[2]

const file1Content = await fs.readFile(filePath, 'utf8');
const wordsArray = file1Content.split(/[\W]/).filter( w => w)

const wordsCount = {}

wordsArray.forEach ( w => {
  if ( w in wordsCount) {
    wordsCount[w]++
  } else {
    wordsCount[w] = 1
  }
})
console.log(wordsCount);