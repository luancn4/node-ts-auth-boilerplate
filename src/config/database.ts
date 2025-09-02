import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || process.env.DB_NAME || 'node-auth-boilerplate',
  process.env.MYSQLUSER || process.env.DB_USER || 'root',
  process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || 'rootpassword',
  {
    host: process.env.MYSQLHOST || process.env.DB_HOST || 'db',
    port: Number(process.env.MYSQLPORT || process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false,
  },
);
