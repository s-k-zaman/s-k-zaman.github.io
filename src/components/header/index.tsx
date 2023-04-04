import React from "react";

function Btn({ name, primary }: { name: string; primary?: boolean }) {
  return (
    <button
      className={`${
        primary
          ? "border-[1.5px] border-primary-text border-header-text rounded-[10px] px-[20px] py-[10px] hover:text-primary hover:bg-primary-text"
          : "hover:border-b-2 border-primary-text"
      } text-primary-text font-minecraft ease-in-out transition-all`}
    >
      {name}
    </button>
  );
}

function Header() {
  return (
    <div className="font-minecraft text-primary-text flex flex-row items-baseline justify-between py-5">
      <div>
        <a href="#">S-K-ZAMAN</a>
      </div>
      <div className="flex gap-5">
        <Btn name="About" />
        <Btn name="Experience" />
        <Btn name="Work" />
        <Btn name="Contact" />
        <Btn name="Resume" primary />
      </div>
    </div>
  );
}

export default Header;
export { Btn };
