import { Router } from "express";
import { scraper } from "../../server/scraper";

export const scraperRouter = Router();

scraperRouter.get("/scraper", async (req, res) => {
    try {
        const { q } = req.query
        console.log(`[scraperRouter] - query: ${q}`);
        const answer = await scraper(q as string, 'he')
        console.log(`[scraperRouter] - answer: ${answer}`);
        
        res.send({answer});
    } catch (error) {
        console.log(`[scraperRouter] - error: ${error}`);
        res.sendStatus(500);
    }
});