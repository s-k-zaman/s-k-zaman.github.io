import classNames from "classnames";
import classes from "./featureProject.module.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function HL({ children }: { children: JSX.Element | string }) {
  return <span className="text-primary-text">{children}</span>;
}

type Props = {
  reversed?: boolean;
  title: string;
  imgClass: string;
  popText: string | JSX.Element;
  tools: string[];
  github?: string;
  website?: string;
};

function FeatureProject(props: Props) {
  // IMPORTANT: some animations are dependent on module.css file, BE CAREFUL BEFORE EDITING.
  return (
    <div
      className={`flex ${
        props.reversed ? "flex-row-reverse" : "flex-row"
      }  items-stretch p-0 ${classes.featured} ${
        props.reversed ? classes.featured_reversed : classes.featured_normal
      }`}
    >
      <div
        className={classNames(
          `hidden lg:block basis-[50%] shrink-0 ${props.imgClass} bg-cover bg-center rounded-[5px] aspect-video`,
        )}
      >
        {props.website || props.github ? (
          <a href={props.website || props.github} target="_blank">
            <div className="w-full h-full bg-primary-text/25 backdrop-brightness-75 transition-all"></div>
          </a>
        ) : (
          <div className="w-full h-full bg-primary-text/25 backdrop-brightness-75 transition-all" />
        )}
      </div>
      <div
        className={`relative basis-full font-poppins flex flex-col ${
          props.reversed ? "items-start" : "items-end"
        } gap-[20px] ${props.imgClass} lg:bg-none bg-cover bg-center`}
      >
        <div className="absolute lg:hidden w-full h-full bg-[#020133]/75 backdrop-brightness-50 transition-all" />
        <div
          className={`mt-0 flex flex-col w-full px-4 pt-4 lg:p-0 z-10 ${
            props.reversed ? "items-start" : "items-start lg:items-end"
          }`}
        >
          {/* <div className="w-fit font-medium text-x text-secondary-dark lg:text-primary-text"> */}
          {/*   Featured Project */}
          {/* </div> */}
          <h2 className="w-fit font-medium text-3xl text-primary-text">
            {props.title}
          </h2>
        </div>
        <div className="z-10 text-secondary-text text-normal w-full lg:w-[140%] bg-none lg:bg-secondary-bg shadow-deep rounded-[5px] px-4 py-5 transition-all duration-500">
          {props.popText}
        </div>
        <div
          className={`w-full lg:w-[140%] z-10 font-normal text-sm flex flex-row flex-wrap px-4 ${
            props.reversed
              ? "items-start [&>*]:mr-auto lg:pl-4 lg:pr-0 lg:-translate-x-[33%]"
              : "items-end [&>*]:ml-auto lg:pr-4 lg:pl-0 lg:translate-x-[33%]"
          }  gap-[8px] px-1`}
        >
          {props.tools.map((tool, idx) => {
            if (idx + 1 === props.tools.length) {
              return <code key={`tool-${idx}`}>{tool}</code>;
            }
            return <code key={`tool-${idx}`}>{tool},</code>;
          })}
        </div>
        <div
          className={`z-10 pb-4 pl-4 lg:p-0 flex flex-row gap-[10px] ${
            props.reversed
              ? "items-start lg:[&>*]:mr-auto"
              : "items-end lg:[&>*]:ml-auto"
          } w-full text-secondary-text`}
        >
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              className="hover:text-white flex gap-1 items-center"
            >
              <FiGithub /> Github
            </a>
          )}
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              className="hover:text-primary-text flex gap-1 items-center"
            >
              <FiExternalLink /> website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
export { HL };
