import { cn } from "../../lib/tailwindCss";
import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import classes from "./about.module.css";
import RotatingAvatar from "./RotatingAvatar";

function About() {
  return (
    <Showcase id="about-me">
      <TitleWithBar title="About me" />
      <div
        className={cn(
          "flex flex-col-reverse gap-[115px] md:flex-row md:gap-11",
          classes.container,
        )}
      >
        <div
          className={cn(
            "basis-full flex flex-col justify-center gap-10",
            classes.text_container,
          )}
        >
          <p className="text-justify">
            I enjoy building things that just work — clean, efficient, and
            reliable.
            <br />
            From full-stack web apps to automation tools, I focus on simplicity
            and solid engineering.
          </p>
          <div className="text-slate-300/90">
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="font-montserrat mt-1 flex flex-wrap [&>*]:w-[40%] items-center justify-center">
              <li>Go</li>
              <li>AI/ML</li>
              <li>NextJs</li>
              <li>Python automation</li>
              {/* <li>NodeJs</li> */}
            </ul>
          </div>
        </div>
        <div className={`relative w-full h-full ${classes.image_container}`}>
          <div
            className={`absolute z-10 rounded-[20px] border-2 mx-auto right-0 left-[30px] md:left-[15px] top-[15px] border-primary-text ${classes.image_border}`}
          ></div>
          {/* INFO: using rotate dp */}
          {/* <div */}
          {/*   className={`absolute z-10 rounded-[20px] mx-auto right-0 left-0 top-0 ${classes.image} border`} */}
          {/* ></div> */}
          <div
            className={`absolute z-10 rounded-[20px] mx-auto right-0 left-0 top-0 w-fit`}
          >
            <RotatingAvatar />
          </div>
        </div>
      </div>
    </Showcase>
  );
}

export default About;
