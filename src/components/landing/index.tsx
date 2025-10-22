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
        <p className="text-4xl font-montserrat font-medium text-[#9DA4B0]">
          Full-stack developer passionate about automation and clean
          engineering.
        </p>
        {/* FIX: hovering doing layout shift */}
        <Btn asLink href="#featured" name="Check out my works" primary />
      </div>
    </Showcase>
  );
}

export default index;
