import React from "react";
import SimpleButton from "./SimpleButton";
import SocialLoginBtn from "./SocialLoginBtn";

const NormalBtn = () => {
  return (
    <div className="p-6 space-y-4   shadow px-10">
      <SimpleButton />
      <SocialLoginBtn />
    </div>
  );
};

export default NormalBtn;
