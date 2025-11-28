import * as dotenv from "dotenv";
import path from "path";
import { env } from 'node:process';
// import "dotenv/config";

dotenv.config({ path: path.join(process.cwd(), '.env') })
// dotenv.config({ path: path.join(__dirname, '.env') })
// console.log(__dirname);

const config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5000
}
export default config
