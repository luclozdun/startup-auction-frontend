import { Customer } from "../customer/customer";
import { AuctionProduct } from "./auction-product";

export interface Auction {
  id: Number,
  auctionProduct: AuctionProduct,
  price: Number,
  customer: Customer,
  active: Boolean,
  createdAt: any,
  finishedAt: any
}
