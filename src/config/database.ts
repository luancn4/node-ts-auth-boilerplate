import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME || "node-auth-boilerplate",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "rootpassword",
  {
    host: process.env.DB_HOST || "db",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
    logging: false,
  }
);
