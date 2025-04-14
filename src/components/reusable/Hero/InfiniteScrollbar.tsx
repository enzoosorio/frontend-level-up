import React from "react";

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTMLDale una segunda oportunidad a las prendas que no usas | COMPRA AHORA', 'Seguimos con el mismo foco para cualquier venta: Ayudar a que renueves tu closet', 'ENVIO GRATIS SOLO POR HOY 😁'];
const DURATION = 15000;
const ROWS = 1;
const TAGS_PER_ROW = 3;
const random = (min : number, max : number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr : any[]) => arr.sort(() => Math.random() - 0.5);

interface InfiniteLoopSliderProps {
    children: React.ReactNode;
    duration: number;
    reverse?: boolean | number;
}
const InfiniteLoopSlider = ({children, duration, reverse = false} : InfiniteLoopSliderProps) => {
    
    const style: React.CSSProperties & { [key: string]: any } = {
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      };
    
    return (
      <div className='loop-slider' style={style}>
        <div className='inner'>
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text  }: { text: string }) => (
    <div className='tag'><span>#</span> {text}</div>
  );

  export const InfiniteNavbar = () => {
    return(
        <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
    )
  }

