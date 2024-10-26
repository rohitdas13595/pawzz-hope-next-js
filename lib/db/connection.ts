
import  {drizzle }  from "drizzle-orm/libsql";
import { settings, Settings } from "../settings";
import { createClient,   } from "@libsql/client";


const  client  =  createClient({
  url: `file:${process.cwd()}/pawzz.db`
});


export const  db   = drizzle( client );