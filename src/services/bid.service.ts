import { Bid, BidSummary } from "../types";
import { getBidsByUserId } from "../models/bid.model";

export const getBidSummary = (userId: string): BidSummary => {
  const userBids = getBidsByUserId(userId);

  const outbidBids = userBids.filter((bid) => bid.status === "outbid");
  const activeBids = userBids.filter((bid) => bid.status === "active");
  const winningBids = userBids.filter((bid) => bid.status === "winning");

  return {
    your_bids: {
      outbid: outbidBids.length,
      active: activeBids.length,
      winning: winningBids.length,
    },
    your_bid_amounts: {
      outbid: outbidBids.reduce((sum, bid) => sum + bid.amount, 0),
      active: activeBids.reduce((sum, bid) => sum + bid.amount, 0),
      winning: winningBids.reduce((sum, bid) => sum + bid.amount, 0),
    },
  };
};
