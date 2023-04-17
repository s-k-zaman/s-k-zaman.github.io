import { Btn } from "../header";
import Showcase from "../showcase";

function index() {
  return (
    <Showcase lowMargin>
      <div className="flex flex-col items-start gap-5">
        <p className="text-primary-text font-minecraft text-sm">
          Hello there!, I'm
        </p>
        <h1 className="text-5xl font-medium text-[#BBC7E2]">Khairul Zaman.</h1>
        <h1 className="text-4xl font-montserrat font-light text-[#9DA4B0]">
          I <span className="font-medium">build</span> things for the{" "}
          <span className="font-normal">web</span>
        </h1>
        <p className="text-slate-300">
          Are you looking for a skilled and passionate web developer who can
          bring innovative solutions to your team
          <span className="text-xl">?</span>
        </p>
        <p className="text-right text-slate-300 font-montserrat">
          I excel at identifying issues and providing efficient and innovative
          solutions to meet project goals. I am confident that my expertise and
          experience can help your organization grow and achieve its goals.
        </p>
        <Btn asLink href="#get-in-touch" name="Contact Me" focus />
      </div>
    </Showcase>
  );
}

export default index;
