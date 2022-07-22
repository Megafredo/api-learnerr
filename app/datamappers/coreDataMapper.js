//~ Core Data Mapper
class CoreDataMapper {
  tableName;
  createFunctionName;
  updateFunctionName;
  columns;

  constructor(client) {
    this.client = client;
  }

  //& FindAll
  async findAll() {
    const preparedQuery = {
      text: `SELECT ${this.columns} FROM "${this.tableName}";`
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }


  //& FindOne
  async findOne(id) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns} FROM "${this.tableName}"
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

    const preparedQuery = {
      text: `SELECT * FROM ${this.createFunctionName}($1);`,
      values: [inputData]
    };

    const result = await this.client.query(preparedQuery);
    return result.rows;
  }

  //& Update
  async update(inputData) {
      
    const preparedQuery = {
        text: `SELECT * FROM ${this.updateFunctionName}($1);`,
        values: [inputData]
    };
      const result = await this.client.query(preparedQuery);
      
    return result.rows;
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
