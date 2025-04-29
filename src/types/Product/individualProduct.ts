import { SellerProfileToBeShown } from "../User/user";

// Base principal: Producto completo
export interface IndividualProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    condition: string;
    oldPrice?: number;
    images: string[];
    category: string;
    brand: string;
    rating: number;
    sellerId: string;
    seller: SellerProfileToBeShown;
  }
  
  
  export type ProductImagesOnly = Pick<IndividualProduct, "images">;
  
  
  export type ProductContentOnly = Omit<IndividualProduct, "images">;
  