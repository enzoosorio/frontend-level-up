import { ProductOtherProducts } from "@/src/types/Product/individualProduct";
import { productsBlank } from "./reducedDataProducts";

export const getOtherProducts = async () => {
    const products =  productsBlank
    
    const groupedByThree = products.reduce((acc, product, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(product);
        return acc;
    }, [] as ProductOtherProducts[][]);

    return groupedByThree;

}


