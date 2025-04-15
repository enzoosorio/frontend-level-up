import Link from "next/link";
import React from "react";

type Message = {
  id: number;
  text: string;
  link?: string;
  anchorText?: string;
};

export const InfiniteNavbarr = () => {
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
      <div className="carousel font-manrope">
      <div className="group">
        <div className="card">Dale una segunda oportunidad a las prendas que no usas</div>
        <div className="card">Seguimos con el mismo foco para cualquier venta: Ayudar a que renueves tu closet</div>
        <div className="card">ENVIO GRATIS SOLO POR HOY</div>
      </div>
      <div aria-hidden className="group">
        <div className="card">Dale una segunda oportunidad a las prendas que no usas</div>
        <div className="card">Seguimos con el mismo foco para cualquier venta: Ayudar a que renueves tu closet</div>
        <div className="card">ENVIO GRATIS SOLO POR HOY</div>
      </div>
    </div>
    );
  };