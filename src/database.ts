import { getConnectionManager } from 'typeorm';

export default async function connect() {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
        name: "default",
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
<<<<<<< HEAD
        synchronize: true,
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
=======
        ssl: {
            rejectUnauthorized: false
>>>>>>> 933639db2a5b2c4b6ec0d588ad1d0e3232c63689
        }
    });
    await connection.connect();
    return connection;
}
