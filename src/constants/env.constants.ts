import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, "../../.env") });

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
export const GEMINI_API_URL = process.env.GEMINI_API_URL || "";
