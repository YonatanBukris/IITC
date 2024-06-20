import React from "react";
import { cn } from "../../utils";

function Card({svg, title, description, className, children}) {
  return (
    <div className={cn(
        "flex flex-col items-center gap-8",className,
    



    )}
    >

        {svg && <div className="flex justify-center ">{svg}</div>}
        {title && <h2 className="font-dm-serif text-2xl text-primary-700">{title}</h2>}
        {description && <p className="text-primary-700">{description}</p>}
        {children}
    </div>
  )
}

export default Card