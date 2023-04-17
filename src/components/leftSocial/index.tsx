import React from "react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function LeftSocial() {
  return (
    <div className="fixed bottom-0 left-[50px] text-secondary-text flex flex-col items-center gap-[20px]">
      <a href="https://github.com/s-k-zaman" target={"_blank"}>
        <FiGithub className="hover:text-white cursor-pointer" size={20} />
      </a>
      <a href="https://www.linkedin.com/in/s-k-zaman" target={"_blank"}>
        <FiLinkedin className="hover:text-white cursor-pointer" size={20} />
      </a>
      <a
        href="https://twitter.com/s_k_zaman"
        target={"_blank"}
      >
        <FiTwitter className="hover:text-white cursor-pointer" size={20} />
      </a>
      <div className="border-[2px] border-primary-bar h-[190px] w-0"></div>
    </div>
  );
}

export default LeftSocial;
