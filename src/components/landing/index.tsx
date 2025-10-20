import { Btn } from "../header";
import Showcase from "../showcase";

function index() {
  return (
    <Showcase lowMargin largeContent>
      <div className="flex flex-col items-start gap-5">
        <p className="text-primary-text font-minecraft text-sm">
          Hello there!, I'm
        </p>
        <h1 className="text-5xl font-medium text-[#BBC7E2]">Khairul Zaman.</h1>
        <h1 className="text-4xl font-montserrat font-medium text-[#9DA4B0]">
          I <span className="font-medium">build</span> things for the{" "}
          <span className="font-normal">web</span> and{" "}
          <span className="font-normal">linux</span>
        </h1>
        <p className="text-slate-300">
          Are you looking for a skilled and passionate developer who can bring
          innovative solutions to your team
          <span className="text-xl">?</span>
        </p>
        <p className="text-right text-slate-300 font-montserrat">
          I excel at identifying issues and providing efficient and innovative
          solutions to meet project goals. I am confident that my expertise and
          experience can help your organization grow and achieve its goals.
        </p>
        <Btn asLink href="#featured" name="Check out my works" primary />
      </div>
    </Showcase>
  );
}

export default index;
