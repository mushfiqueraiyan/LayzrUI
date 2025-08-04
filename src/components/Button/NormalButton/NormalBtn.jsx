import React from "react";
import SimpleButton from "./SimpleButton";
import SocialLoginBtn from "./SocialLoginBtn";
import CartBtn from "./CartBtn";

const NormalBtn = () => {
  return (
    <div className="p-2 md:p-4 lg:p-6 space-y-4 h-screen overflow-auto   shadow px-10">
      <SimpleButton />
      <SocialLoginBtn />
      <CartBtn />
    </div>
  );
};

export default NormalBtn;
