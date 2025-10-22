import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Btn } from "../header";
import Showcase from "../showcase";
import WriteMessage from "../writeMessage";

function Footer() {
  return (
    <Showcase id="get-in-touch">
      <div className="flex flex-col gap-[20px] pb-16 lg:pb-[110px]">
        <p className="mx-auto w-fit text-primary-text">Connect</p>
        <h2 className="w-fit mx-auto text-secondary-text text-2xl lg:text-4xl font-semibold">
          Let’s Build Something Great
        </h2>
        <p className="text-secondary-dark text-lg lg:text-xl text-center">
          I’m{" "}
          <span className="font-medium text-white/80 ">
            open to new opportunities
          </span>{" "}
          where I can build, automate, or improve real-world systems. Whether
          it’s a full-stack product, a developer tool, or a workflow automation
          — I’d love to contribute my skills and grow with a team that values
          clean engineering and practical problem-solving.
          <br />
          <br />
          Feel free to reach out if you think I’d be a good fit, or just to say
          hi.
        </p>
        <div className="flex flex-col items-center justify-center mt-[10px]">
          <p className="text-primary-text font-minecraft">Let's Talk</p>
          <WriteMessage />
        </div>
        <div className="text-secondary-text flex xl:hidden items-center justify-center gap-[20px]">
          <a href="https://github.com/s-k-zaman" target={"_blank"}>
            <FiGithub className="hover:text-white cursor-pointer" size={25} />
          </a>
          <a href="https://www.linkedin.com/in/s-k-zaman" target={"_blank"}>
            <FiLinkedin className="hover:text-white cursor-pointer" size={25} />
          </a>
          <a href="https://twitter.com/s_k_zaman" target={"_blank"}>
            <FiTwitter className="hover:text-white cursor-pointer" size={25} />
          </a>
        </div>
        <div className="flex xl:hidden items-center justify-center gap-[20px]flex">
          <a
            href="mailto:sudo.coder.zaman@gmail.com"
            target="_blank"
            className="text-primary-bar text-base font-minecraft font-medium tracking-[0.1em] cursor-pointer hover:text-white"
          >
            sudo.coder.zaman
            <span className="text-primary-bar/70">@</span>
            gmail.com
          </a>
        </div>
      </div>
    </Showcase>
  );
}

export default Footer;
