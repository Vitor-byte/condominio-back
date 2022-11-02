import dotenv from "dotenv"
dotenv.config({ path: '../.env' });
const isProduction = process.env.NODE_ENV === 'production'

const { Client } = require("pg");

const connectionString =  'postgresql://Vitor:15340154@localhost:5432/condominio'

const client = new Client({
  connectionString: isProduction ? process.env.DATABASE_URL: connectionString
  }
  );
client.connect();

 export{client};

