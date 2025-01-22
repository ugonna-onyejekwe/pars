"use client";

import LoginForm from "@/components/loginform";
import SignUpform from "@/components/signInForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="flex bg-gray-100 ">
      {/* form */}
      <div className="flex-1 px-5 md:px-20  pt-10 relative pb-10">
        <Link
          to={"/"}
          className="font-extrabold text-primary-600 uppercase text-[15px]  "
        >
          Pars
        </Link>

        {/* login form */}
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <SignUpform setLogin={setLogin} />
        )}
      </div>

      {/* image */}

      <div className="flex-1 max-md:hidden block bg-loginBg h-screen bg-no-repeat bg-cover bg-center relative before:absolute before:size-full before:z-[-1] z-10 before:bg-gray-900/60   ">
        <div className="z-20 px-[20px] absolute bottom-20 left-0">
          <h1 className="font-semibold text-[18px] text-white/70">Hello,</h1>
          <h1 className="font-extrabold text-[25px] text-white">
            Welcome back!
          </h1>

          <p className="text-[15px] text-white/70 max-w-[500px]">
            Ready to rekindle the magic? Log in to stay updated on the latest
            news, catch up on missed conversations, and rediscover the joy of
            sharing. Your online home awaits.
          </p>

          <Button asChild className="mt-5" onClick={() => setLogin(!login)}>
            <Link to="#">{login ? "Creat an account" : "Login"}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
