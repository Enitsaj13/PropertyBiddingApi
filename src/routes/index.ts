import { Router } from "express";
import bidRoutes from "./bid.route";
import propertyRoutes from "./property.route";

const router = Router();

router.use("/bids", bidRoutes);
router.use("/properties", propertyRoutes);

export default router;
