import { Property } from "../types";

// Mock data for properties
const properties: Property[] = [
  {
    id: "1",
    address: "123 Main St, Anytown, USA",
    currentWinningBid: 250000,
    lastBidDifference: 5000,
    images: [
      "https://example.com/property1-1.jpg",
      "https://example.com/property1-2.jpg",
    ],
  },
  {
    id: "2",
    address: "456 Oak Ave, Somewhere, USA",
    currentWinningBid: 320000,
    lastBidDifference: -2000,
    images: [
      "https://example.com/property2-1.jpg",
      "https://example.com/property2-2.jpg",
    ],
  },
  {
    id: "3",
    address: "789 Pine Rd, Nowhere, USA",
    currentWinningBid: 180000,
    lastBidDifference: 10000,
    images: [
      "https://example.com/property3-1.jpg",
      "https://example.com/property3-2.jpg",
    ],
  },
];

export const getProperties = (): Property[] => properties;

export const getPropertyById = (id: string): Property | undefined =>
  properties.find((property) => property.id === id);
