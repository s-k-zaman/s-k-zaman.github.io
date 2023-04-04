import React from "react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function LeftSocial() {
  return (
    <div className="fixed bottom-0 left-[50px] text-secondary-text flex flex-col items-center gap-[20px]">
      <FiGithub className="hover:text-white cursor-pointer" size={20} />
      <FiLinkedin className="hover:text-white cursor-pointer" size={20} />
      <FiTwitter className="hover:text-white cursor-pointer" size={20} />
      <div className="border-[2px] border-primary-bar h-[190px] w-0"></div>
    </div>
  );
}

export default LeftSocial;
