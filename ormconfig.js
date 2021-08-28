require('dotenv').config();

const sslConfig = process.env.NODE_ENV !== 'production' ? {} : sslData;
const sslData = {
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    }
  }
}

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrationsTableName: "migrations",
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "dist/entities/*.js"
    },
    ...sslConfig
};
