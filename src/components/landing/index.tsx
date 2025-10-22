import TextType from "../animatedComponents/TextType";
import { Btn } from "../header";
import Showcase from "../showcase";

function index() {
  return (
    <Showcase lowMargin largeContent>
      <div className="flex flex-col items-start gap-5">
        <TextType
          startOnVisible
          text={["Hello there!, I'm"]}
          textColors={["#8bece9"]}
          as={"p"}
          className="text-primary-text font-minecraft text-sm"
          typingSpeed={35}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="_"
        />
        <TextType
          startOnVisible
          text={["Khairul Zaman."]}
          initialDelay={800}
          hideCursorWhileTyping
          textColors={["#BBC7E2"]}
          as={"h1"}
          variableSpeed={{ min: 70, max: 100 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/70"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          // cursorCharacter="█"
          cursorCharacter="_"
        />
        <p className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-medium text-[#9DA4B0]">
          Full-stack developer passionate about automation and clean
          engineering.
        </p>
        <Btn asLink href="#featured" name="Check out my works" primary />
      </div>
    </Showcase>
  );
}

export default index;
