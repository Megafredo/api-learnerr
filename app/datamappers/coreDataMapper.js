//~ Core Data Mapper
class CoreDataMapper {
  tableName;
  functionName;

  constructor(client) {
    this.client = client;
  }

  //& FindAll
  async findAll() {
    const preparedQuery = {
      text: `SELECT * FROM "${this.tableName}";`
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  //& FindOne
  async findOne(id) {
    const preparedQuery = {
      text: `
            SELECT * FROM "${this.tableName}"
            WHERE "id" = $1;
            `,
      values: [id]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
  }

  //& Create
  async create(inputData) {
    const json = JSON.stringify(inputData);

    const preparedQuery = {
      text: `SELECT (vue($1))`,
      values: [inputData]
    };

    const result = await this.client.query(preparedQuery);
    return result.rowCount;
  }

  //& Update
  async update(inputData) {
    const json = JSON.stringify(inputData);

    const preparedQuery = {
      text: `SELECT (vue($1))`,
      values: [inputData]
    };
    const result = await this.client.query(preparedQuery);
    return result.rowCount;
  }

  //& Delete
  async delete(id) {
    const preparedQuery = {
      text: `
            DELETE FROM "${this.tableName}"
            WHERE "id" = $1;
            `,
      values: [id]
    };

      const result = await this.client.query(preparedQuery);
      console.log("result: ", result.rowCount);
      
    return result.rowCount;
  }
}

export { CoreDataMapper };
