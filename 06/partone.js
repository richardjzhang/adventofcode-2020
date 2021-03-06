const path = require('path');
const filePath = path.join(__dirname, 'input.txt');
const readFile = require('../utils').readFile;

// Processing the input into a suitable data structure
function processInput(input) {
  const answers = input.split('\n\n').map((group) => {
    let letters = {};
    group
      .split('\n')
      .join('')
      .split('')
      .forEach((letter) => {
        if (letters[letter] == null) letters[letter] = 0;
        letters[letter]++;
      });
    return letters;
  });
  return answers;
}

// Main function that is run to get solution
async function main() {
  const input = await readFile(filePath);
  const answers = processInput(input);
  console.log(answers.reduce((acc, curr) => acc + Object.keys(curr).length, 0));
}

main();
