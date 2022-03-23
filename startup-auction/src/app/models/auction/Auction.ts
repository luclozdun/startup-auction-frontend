import { Category } from "../category/category";

export interface Auction {
  id: Number,
  avaible: Boolean,
  name: String,
  caracteristic: String,
  image1: String,
  image2: String,
  image3: String,
  video: String,
  category: Category,
  price: Number,
  lastDate: Date,
  createDate: Date,
  priceBase: Number
}
