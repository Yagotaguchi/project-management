import { Button } from "@/shadcn/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/shadcn/components/ui/input";

import { Link } from "react-router-dom";
import { useLogin } from "@/hooks/useLogin";
import { Loader2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function Login() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex gap-20 h-screen w-full px-20 py-20">
      <div className="w-1/2 bg-muted rounded-xl p-12">
        <Logo></Logo>
        <h2 className="text-4xl mt-24 leading-[40px] font-medium">
          Seja bem-vindo de volta! Pra cima.
        </h2>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit ametasdasda sadada
        </p>
      </div>
      <div className=" flex flex-col justify-center w-1/2">
        <div>
          <div>
            <h1 className="text-3xl font-medium">Entre na sua conta</h1>
            <p className="mt-3 text-muted-foreground font-normal text-lg ">
              Informe seus dados de acesso
            </p>
            <form className="mt-10" onSubmit={handleLogin}>
              <p className="mt-5 text-muted-foreground mb-2.5 text-sm">
                E-mail
              </p>
              <Input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className=" mt-5 text-muted-foreground mb-2.5 text-sm">
                Senha
              </p>
              <Input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="mt-10 w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Entrar na minha conta
              </Button>
            </form>
          </div>
          <div className=" mt-12 flex justify-center gap-2 text-lg">
            <p>Não tem uma conta?</p>
            <Link to="/signup" className="text-primary">
              Cadastre-se agora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
