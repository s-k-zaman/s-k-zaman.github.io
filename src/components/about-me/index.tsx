import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import classes from "./about.module.css";

function About() {
  return (
    <Showcase id="about-me">
      <TitleWithBar title="About me">
        <div className="flex flex-row gap-11">
          <div className="basis-full flex flex-col justify-start gap-10">
            <p className="text-justify">
              I take pride in my detail-oriented approach to writing clean and
              maintainable code that adheres to best practices and standards. As
              an individual dedicated to self-improvement, I constantly strive
              to improve my skills and keep up with the latest technologies and
              trends.
              <br />I enjoy collaborating with others to achieve high-quality
              outcomes and recognized for my effective communication and
              positive approach.
            </p>
            <p className="text-slate-300/90">
              Here are a few technologies I’ve been working with recently:
              <div className="font-montserrat mt-1 flex flex-wrap [&>*]:w-[40%] items-center justify-center">
                <li>NextJs</li>
                <li>Typescript</li>
                <li>ReactJs</li>
                <li>tailwindCSS</li>
              </div>
            </p>
          </div>
          <div className={`relative w-full h-full ${classes.image_container}`}>
            <div
              className={`absolute rounded-[20px] border-2 left-[15px] top-[15px] border-primary-text ${classes.image_border}`}
            ></div>
            <div
              className={`absolute rounded-[20px] left-0 top-0 ${classes.image}`}
            ></div>
          </div>
        </div>
      </TitleWithBar>
    </Showcase>
  );
}

export default About;
