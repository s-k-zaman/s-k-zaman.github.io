import { Btn } from "../header";
import OtherProject from "../otherProject";
import Showcase from "../showcase";
import TitleSecondary from "../titleSecondary";

function OtherProjects() {
  return (
    <Showcase>
      <TitleSecondary title="Other Noteworthy Projects">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between gap-[10px] [&>*]:flex-1">
            <OtherProject
              tools={["Next.js", "Tailwind CSS", "Firebase"]}
              github="this"
              website="link"
            />
            <OtherProject
              tools={["Next.js", "Tailwind CSS", "Firebase"]}
              github="this"
              website="link"
            />
            <OtherProject
              tools={["Next.js", "Tailwind CSS", "Firebase"]}
              github="this"
              website="link"
            />
          </div>
          <div className="flex justify-between gap-[10px] [&>*]:flex-[1/3]">
            <OtherProject
              tools={["Next.js", "Tailwind CSS", "Firebase"]}
              github="this"
              website="link"
            />
            <OtherProject
              tools={["Next.js", "Tailwind CSS", "Firebase"]}
              website="link"
              github="this"
            />
          </div>
          <div className="mx-auto mt-[20px]">
            <Btn name="Show More" primary />
          </div>
        </div>
      </TitleSecondary>
    </Showcase>
  );
}

export default OtherProjects;
