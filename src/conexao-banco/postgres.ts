import dotenv from "dotenv"
dotenv.config();
const isProduction = process.env.NODE_ENV === 'production'

const { Client } = require("pg");

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const client = new Client({
  connectionString: isProduction ? process.env.DATABASE_URL: connectionString,
  logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
  );
client.connect();

 export{client};

