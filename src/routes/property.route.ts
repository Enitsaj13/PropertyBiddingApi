import { Router } from "express";
import { getProperty, getProperties } from "../controllers/property.controller";

const router = Router();

/**
 * @swagger
 * /properties:
 *   get:
 *     summary: Get all property listings
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: List of properties
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PropertyListing'
 */
router.get("/", getProperties);
router.post("/", (req, res) => {
  res.status(200).json({ message: "Property created successfully" });
});

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Get specific property details
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Property details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PropertyListing'
 *       404:
 *         description: Property not found
 */
router.get("/:propertyId", getProperty);

export default router;
