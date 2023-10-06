import React from "react";
import { useState } from "react";
import { Input } from "@/shadcn/components/ui/input";

import { Button } from "@/shadcn/components/ui/button";
import { Link } from "react-router-dom";
import { useSignup } from "@/hooks/useSignup";
import { Loader2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function SignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, fullname);
  };

  return (
    <div className="flex gap-20 h-screen w-full px-20 py-20">
      <div className="w-1/2 bg-muted rounded-xl p-12">
        <Logo></Logo>
        <h2 className="text-4xl mt-24 leading-[40px] font-medium">
          Lorem, ipsum dolor sit amet
        </h2>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit ametasdasda sadada
        </p>
      </div>
      <div className=" flex flex-col justify-center w-1/2">
        <div>
          <div>
            <h1 className="text-3xl font-medium">Cadastre-se Agora</h1>
            <p className="mt-3 text-muted-foreground font-normal text-lg ">
              Crie sua conta agora mesmo
            </p>
            <form className="mt-10" onSubmit={handleSubmit}>
              <p className="text-muted-foreground mb-2.5 text-sm">
                Nome Completo
              </p>
              <Input
                type="text"
                autoComplete="name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
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
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="mt-10 w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Criar minha conta
              </Button>
            </form>
            <div className=" mt-12 flex justify-center gap-2 text-lg">
              <p>Já tem uma conta?</p>
              <Link to="/login" className="text-primary">
                Entre agora!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
