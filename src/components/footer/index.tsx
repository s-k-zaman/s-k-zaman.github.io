import React from "react";
import { Btn } from "../header";
import Showcase from "../showcase";

function Footer() {
  return (
    <Showcase>
      <div className="flex flex-col gap-[20px] pb-[110px]">
        <p className="mx-auto w-fit text-primary-text">What's Next</p>
        <h2 className="w-fit mx-auto text-secondary-text text-4xl font-semibold">
          Get In Touch
        </h2>
        <p className="text-secondary-dark text-xl text-center">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="flex items-center justify-center mt-[10px]">
          <Btn primary name="Say Hello!" />
        </div>
      </div>
    </Showcase>
  );
}

export default Footer;
