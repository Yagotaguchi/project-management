import React from "react";
import LogoSvg from "../assets/logo.svg"

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src={LogoSvg} alt="logo" className="h-8"></img>
      <h2 className="text-xl font-medium tracking-wider mb-0.5">
        get<span className="text-primary">it</span>done.
      </h2>
    </div>
  );
}
