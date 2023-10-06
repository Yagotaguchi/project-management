import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/shadcn/components/mode-toggle";
import { Button } from "@/shadcn/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useLogout } from "@/hooks/useLogout";
import { BrowserRouter, Route } from "react-router-dom";
import Logo from "./Logo";



const options = [
  {
    route: "/",
    name: "Página inicial",
  },
  {
    route: "/projects",
    name: "Meus Projetos",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const { logout, error, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="h-screen w-[150px] bg-accent">
      <div className="p-5">
        <Logo></Logo>
      </div>
      {options.map((option) => (
        <div
          key={option.route}
          className="p-5"
          onClick={() => navigate(option.route)}
          role="button"
        >
          {" "}
          {option.name}
        </div>
      ))}
      <ModeToggle></ModeToggle>
      <Button variant="outline" onClick={handleLogout}>
        <ExitIcon className="w-4 h-4 mr-2" />
        Sair da conta
      </Button>
    </div>
  );
}
