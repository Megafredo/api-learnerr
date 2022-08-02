//~ Import module
import  client  from '../db/database.js';

class Word {
  static async check(inputData) {
    console.log("inputData: ", inputData);

    const preparedQuery = {
      text: `SELECT * 
             FROM checkWord($1);`,
      values: [inputData]
    };
    const { rows } = await client.query(preparedQuery);

    return rows[0].checkword; //expected output boolean
  }
}

export { Word };