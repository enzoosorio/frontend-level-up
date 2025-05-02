import { ProductContentOnly } from "@/src/types/Product/individualProduct";
import { CustomSelect } from "../reusable/Products/CustomSelect";

type ProductContentProps = {
  product?: ProductContentOnly;
};

const product_blank: ProductContentOnly = {
  id: "1",
  name: "Producto no encontrado",
  description: "Descripción no encontrada",
  price: 19.99,
  oldPrice: 29.99,
  productStatus: "Semi nuevo",
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
    <section className="w-full mx-auto min-h-[500px] flex flex-col items-start justify-start gap-4  md:py-12">
      <h1 className="text-4xl font-bold mb-2">
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
                  <span className="font-normal">
                    &nbsp;productos publicados
                  </span>
                </p>
              </li>
              <li className="text-sm flex flex-col items-center justify-center gap-2">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
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
      {/* seccion vista del producto */}
      <div className="w-full flex flex-col items-start justify-start gap-2 px-6">
        <div className="w-full flex flex-row items-center justify-start gap-4 py-4">
          <h3 className="text-3xl font-bold font-manrope">
            S/{product?.price ?? product_blank.price}
          </h3>
          {product?.oldPrice ||
            (product_blank.oldPrice && (
              <small className="oldPrice relative text-xl text-gray-500 font-manrope">
                {product?.oldPrice ?? product_blank.oldPrice}
              </small>
            ))}
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
        <p className="text-lg font-manrope">Condición:</p>
        <p className="text-lg font-bold font-manrope">
          {product?.condition ?? product_blank.condition}
        </p>
      </div>
      {/* selectores de talla y color */}
      <div className="w-full flex flex-col items-start justify-start  mt-4">
        <CustomSelect
          selectOptions={[
            { option: "Selecciona una talla", value: "" },
            { option: "M", value: "M" },
            { option: "L", value: "L" },
            { option: "XL", value: "XL" },
          ]}
          label="Tallaje:"
        />
        <CustomSelect
          selectOptions={[
            { option: "Selecciona un color", value: "" },
            { option: "Azul", value: "Azul" },
            { option: "Rojo", value: "Rojo" },
            { option: "Verde", value: "Verde" },
          ]}
          label="Color:"
        />
      </div>
      {/* seccion de botones CTA */}
      <div className="w-full flex flex-col items-start justify-start gap-4 mt-8 my-4">
        <button className="w-full bg-primary-green cursor-pointer text-white font-manrope font-bold py-4 px-6 rounded-md">
          Cómpralo ahora
        </button>
        <button className="w-full border cursor-pointer  border-primary-green text-black font-manrope font-bold py-4 px-6 rounded-md">
          Añadir al carrito
        </button>
      </div>
      {/* seccion de pagos aceptados */}
      <div className="flex flex-col items-center justify-center gap-4 bg-white px-4 rounded-lg w-full py-6">
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 ">
        <svg
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="visa-color_large">
            <rect id="card_bg" width="48" height="32" rx="4" fill="#2A2A6C" />
            <path
              id="visa-logo"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.3502 17.67C30.3563 16.1452 29.0988 15.4867 28.1229 14.9756C27.5051 14.6521 27.0002 14.3876 27.0002 14C27.0002 13.67 27.3202 13.32 28.0002 13.23C28.8095 13.1499 29.6253 13.2916 30.3602 13.64L30.7802 11.64C30.0638 11.3713 29.3053 11.2325 28.5402 11.23C26.1802 11.23 24.5402 12.49 24.5402 14.29C24.5402 15.62 25.7302 16.36 26.6302 16.8C27.5302 17.24 27.8802 17.55 27.8702 17.95C27.8702 18.57 27.1302 18.85 26.4402 18.86C25.589 18.8709 24.7492 18.6644 24.0002 18.26L23.5702 20.26C24.4176 20.5908 25.3204 20.7571 26.2302 20.75C28.7402 20.75 30.3902 19.51 30.4002 17.59L30.3502 17.67ZM23.8602 11.39L21.8602 20.64H19.4602L21.4602 11.39H23.8602ZM33.9202 17.39L35.1802 13.92L35.9102 17.39H33.9202ZM38.8102 20.67H36.5902L36.3002 19.29H33.2902L32.8002 20.67H30.2802L33.8702 12.1C34.0357 11.6922 34.4301 11.424 34.8702 11.42H36.8702L38.8102 20.67ZM16.6102 20.61L20.4902 11.36H17.8902L15.4002 17.65L14.4002 12.3C14.3116 11.7563 13.841 11.3577 13.2902 11.36H9.22016L9.16016 11.63C9.97649 11.7897 10.7694 12.0518 11.5202 12.41C11.8399 12.5603 12.0566 12.8682 12.0902 13.22L14.0002 20.61H16.6102Z"
              fill="white"
            />
          </g>
        </svg>
        <svg
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="mastercard-color_large">
            <rect id="card_bg" width="48" height="32" rx="4" fill="#F2F0EC" />
            <g id="mastercard">
              <g id="Group" opacity="0.01">
                <rect
                  id="Rectangle"
                  x="4.65039"
                  y="3.19995"
                  width="38.71"
                  height="25.6"
                  fill="white"
                />
              </g>
              <rect
                id="Rectangle_2"
                x="18.9004"
                y="7.65991"
                width="10.21"
                height="16.68"
                fill="#F26122"
              />
              <path
                id="Path"
                d="M20.0007 16.0001C19.9839 12.7536 21.4584 9.67911 24.0007 7.66006C19.651 4.23935 13.4027 4.73608 9.64802 8.80106C5.89337 12.866 5.89337 19.1341 9.64802 23.1991C13.4027 27.264 19.651 27.7608 24.0007 24.3401C21.4584 22.321 19.9839 19.2465 20.0007 16.0001Z"
                fill="#EA1D25"
              />
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.1404 22.2299V22.5699H40.0804V22.2299H39.9404V22.1599H40.2904V22.2299H40.1404ZM40.8204 22.1599V22.5699H40.7504V22.2599L40.6404 22.5299H40.5604L40.4404 22.2599V22.5699H40.3704V22.1599H40.4704L40.6004 22.4499L40.7204 22.1599H40.8204Z"
                fill="#F69E1E"
              />
              <path
                id="Path_2"
                d="M41.16 16C41.1574 20.0593 38.8389 23.7614 35.1879 25.5358C31.5369 27.3102 27.1935 26.846 24 24.34C28.6001 20.7179 29.3967 14.0543 25.78 9.44999C25.2616 8.78326 24.6638 8.18216 24 7.65999C27.1935 5.15398 31.5369 4.68973 35.1879 6.46416C38.8389 8.23859 41.1574 11.9406 41.16 16Z"
                fill="#F69E1E"
              />
            </g>
          </g>
        </svg>
        <svg
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="paypal-color-large">
            <rect id="card_bg" width="48" height="32" rx="4" fill="white" />
            <path
              id="card_bg-2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0H44C46.2091 0 48 1.79086 48 4V28C48 30.2091 46.2091 32 44 32H4C1.79086 32 0 30.2091 0 28V4C0 1.79086 1.79086 0 4 0ZM46 4C46 2.89543 45.1046 2 44 2H4C2.89543 2 2 2.89543 2 4V28C2 29.1046 2.89543 30 4 30H44C45.1046 30 46 29.1046 46 28V4Z"
              fill="#CCCCCB"
            />
            <g id="paypal">
              <path
                id="Path"
                d="M20.3405 25.3199L20.6905 23.1199H19.9105H16.2305L18.7905 6.85993C18.7973 6.80955 18.8222 6.76336 18.8605 6.72993C18.9007 6.69887 18.9497 6.68136 19.0005 6.67993H25.2105C27.2805 6.67993 28.7005 7.10993 29.4505 7.95993C29.7823 8.31646 30.0135 8.75473 30.1205 9.22993C30.2371 9.80744 30.2371 10.4024 30.1205 10.9799V11.4799L30.4705 11.6799C30.7369 11.8127 30.9774 11.9922 31.1805 12.2099C31.4861 12.5789 31.6835 13.0255 31.7505 13.4999C31.8254 14.1201 31.7984 14.7484 31.6705 15.3599C31.5386 16.1027 31.278 16.8168 30.9005 17.4699C30.5954 17.9936 30.183 18.4468 29.6905 18.7999C29.1947 19.138 28.6428 19.3852 28.0605 19.5299C27.4068 19.6948 26.7346 19.7755 26.0605 19.7699H25.5705C25.227 19.77 24.8945 19.8903 24.6305 20.1099C24.3651 20.3335 24.1908 20.6466 24.1405 20.9899V21.1899L23.5305 25.0699V25.2199C23.5377 25.2461 23.5377 25.2738 23.5305 25.2999H23.4705L20.3405 25.3199Z"
                fill="#253D80"
              />
              <path
                id="Path_2"
                d="M30.8002 11.0801L30.7402 11.4501C29.9202 15.6501 27.1102 17.1101 23.5302 17.1101H21.7102C21.2724 17.1095 20.8991 17.4276 20.8302 17.8601L19.9002 23.7801L19.6302 25.4601C19.61 25.5946 19.649 25.7313 19.7372 25.8349C19.8254 25.9384 19.9542 25.9987 20.0902 26.0001H23.3302C23.7144 25.9997 24.0411 25.7197 24.1002 25.3401V25.1801L24.7102 21.3101V21.1001C24.7648 20.722 25.0883 20.4411 25.4702 20.4401H26.0002C29.1302 20.4401 31.5902 19.1701 32.3002 15.4401C32.6844 14.1652 32.4474 12.784 31.6602 11.7101C31.4105 11.4539 31.1198 11.241 30.8002 11.0801V11.0801Z"
                fill="#189BD7"
              />
              <path
                id="Path_3"
                d="M29.9404 10.7401L29.5604 10.6401L29.1404 10.5601C28.6108 10.4809 28.0758 10.4441 27.5404 10.4501H22.6604C22.5464 10.447 22.4333 10.471 22.3304 10.5201C22.0985 10.6286 21.9369 10.8467 21.9004 11.1001L20.9004 17.6701V17.8601C20.9693 17.4276 21.3425 17.1096 21.7804 17.1101H23.6004C27.1804 17.1101 29.9904 15.6501 30.8104 11.4501L30.8704 11.0801C30.655 10.9688 30.4309 10.8751 30.2004 10.8001L29.9404 10.7401Z"
                fill="#242E65"
              />
              <path
                id="Path_4"
                d="M21.9004 11.1C21.9369 10.8466 22.0985 10.6286 22.3304 10.52C22.4333 10.4709 22.5464 10.4469 22.6604 10.45H27.5404C28.0758 10.444 28.6108 10.4808 29.1404 10.56L29.5604 10.64L29.9404 10.74L30.1304 10.8C30.3609 10.8751 30.585 10.9687 30.8004 11.08C31.1254 9.83063 30.8275 8.50118 30.0004 7.51C29.0004 6.45 27.3604 6 25.2204 6H19.0004C18.5625 5.99947 18.1893 6.31756 18.1204 6.75L15.5304 23.16C15.5072 23.3148 15.5523 23.472 15.654 23.5909C15.7556 23.7098 15.9039 23.7788 16.0604 23.78H19.9004L20.9004 17.67L21.9004 11.1Z"
                fill="#253D80"
              />
            </g>
          </g>
        </svg>
      </div>
      <p className="text-lg font-manrope">
        Pagos aceptados
      </p>
      </div>

    </section>
  );
};
