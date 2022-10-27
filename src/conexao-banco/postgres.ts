import dotenv from "dotenv"
dotenv.config();
const isProduction = process.env.NODE_ENV === 'production'

const { Client } = require("pg");

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const client = new Client({
  connectionString
}
  );
client.connect();

 export{client};

