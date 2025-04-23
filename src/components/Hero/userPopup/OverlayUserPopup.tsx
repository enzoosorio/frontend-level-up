import React from 'react'

interface OverlayUserPopupProps {
    children: React.ReactNode;
    active : boolean;
}

export const OverlayUserPopup = ({children, active} : OverlayUserPopupProps) => {
  return (
    <div className={`fixed inset-0 w-screen bg-black/35 flex items-center justify-center ${active ? "h-[100dvh] opacity-100 z-30" : "h-[0dvh] opacity-0 -z-30"} transition-all`}>
        {children}
    </div>
  )
}
