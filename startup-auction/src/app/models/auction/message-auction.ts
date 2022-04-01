import { Customer } from "../customer/customer";
import { Auction } from "./Auction";

export interface MessageAuction {
  id: Number,
  customer: Customer,
  auction: Auction,
  price: Number
}
