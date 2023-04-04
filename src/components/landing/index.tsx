import { Btn } from "../header";
import Showcase from "../showcase";

function index() {
  return (
    <Showcase>
      <div className="flex flex-col items-start gap-5">
        <p className="text-primary-text font-minecraft text-sm">
          Hi, my name is
        </p>
        <h1 className="text-5xl font-medium text-[#BBC7E2]">
          Sk Khairul Zaman.
        </h1>
        <h1 className="text-4xl font-medium text-[#9DA4B0]">
          I build things for the web
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas
          id illum eligendi, esse veniam expedita, ex illo nesciunt eveniet
          dolorem recusandae alias necessitatibus voluptatibus quibusdam. Ipsa
          nam repellat dicta.
        </p>
        <Btn name="check out my works" primary />
      </div>
    </Showcase>
  );
}

export default index;
