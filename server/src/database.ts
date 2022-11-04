import { Pool } from "pg";

export const pool = new Pool({
  user: "", //your postgres username (postgres by default)
  host: "localhost",
  password: "", //your postgres password here
  database: "visitors", //your postgres database name (visitors in this project)
  port: 5432,
});
