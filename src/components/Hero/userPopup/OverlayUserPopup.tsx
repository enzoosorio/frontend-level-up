import React from 'react'

interface OverlayUserPopupProps {
    children: React.ReactNode;
    active : boolean;
    setActive : React.Dispatch<React.SetStateAction<boolean>>
}

export const OverlayUserPopup = ({children, active, setActive} : OverlayUserPopupProps) => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setActive(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div 
    onClick={handleClick}
    className={`fixed inset-0 w-screen bg-black/35 flex items-center justify-center ${active ? "h-[100dvh] opacity-100 z-[1000]" : "h-[0dvh] opacity-0 -z-30"} transition-all`}>
        {children}
    </div>
  )
}
