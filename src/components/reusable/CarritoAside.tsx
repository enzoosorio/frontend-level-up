import { CardForCarrito } from "./CardForCarrito";
import Image from "next/image";

interface CarritoAsideProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const productosEnCarrito = [
  {
    id: 1,
    name: "Polera nike box logo",
    category: "Juegos",
    slug: "ps5",
    link: "/ps5",
    image: "Hero/images/polera-nike.webp",
    price: 10.23,
    quantity: 1,
  },
  {
    id: 2,
    name: "PS4",
    category: "Juegos",
    slug: "ps4",
    link: "/ps4",
    image: "Hero/images/polera-nike.webp",
    price: 10.23,
    quantity: 1,
  },
  {
    id: 3,
    name: "PS3",
    category: "Juegos",
    slug: "ps3",
    link: "/ps3",
    image: "Hero/images/polera-nike.webp",
    price: 10.23,
    quantity: 1,
  },
  {
    id: 4,
    name: "Xbox",
    category: "Juegos",
    slug: "xbox",
    link: "/xbox",
    image: "Hero/images/polera-nike.webp",
    price: 10.23,
    quantity: 1,
  },
];

export const CarritoAside = ({ active, setActive }: CarritoAsideProps) => {
  const total = productosEnCarrito.reduce(
    (acum, producto) => acum + producto.price * producto.quantity,
    0
  );

  return (
    <aside
      className={`fixed min-w-[300px] max-w-[450px] top-0 bottom-0 py-10 ${
        active ? "right-0 z-50" : "-right-[100%] z-0"
      } transition-all bg-bg-color flex flex-col gap-12  overflow-y-auto`}
    >
      <div className="flex items-center justify-center gap-6 px-4 py-5 rounded-lg bg-gray-secondary w-[80%] mx-auto">
        <svg
          width="32"
          height="32"
          viewBox="0 0 28 28"
          onClick={() => {
            setActive(!active);
            document.body.style.overflow = "auto";
          }}
          className="hover:fill-white fill-transparent transition-all cursor-pointer"
        >
          <rect
            x="0.75"
            y="0.75"
            width="26.5"
            height="26.5"
            rx="13.25"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M16 11.5L12.2643 13.6586C12.095 13.757 12 13.8901 12 14.0289C12 14.1676 12.095 14.3008 12.2643 14.3992L15.9 16.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </svg>
        <span className="text-xl font-manrope">Carrito</span>
        {/* ayuda para el estilizado */}
        <div className="w-1 h-2"></div>
      </div>
      <div className="flex flex-col items-center justify-start min-h-[300px] overflow-y-auto  ">
        {productosEnCarrito.map((producto) => (
          <CardForCarrito
            key={producto.id}
            {...producto}
            productName={producto.name}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-4 font-amiko w-full ">
        <div className="flex items-center justify-between w-full px-4">
          <p>Subtotal</p>
          <p>{total.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between w-full px-4">
          <p>Envío</p>
          <p>A Calcular</p>
        </div>
        <svg width="350" height="1" viewBox="0 0 400 1" fill="none">
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
        <div className="flex items-center justify-between w-full px-4 font-bold">
          <p>TOTAL</p>
          <p>{total.toFixed(2)}</p>
        </div>
        <div className="w-[85%] py-10 mt-4 mx-auto bg-gray-secondary rounded-lg flex flex-col items-center justify-center gap-12 ">
          <div className=" w-full flex gap-x-10 gap-y-8  flex-wrap items-center justify-center">
          <Image
            src="/Hero/images/carrito/efectivo.png"
            width={40}
            height={32}
            alt="efectivo"
          />
          {/* mastercard */}
          <svg
            width="49"
            height="32"
            viewBox="0 0 49 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="mastercard-color_large">
              <rect
                id="card_bg"
                x="0.5"
                width="48"
                height="32"
                rx="4"
                fill="#F2F0EC"
              />
              <g id="mastercard">
                <g id="Group" opacity="0.01">
                  <rect
                    id="Rectangle"
                    x="5.15039"
                    y="3.19995"
                    width="38.71"
                    height="25.6"
                    fill="white"
                  />
                </g>
                <rect
                  id="Rectangle_2"
                  x="19.4004"
                  y="7.65991"
                  width="10.21"
                  height="16.68"
                  fill="#F26122"
                />
                <path
                  id="Path"
                  d="M20.5007 16.0001C20.4839 12.7536 21.9584 9.67911 24.5007 7.66006C20.151 4.23935 13.9027 4.73608 10.148 8.80106C6.39337 12.866 6.39337 19.1341 10.148 23.1991C13.9027 27.264 20.151 27.7608 24.5007 24.3401C21.9584 22.321 20.4839 19.2465 20.5007 16.0001Z"
                  fill="#EA1D25"
                />
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.6404 22.2299V22.5699H40.5804V22.2299H40.4404V22.1599H40.7904V22.2299H40.6404ZM41.3204 22.1599V22.5699H41.2504V22.2599L41.1404 22.5299H41.0604L40.9404 22.2599V22.5699H40.8704V22.1599H40.9704L41.1004 22.4499L41.2204 22.1599H41.3204Z"
                  fill="#F69E1E"
                />
                <path
                  id="Path_2"
                  d="M41.66 16C41.6574 20.0593 39.3389 23.7614 35.6879 25.5358C32.0369 27.3102 27.6935 26.846 24.5 24.34C29.1001 20.7179 29.8967 14.0543 26.28 9.44999C25.7616 8.78326 25.1638 8.18216 24.5 7.65999C27.6935 5.15398 32.0369 4.68973 35.6879 6.46416C39.3389 8.23859 41.6574 11.9406 41.66 16Z"
                  fill="#F69E1E"
                />
              </g>
            </g>
          </svg>
          {/* visa */}
          <svg
            width="49"
            height="32"
            viewBox="0 0 49 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="visa-color_large">
              <rect
                id="card_bg"
                x="0.5"
                width="48"
                height="32"
                rx="4"
                fill="#2A2A6C"
              />
              <path
                id="visa-logo"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.8502 17.67C30.8563 16.1452 29.5988 15.4867 28.6229 14.9756C28.0051 14.6521 27.5002 14.3876 27.5002 14C27.5002 13.67 27.8202 13.32 28.5002 13.23C29.3095 13.1499 30.1253 13.2916 30.8602 13.64L31.2802 11.64C30.5638 11.3713 29.8053 11.2325 29.0402 11.23C26.6802 11.23 25.0402 12.49 25.0402 14.29C25.0402 15.62 26.2302 16.36 27.1302 16.8C28.0302 17.24 28.3802 17.55 28.3702 17.95C28.3702 18.57 27.6302 18.85 26.9402 18.86C26.089 18.8709 25.2492 18.6644 24.5002 18.26L24.0702 20.26C24.9176 20.5908 25.8204 20.7571 26.7302 20.75C29.2402 20.75 30.8902 19.51 30.9002 17.59L30.8502 17.67ZM24.3602 11.39L22.3602 20.64H19.9602L21.9602 11.39H24.3602ZM34.4202 17.39L35.6802 13.92L36.4102 17.39H34.4202ZM39.3102 20.67H37.0902L36.8002 19.29H33.7902L33.3002 20.67H30.7802L34.3702 12.1C34.5357 11.6922 34.9301 11.424 35.3702 11.42H37.3702L39.3102 20.67ZM17.1102 20.61L20.9902 11.36H18.3902L15.9002 17.65L14.9002 12.3C14.8116 11.7563 14.341 11.3577 13.7902 11.36H9.72016L9.66016 11.63C10.4765 11.7897 11.2694 12.0518 12.0202 12.41C12.3399 12.5603 12.5566 12.8682 12.5902 13.22L14.5002 20.61H17.1102Z"
                fill="white"
              />
            </g>
          </svg>
          {/* paypal */}
          <svg
            width="49"
            height="32"
            viewBox="0 0 49 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="paypal-color-large">
              <rect
                id="card_bg"
                x="0.5"
                width="48"
                height="32"
                rx="4"
                fill="white"
              />
              <path
                id="card_bg-2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 0H44.5C46.7091 0 48.5 1.79086 48.5 4V28C48.5 30.2091 46.7091 32 44.5 32H4.5C2.29086 32 0.5 30.2091 0.5 28V4C0.5 1.79086 2.29086 0 4.5 0ZM46.5 4C46.5 2.89543 45.6046 2 44.5 2H4.5C3.39543 2 2.5 2.89543 2.5 4V28C2.5 29.1046 3.39543 30 4.5 30H44.5C45.6046 30 46.5 29.1046 46.5 28V4Z"
                fill="#CCCCCB"
              />
              <g id="paypal">
                <path
                  id="Path"
                  d="M20.8405 25.3199L21.1905 23.1199H20.4105H16.7305L19.2905 6.85993C19.2973 6.80955 19.3222 6.76336 19.3605 6.72993C19.4007 6.69887 19.4497 6.68136 19.5005 6.67993H25.7105C27.7805 6.67993 29.2005 7.10993 29.9505 7.95993C30.2823 8.31646 30.5135 8.75473 30.6205 9.22993C30.7371 9.80744 30.7371 10.4024 30.6205 10.9799V11.4799L30.9705 11.6799C31.2369 11.8127 31.4774 11.9922 31.6805 12.2099C31.9861 12.5789 32.1835 13.0255 32.2505 13.4999C32.3254 14.1201 32.2984 14.7484 32.1705 15.3599C32.0386 16.1027 31.778 16.8168 31.4005 17.4699C31.0954 17.9936 30.683 18.4468 30.1905 18.7999C29.6947 19.138 29.1428 19.3852 28.5605 19.5299C27.9068 19.6948 27.2346 19.7755 26.5605 19.7699H26.0705C25.727 19.77 25.3945 19.8903 25.1305 20.1099C24.8651 20.3335 24.6908 20.6466 24.6405 20.9899V21.1899L24.0305 25.0699V25.2199C24.0377 25.2461 24.0377 25.2738 24.0305 25.2999H23.9705L20.8405 25.3199Z"
                  fill="#253D80"
                />
                <path
                  id="Path_2"
                  d="M31.3002 11.0801L31.2402 11.4501C30.4202 15.6501 27.6102 17.1101 24.0302 17.1101H22.2102C21.7724 17.1095 21.3991 17.4276 21.3302 17.8601L20.4002 23.7801L20.1302 25.4601C20.11 25.5946 20.149 25.7313 20.2372 25.8349C20.3254 25.9384 20.4542 25.9987 20.5902 26.0001H23.8302C24.2144 25.9997 24.5411 25.7197 24.6002 25.3401V25.1801L25.2102 21.3101V21.1001C25.2648 20.722 25.5883 20.4411 25.9702 20.4401H26.5002C29.6302 20.4401 32.0902 19.1701 32.8002 15.4401C33.1844 14.1652 32.9474 12.784 32.1602 11.7101C31.9105 11.4539 31.6198 11.241 31.3002 11.0801V11.0801Z"
                  fill="#189BD7"
                />
                <path
                  id="Path_3"
                  d="M30.4404 10.7401L30.0604 10.6401L29.6404 10.5601C29.1108 10.4809 28.5758 10.4441 28.0404 10.4501H23.1604C23.0464 10.447 22.9333 10.471 22.8304 10.5201C22.5985 10.6286 22.4369 10.8467 22.4004 11.1001L21.4004 17.6701V17.8601C21.4693 17.4276 21.8425 17.1096 22.2804 17.1101H24.1004C27.6804 17.1101 30.4904 15.6501 31.3104 11.4501L31.3704 11.0801C31.155 10.9688 30.9309 10.8751 30.7004 10.8001L30.4404 10.7401Z"
                  fill="#242E65"
                />
                <path
                  id="Path_4"
                  d="M22.4004 11.1C22.4369 10.8466 22.5985 10.6286 22.8304 10.52C22.9333 10.4709 23.0464 10.4469 23.1604 10.45H28.0404C28.5758 10.444 29.1108 10.4808 29.6404 10.56L30.0604 10.64L30.4404 10.74L30.6304 10.8C30.8609 10.8751 31.085 10.9687 31.3004 11.08C31.6254 9.83063 31.3275 8.50118 30.5004 7.51C29.5004 6.45 27.8604 6 25.7204 6H19.5004C19.0625 5.99947 18.6893 6.31756 18.6204 6.75L16.0304 23.16C16.0072 23.3148 16.0523 23.472 16.154 23.5909C16.2556 23.7098 16.4039 23.7788 16.5604 23.78H20.4004L21.4004 17.67L22.4004 11.1Z"
                  fill="#253D80"
                />
              </g>
            </g>
          </svg>
          <p className="font-manrope text-xl text-center">Pagos aceptados</p>
          </div>
        </div>
      </div>
      {/* <div className={`sticky left-0 right-0 
        -bottom-5 z-0 flex flex-col items-center justify-center 
        min-h-[40px] backdrop-blur-sm backdrop-saturate-150 
        backdrop-brightness-110 gap-4 font-amiko w-full`}>

      </div> */}
      <div className={`sticky left-0 right-0 -bottom-10 z-10
        flex flex-col items-center justify-center min-h-[140px] bg-primary-gray/50
        backdrop-blur-sm backdrop-saturate-150 backdrop-brightness-110
        gap-4 font-amiko w-full`}>
        <div className="flex items-center justify-between w-full px-4">
          <p>2 artículos</p>
          <p>S/ <span>{total}</span> </p>
        </div>
        <button className="bg-black text-white font-manrope text-xl px-4 py-2 rounded-lg w-[98%] mx-auto">
            Proceder al pago
        </button>
      </div>
    </aside>
  );
};
