import React from "react";
import { cn } from "../../utils";

function Button({ children, className, pill, disabled, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        " px-6 py-2 text-sm font-medium text-white border-2 border-solid border-color: rgb(0 0 0); font-karla tracking-widest   ",
        className,
        pill && "rounded-full",
        disabled &&
          "cursor-not-allowed bg-slate-400 hover:bg-slate-400 active:bg-slate-400",
        danger && "bg-rose-500 hover:bg-rose-700 active:bg-rose-800",
      )}
    >
      {children}
    </button>
  );
}

export default Button;