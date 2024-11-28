import { Pool,types } from "pg";
import {
  SUPABASE_DATABASE,
  SUPABASE_HOST,
  SUPABASE_PASSWORD,
  SUPABASE_PORT,
  SUPABASE_USER,
} from "./env";

export const db = new Pool({
  host: SUPABASE_HOST,
  user: SUPABASE_USER,
  password: SUPABASE_PASSWORD,
  database: SUPABASE_DATABASE,
  port: Number(SUPABASE_PORT),
});

types.setTypeParser(20,(val)=> parseInt(val))