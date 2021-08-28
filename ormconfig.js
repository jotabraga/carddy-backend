require('dotenv').config();

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrationsTableName: "migrations",
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: "src/entities/*.ts",
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  migrationsTransactionMode: "each",
};