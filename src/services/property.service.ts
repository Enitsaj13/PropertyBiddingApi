import { Property, PropertyListing } from "../types";
import { getPropertyById, getProperties } from "../models/property.model";

export const getPropertyListing = (
  propertyId: string
): PropertyListing | null => {
  const property = getPropertyById(propertyId);
  if (!property) return null;

  return {
    address: property.address,
    currentWinningBid: property.currentWinningBid,
    lastBidDifference: property.lastBidDifference,
    images: property.images,
  };
};

export const getAllPropertyListings = (): PropertyListing[] => {
  return getProperties().map((property) => ({
    address: property.address,
    currentWinningBid: property.currentWinningBid,
    lastBidDifference: property.lastBidDifference,
    images: property.images,
  }));
};

// post bid
export const postBid = (propertyId: string, amount: number): Property => {
  const property = getPropertyById(propertyId);
  if (!property) throw new Error("Property not found");

  // Here you would typically save the bid to a database
  // For this example, we'll just return the property with the new bid amount
  property.currentWinningBid = amount;

  return property;
};
