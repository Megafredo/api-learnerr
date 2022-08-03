//~ Core Data Mapper
class CoreDataMapper {
  tableName;
  createFunctionName;
  updateFunctionName;
  onScrollFunctionName;
  searchFunctionName;
  deleteCommentFunctionName;
  allCommentsByUserFunctionName;
  detailsViewName;
  columns;

  constructor(client) {
    this.client = client;
  }

  //& FindAll
  async findAll() {
    const preparedQuery = {
      text: `
          SELECT ${this.columns}
          FROM "${this.tableName}"
          ORDER BY "id";`
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  //& Fetch all detailed
  async findAllDetailed() {
    const preparedQuery = {
      text: `
      SELECT ${this.columns}
      FROM "${this.detailsViewName}";`
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  //& FindOne
  async findOne(id) {
    const preparedQuery = {
      text: `
          SELECT ${this.columns} 
          FROM "${this.tableName}"
          WHERE "id" = $1;
          `,
      values: [id]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) return null;

    return result.rows[0];
    }
    
  //& Fetch 1 detailed
  async findOneDetailed(articleId) {
    const preparedQuery = {
      text: `
        SELECT ${this.columns} 
        FROM "${this.detailsViewName}"
        WHERE "id" = $1;
        `,
      values: [articleId]
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

    return result.rowCount;
  }

  //& Fetch on scroll
  async fetchOnScroll(limitNb, offsetNb) {
    const preparedQuery = {
      text: `
              SELECT ${this.columns} 
              FROM ${this.onScrollFunctionName}($1,$2);
              `,
      values: [limitNb, offsetNb]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rows;
  }

  //& Search all
  async search(inputData) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns} 
            FROM ${this.searchFunctionName}($1);
            `,
      values: [inputData]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rows;
  }

  //& Delete comment
  async deleteComment(inputData) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns} 
            FROM ${this.deleteCommentFunctionName}($1);
            `,
      values: [inputData]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rowCount;
  }

  //& All comments for 1 user
  async allCommentsByUser(userId) {
    const preparedQuery = {
      text: `
            SELECT ${this.columns} 
            FROM ${this.allCommentsByUserFunctionName}($1);
            `,
      values: [userId]
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows) return null;

    return result.rows;
  }
}

export { CoreDataMapper };
