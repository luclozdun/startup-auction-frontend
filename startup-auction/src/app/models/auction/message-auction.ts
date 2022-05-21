import { Customer } from "../customer/customer";
import { Auction } from "./auction";

export interface MessageAuction {
  id: Number,
  customer: Customer,
  auction: Auction,
  price: Number
}
