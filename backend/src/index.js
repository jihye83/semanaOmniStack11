const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * metodo HTTP:
 * GET: buscar/listar uma informacao do back-end
 * POST: criar uma informacao no back-end
 * PUT: altera uma informcao no back-end
 * DELETE: deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */
 /**
  * Driver: SELECT *FROM users
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333);
