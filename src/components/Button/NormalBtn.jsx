import React from "react";

import SocialLoginBtn from "./SocialLoginBtn";
import SimpleButton from "./SimpleButton";

const NormalBtn = () => {
  return (
    <div className="p-6 space-y-4   shadow px-10">
      <SimpleButton />
      <SocialLoginBtn />
    </div>
  );
};

export default NormalBtn;
