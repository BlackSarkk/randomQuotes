import type { Request, Response } from "express";
import axios from "axios";


export const quoteHandler = async (req: Request, res: Response) => {

    try {

        const response = await axios.get(
            "http://api.quotable.io/random"
        );

        const oneQuote = response.data

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
            console.error(`Error: ${err.message}`);
            res.status(500).json({ success: false, error: err.message });
        } else {
            console.error("Unexpected error", err);
            res.status(500).json({ success: false, error: `Unexpected error` });
        }
    }
};

