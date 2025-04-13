export interface Bid {
  id: string;
  propertyId: string;
  userId: string;
  amount: number;
  status: "outbid" | "active" | "winning";
  timestamp: Date;
}

export interface Property {
  id: string;
  address: string;
  currentWinningBid: number;
  lastBidDifference: number;
  images: string[];
}

export interface BidSummary {
  your_bids: {
    outbid: number;
    active: number;
    winning: number;
  };
  your_bid_amounts: {
    outbid: number;
    active: number;
    winning: number;
  };
}

export interface PropertyListing {
  address: string;
  currentWinningBid: number;
  lastBidDifference: number;
  images: string[];
}
