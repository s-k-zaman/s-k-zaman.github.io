import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import classes from "./about.module.css";

function About() {
  return (
    <Showcase>
      <TitleWithBar title="About me">
        <div className="flex flex-row gap-11">
          <div className="basis-full flex flex-col justify-start gap-10">
            <p>
              Hello! My name is Sk Khairul zaman and I enjoy creating things
              that live on the internet. My interest in web development started
              back in 2012 when I decided to try editing custom Tumblr themes —
              turns out hacking together a custom relog button taught me a lot
              about HTML & CSS!
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
              consequuntur magnam neque veniam saepe animi laborum laudantium
              voluptate molestias fuga, minima, officiis ipsam repellendus et
              cupiditate? Iure.
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
