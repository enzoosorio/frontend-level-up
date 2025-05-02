import { SellerProfileToBeShown } from "../User/user";


type ProductStatus = "Nuevo" | "Semi nuevo" | "Usado" | "Muy usado" | "En mal estado";

// Base principal: Producto completo
export interface IndividualProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    condition: string;
    productStatus: ProductStatus;
    oldPrice?: number;
    mainImage: string;
    images: string[];
    category: string;
    brand: string;
    rating: number;
    sellerId: string;
    seller: SellerProfileToBeShown;
  }
  
  
  export type ProductImagesOnly = Pick<IndividualProduct, "images" | "mainImage">;
  
  
  export type ProductContentOnly = Omit<IndividualProduct, "images" | "mainImage">;
  
  export type ProductOtherProducts = Pick<IndividualProduct, "id" | "name" | "price" | "oldPrice" | "mainImage" | "productStatus">;