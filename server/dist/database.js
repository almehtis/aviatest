"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "localhost",
    password: "LsCCJ6Hv",
    database: "visitors",
    port: 5432,
});
