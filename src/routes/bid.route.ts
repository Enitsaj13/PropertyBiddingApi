import { Router } from "express";
import { getBidInfo } from "../controllers/bid.controller";

const router = Router();

/**
 * @swagger
 * /bids:
 *   get:
 *     summary: Get bid summary for current user
 *     tags: [Bids]
 *     responses:
 *       200:
 *         description: Bid summary data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BidSummary'
 */
router.get("/", getBidInfo);

export default router;
