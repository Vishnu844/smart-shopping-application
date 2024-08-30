import React from "react";
import errorImg from "../../public/images/error.svg";
import Image from "next/image";

const Error = () => {
  return (
    <div className="flex justify-center">
      <Image placeholder="empty" src={errorImg} alt="error" priority={true} />
    </div>
  );
};

export default Error;
