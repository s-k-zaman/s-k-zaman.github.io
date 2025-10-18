import React from "react";
import { FiMail } from "react-icons/fi";

function RightMail() {
  return (
    <div className="fixed bottom-0 right-[-55px] text-secondary-text hidden xl:flex flex-col items-center gap-[31px]">
      <div className="rotate-90 -translate-y-[110px]">
        <a
          href="mailto:sudo.coder.zaman@gmail.com"
          target="_blank"
          className="text-primary-bar font-minecraft font-medium tracking-[0.1em] cursor-pointer hover:text-white flex items-center gap-2"
        >
          <FiMail />
          <div>
            sudo.coder.zaman
            <span className="text-primary-bar/70 text-lg">@</span>
            gmail.com
          </div>
        </a>
      </div>
      <div className="border-[2px] border-primary-bar h-[190px] w-0"></div>
    </div>
  );
}

export default RightMail;
