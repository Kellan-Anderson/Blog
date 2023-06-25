import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL;

if(!connectionString) {
  throw new Error("No connection string found");
}

const client = postgres(connectionString, { ssl: 'require' });

export const db = drizzle(client);