import Link from "next/link";
import React from "react";

type Message = {
  id: number;
  text: string;
  link?: string;
  anchorText?: string;
};

export const InfiniteNavbar = () => {
    const messages: Message[] = [
      {
        id: 1,
        text: "Dale una segunda oportunidad a las prendas que no usas | ",
        link: "/products",
        anchorText: "COMPRA AHORA",
      },
      {
        id: 2,
        text: "Seguimos con el mismo foco para cualquier venta: Ayudar a que renueves tu closet",
      },
      {
        id: 3,
        text: "ENVIO GRATIS SOLO POR HOY 😁",
      },
    ];
  
    return (
      // falta el atributo containerInfinite
      <div className="flex flex-row items-center ">
        {/* Duplicamos los mensajes para el efecto continuo */}
        <div className="flex flex-row items-center justify-around gap-20 min-w-full  ">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center p-4 bg-amber-200"
            >
              <p className="text-base font-manrope">{message.text}</p>
              {message.link && (
                <a href={message.link} className="ml-1 text-lg inline-block">
                  {message.anchorText}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-around gap-20 min-w-full bg-amber-300 ">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center p-4 bg-amber-200"
            >
              <p className="text-base">{message.text}</p>
              {message.link && (
                <Link href={message.link} className="ml-1 text-lg inline-block font-semibold">
                  {message.anchorText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };