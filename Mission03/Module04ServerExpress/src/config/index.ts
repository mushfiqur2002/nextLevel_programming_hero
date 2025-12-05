import path from 'path';
import * as dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), '.env') })

export const config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5000,
    connectionString: process.env.CONNECTION_STRING || ''
}