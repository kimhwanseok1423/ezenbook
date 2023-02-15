module.exports = {
  user: process.env.NODE_ORACLEDB_USER || 'ezenbooks',
  password: process.env.NODE_ORACLEDB_PASSWORD || 'a1234',
  connectString:
    process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'localhost:1521/xe',
  externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
};
