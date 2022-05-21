import { Category } from "../category/category";

export interface AuctionProduct {
  id: Number,
  name: String,
  caracteristic: String,
  image1: String,
  image2: String,
  image3: String,
  video: String,
  category: Category,
  price: Number,
  stock: Number,
  updateAt: any,
  createAt: any,
}
