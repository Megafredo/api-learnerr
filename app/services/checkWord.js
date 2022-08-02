//~ Import module
import { Word } from '../datamappers/checkWord.js';

async function check(message) {
  const messageToCheck = message.content;
  console.log("messageToCheck: ", messageToCheck);

  //& Split the message
  const words = messageToCheck.split(' ');
  const finalWords = [];
  let badWordFound = 0;

  //& Check if bad word
  for (const word of words) {
    const isExist = await Word.check(word);
    
    if (isExist) {
      let bad = '';

      for (let counter = 0; counter < word.length; counter++) {
        bad += 'X';
      }
      finalWords.push(bad);
      badWordFound++;
    } else {
      finalWords.push(word);
    }
  }

  return { badWordFound, message: finalWords.join(' ') };
}

export { check };
