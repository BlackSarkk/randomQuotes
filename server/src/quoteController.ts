import type { Request, Response } from "./app.js";
import { success, error } from "./utils/logger.js";
import { axios } from "./constants.js";

export const quoteHandler = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("http://api.quotable.io/random");

    const oneQuote = response.data;

    success("Fetched a random quote successfully");

    res.status(200).json({
      success: true,
      quote: {
        id: oneQuote.id,
        author: oneQuote.author,
        content: oneQuote.content,
        tags: oneQuote.tags,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      error(`Failed to fetch quote → ${err.message}`);
      res.status(500).json({ success: false, error: err.message });
    } else {
      error("Unexpected error while fetching quote");
      res.status(500).json({ success: false, error: "Unexpected error" });
    }
  }
};
