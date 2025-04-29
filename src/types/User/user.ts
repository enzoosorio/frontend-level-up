import { PaymentConfig } from "../Payment/payment";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    imageSrc: string;
}

export interface Buyer extends User {
    address: string;
    phone: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    shippingAddress: string;
    shippingPhone: string;
    shippingCity: string;    
}

export interface Seller extends Buyer {
    businessName: string;
    payment : PaymentConfig;
    positiveCommentsPercent : number;
    publishedProductsCount: number;

}

export type SellerProfileToBeShown = Pick<Seller, "id" | "name" | "imageSrc" | "businessName" | "positiveCommentsPercent" | "publishedProductsCount">;
