import { Request, Response } from "express";
import {
  getPropertyListing,
  getAllPropertyListings,
} from "../services/property.service";

export const getProperty = (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;
    const propertyListing = getPropertyListing(propertyId);

    if (!propertyListing) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(propertyListing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching property information" });
  }
};

export const getProperties = (req: Request, res: Response) => {
  try {
    const propertyListings = getAllPropertyListings();
    res.json(propertyListings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching properties" });
  }
};
