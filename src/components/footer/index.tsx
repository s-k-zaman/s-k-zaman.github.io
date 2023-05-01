import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Btn } from "../header";
import Showcase from "../showcase";
import WriteMessage from "../writeMessage";

function Footer() {
  return (
    <Showcase id="get-in-touch">
      <div className="flex flex-col gap-[20px] pb-16 lg:pb-[110px]">
        <p className="mx-auto w-fit text-primary-text">What's Next</p>
        <h2 className="w-fit mx-auto text-secondary-text text-4xl font-semibold">
          Get In Touch
        </h2>
        <p className="text-secondary-dark text-xl text-center">
          I am currently{" "}
          <span className="font-medium text-white/80 ">
            looking for new opportunities
          </span>{" "}
          and open to exciting career prospects. If you have a position that
          aligns with my skill set and experience,{" "}
          <span className="font-montserrat underline">
            I would love to hear from you
          </span>
          . Feel free to reach out to me with any questions or opportunities
          that you think would be a good fit.
        </p>
        <div className="flex flex-col items-center justify-center mt-[10px]">
          <p className="text-primary-text font-minecraft">Let's Talk</p>
          <WriteMessage />
        </div>
        <div className="text-secondary-text flex xl:hidden items-center justify-center gap-[20px]">
          <a href="https://github.com/s-k-zaman" target={"_blank"}>
            <FiGithub className="hover:text-white cursor-pointer" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/s-k-zaman" target={"_blank"}>
            <FiLinkedin className="hover:text-white cursor-pointer" size={30} />
          </a>
          <a href="https://twitter.com/s_k_zaman" target={"_blank"}>
            <FiTwitter className="hover:text-white cursor-pointer" size={30} />
          </a>
        </div>
        <div className="flex xl:hidden items-center justify-center gap-[20px]flex">
          <a
            href="mailto:sudo.coder.zaman@gmail.com"
            target="_blank"
            className="text-primary-bar text-xl font-minecraft font-medium tracking-[0.1em] cursor-pointer hover:text-white"
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
