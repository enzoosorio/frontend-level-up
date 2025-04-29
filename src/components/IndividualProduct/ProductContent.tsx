import { ProductContentOnly } from "@/src/types/Product/individualProduct";
import React from "react";

type ProductContentProps = {
  product?: ProductContentOnly;
};

const product_blank: ProductContentOnly = {
  id: "1",
  name: "Producto no encontrado",
  description: "Descripción no encontrada",
  price: 19.99,
  oldPrice: 29.99,
  condition: "Condición no encontrada",
  category: "Categoría no encontrada",
  brand: "Marca no encontrada",
  rating: 0,
  sellerId: "1",
  seller: {
    id: "1",
    name: "Vendedor no encontrado",
    imageSrc: "/Products/images/default-user.webp",
    businessName: "Vendedor no encontrado",
    positiveCommentsPercent: 0,
    publishedProductsCount: 0,
  },
};
export const ProductContent = ({ product }: ProductContentProps) => {
  return (
    <section className="w-full mx-auto min-h-[500px] flex flex-col items-start justify-start gap-4 py-12">
      <h1 className="text-4xl font-bold">
        {product?.name ?? product_blank.name}
      </h1>
      {/* seccion vista del vendedor */}
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <svg height="1" viewBox="0 0 1440 1" fill="none" className="w-full">
          <line
            y1="0.5"
            x2="1440.02"
            y2="0.5"
            stroke="url(#paint0_linear_290_686)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_290_686"
              x1="0"
              y1="1.5"
              x2="1440.02"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.264" stopColor="#666666" />
              <stop offset="0.704" stopColor="#525252" stopOpacity="0.819513" />
              <stop offset="1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex items-center justify-center gap-4 py-2 px-6">
          <img
            src={product?.seller.imageSrc ?? product_blank.seller.imageSrc}
            alt="product"
            className="w-20 h-20 rounded-full border-2 border-primary-gray p-2"
          />
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="text-lg font-amiko font-semibold">
              {product?.seller.businessName ??
                product_blank.seller.businessName}
            </p>
            <ul className="flex flex-row items-center justify-center gap-4 font-amiko">
              <li className="text-sm flex flex-col items-center justify-center">
                <span className="text-2xl">
                {product?.seller.positiveCommentsPercent ??
                  product_blank.seller.positiveCommentsPercent}
                </span>
                <p className="text-sm text-center">Comentarios positivos</p>
              </li>
              <li className="text-sm flex flex-col items-center justify-center gap-2">
                <svg width="24" height="22" viewBox="0 0 16 12" fill="none">
                  <path
                    d="M15.2702 8.65558C15.2527 8.64395 15.2074 8.6339 15.1887 8.62551L8.38649 5.61887V4.64199C9.68036 4.48639 10.3192 3.63278 10.3192 2.53527C10.3192 1.32002 9.46397 0.40332 8.31177 0.40332C7.10203 0.40332 6.08696 1.40056 6.08696 2.58121C6.08696 2.78434 6.25518 2.94931 6.45831 2.94931C6.51879 2.94931 6.57508 2.93121 6.62521 2.90564C6.74424 2.84448 6.82898 2.72416 6.82898 2.58121C6.82898 1.81328 7.52831 1.13952 8.32469 1.13952C9.06897 1.13952 9.60949 1.72662 9.60949 2.53527C9.60949 3.33098 8.96641 3.93103 8.08983 3.93103C7.8867 3.93103 7.73952 4.096 7.73952 4.29913V5.01852V5.74081C7.73952 5.74792 7.72528 5.75377 7.72596 5.76087L1.20457 8.84322C0.242913 9.18967 -0.0863883 9.97793 0.0187447 10.5796C0.126787 11.1984 0.651437 11.5969 1.33105 11.5969H14.2836C15.0881 11.5969 15.7191 11.1806 15.9304 10.4826C16.139 9.79486 15.8673 9.05348 15.2702 8.65558ZM15.2259 10.314C15.1091 10.7006 14.7656 10.95 14.2839 10.95H1.33105C1.00208 10.95 0.786303 10.7675 0.739081 10.4978C0.685399 10.1898 0.883352 9.75251 1.47755 9.53643L8.227 6.33701L14.8856 9.30191C15.1984 9.5254 15.3381 9.94333 15.2259 10.314Z"
                    fill="black"
                  />
                </svg>

                <p className="text-sm text-center font-bold">
                  {product?.seller.publishedProductsCount ??
                    product_blank.seller.publishedProductsCount}
                  <span className="font-normal">&nbsp;productos publicados</span>
                </p>
              </li>
              <li className="text-sm flex flex-col items-center justify-center gap-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_285_426)">
                    <path
                      d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_285_426">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-sm text-center">Contactar con el vendedor</p>
              </li>
            </ul>
          </div>
        </div>
        <svg  height="1" viewBox="0 0 1440 1" fill="none" className="w-full">
          <line
            y1="0.5"
            x2="1440.02"
            y2="0.5"
            stroke="url(#paint0_linear_290_686)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_290_686"
              x1="0"
              y1="1.5"
              x2="1440.02"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.264" stopColor="#666666" />
              <stop offset="0.704" stopColor="#525252" stopOpacity="0.819513" />
              <stop offset="1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* seccion vista del producto */}
      <div className="w-full flex flex-col items-start justify-start gap-2 px-6">
        <div className="w-full flex flex-row items-center justify-start gap-4 py-4">
          <h3 className="text-3xl font-bold font-manrope">
            S/{product?.price ?? product_blank.price}
          </h3>
            {product?.oldPrice || product_blank.oldPrice && (
              <small className="oldPrice relative text-xl text-gray-500 font-manrope">
              {product?.oldPrice ?? product_blank.oldPrice  }
            </small>
            )}
          </div>
          <svg height="1" viewBox="0 0 1440 1" fill="none" className="w-full">
          <line
            y1="0.5"
            x2="1440.02"
            y2="0.5"
            stroke="url(#paint0_linear_290_686)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_290_686"
              x1="0"
              y1="1.5"
              x2="1440.02"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.264" stopColor="#666666" />
              <stop offset="0.704" stopColor="#525252" stopOpacity="0.819513" />
              <stop offset="1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* condicion del producto */}
      <div className="w-full flex flex-row items-start justify-start gap-4 px-6 mt-4">
        <p className="text-lg font-manrope">
          Condición:
        </p>
        <p className="text-lg font-bold font-manrope">
          {product?.condition ?? product_blank.condition}
        </p>
      </div>
      {/* selectores de talla y color */}
      <div className="w-full flex flex-col items-start justify-start gap-4 px-6 mt-4">
            <select 
            name="size"
            id="size"
            className="w-full bg-amber-200">
              <option value="">Seleccione una Talla</option>
            </select>
            <select 
            name="color"
            id="color"
            className="w-full bg-amber-200">
              <option value="">Color</option>
            </select>
      </div>
    </section>
  );
};
