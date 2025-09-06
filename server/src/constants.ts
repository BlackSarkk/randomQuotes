import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

export const PORT = process.env.PORT || 6000;
export { axios, cors };
