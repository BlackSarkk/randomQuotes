import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

export const PORT = process.env.PORT;
export { axios, cors };
