import { Bid } from "../types";

// Mock data for bids (assuming userId 'user1' is our current user)
const bids: Bid[] = [
  {
    id: "1",
    propertyId: "1",
    userId: "user1",
    amount: 245000,
    status: "outbid",
    timestamp: new Date("2023-05-01"),
  },
  {
    id: "2",
    propertyId: "1",
    userId: "user1",
    amount: 250000,
    status: "winning",
    timestamp: new Date("2023-05-02"),
  },
  {
    id: "3",
    propertyId: "2",
    userId: "user1",
    amount: 322000,
    status: "outbid",
    timestamp: new Date("2023-05-03"),
  },
  {
    id: "4",
    propertyId: "3",
    userId: "user1",
    amount: 180000,
    status: "winning",
    timestamp: new Date("2023-05-04"),
  },
  {
    id: "5",
    propertyId: "3",
    userId: "user1",
    amount: 170000,
    status: "active",
    timestamp: new Date("2023-05-05"),
  },
];

export const getBidsByUserId = (userId: string): Bid[] =>
  bids.filter((bid) => bid.userId === userId);
