'use server'
import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './connection';

// This will run migrations on the database, skipping the ones already applied
// await migrate(db, { migrationsFolder: './drizzle' });

// Don't forget to close the connection, otherwise the script will have a memory leak


export const  runMigrations =  async ()  => {

    migrate(db, { migrationsFolder: './lib/db/migrations',  migrationsTable: 'drizzle_migrations' ,  });
    // pool.end();
    return 'done';
}



