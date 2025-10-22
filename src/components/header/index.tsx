import { MouseEventHandler } from "react";
import { cn } from "../../lib/tailwindCss";
import { RESUME_NAME, RESUME_PATH } from "../../lib/downloadResources";

type Btn = {
  name: string;
  asLink?: boolean;
  href?: string;
  primary?: boolean;
  focus?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

function Btn({ name, asLink, href, primary, focus, onClick }: Btn) {
  return asLink ? (
    <a
      className={cn(
        `flex items-center font-minecraft ease-in-out transition-all`,
        primary
          ? "text-primary-text border-[1.5px] border-primary-text rounded-[10px] px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] hover:text-primary hover:bg-primary-text"
          : "shover:border-b-2 border-primary-text",
        !focus && primary && "border-b-2",
        focus
          ? "text-primary border-[1.5px] border-primary-text rounded-[10px] px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] bg-primary-text hover:scale-105 active:scale-95"
          : "hover:border-b-2 border-primary-text", //hover border causing layout shift issue...(fix: use cva)
      )}
      href={href || "#"}
    >
      {name}
    </a>
  ) : (
    <button
      className={`${
        primary
          ? "text-primary-text border-[1.5px] border-primary-text rounded-[10px] px-[20px] py-[10px] hover:text-primary hover:bg-primary-text"
          : "shover:border-b-2 border-primary-text" //hover border causing layout shift issue...(fix: use cva)
      } ${
        focus
          ? "text-primary border-[1.5px] border-primary-text rounded-[10px] px-[20px] py-[10px] bg-primary-text hover:scale-105 active:scale-95"
          : "shover:border-b-2 border-primary-text" //hover border causing layout shift issue...(fix: use cva)
      } font-minecraft ease-in-out transition-all`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

function Header() {
  const handleCVDownload = async () => {
    const fileName = RESUME_NAME;
    try {
      const response = await fetch(RESUME_PATH);
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = fileName;
      alink.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header
      className={cn(
        "bg-primary shadow z-20",
        "px-6 lg:px-10",
        "sticky top-0",
        "flex flex-row items-baseline justify-between py-5",
        "font-minecraft text-primary-text",
      )}
    >
      <div>
        <a className="hidden lg:block" href="/">
          S-K-ZAMAN
        </a>
      </div>
      <div className="flex gap-5">
        <Btn asLink href="#featured" name="Projects" />
        <Btn asLink href="#get-in-touch" name="Connect" />
        {/* <Btn asLink href="#about-me" name="About" /> */}
        <Btn name="Resume" primary onClick={handleCVDownload} />
      </div>
    </header>
  );
}

export default Header;
export { Btn };
