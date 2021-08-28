require('dotenv').config();

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    migrationsTableName: "migrations",
<<<<<<< HEAD
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "src/entities"
    }
};
=======
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
        migrationsDir: "src/migrations",
        entitiesDir: "dist/entities/*.js"
    },
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    },
    migrationsTransactionMode: 'each'
  };
>>>>>>> 933639db2a5b2c4b6ec0d588ad1d0e3232c63689
