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
          `hidden lg:block basis-[55%] shrink-0 ${props.imgClass} bg-cover bg-center`
        )}
      >
        {props.website ? (
          <a href={props.website} target="_blank">
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
          <div className="w-fit font-medium text-x text-secondary-dark lg:text-primary-text">
            Featured Project
          </div>
          <h2 className="w-fit font-medium text-xl text-primary-text">
            {props.title}
          </h2>
        </div>
        <div className="z-10 text-secondary-text text-sm w-full lg:w-[140%] bg-none lg:bg-secondary-bg shadow-deep rounded-[5px] px-4 py-5 transition-all duration-500">
          {props.popText}
        </div>
        <div
          className={`z-10 font-normal text-sm flex flex-row flex-wrap px-4 lg:p-0 ${
            props.reversed
              ? "items-start [&>*]:mr-auto"
              : "items-end [&>*]:ml-auto"
          }  gap-[8px] px-1`}
        >
          {props.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="z-10 pb-4 pl-4 lg:p-0 items-start lg:items-end w-full flex gap-[10px] text-secondary-text">
          {props.github && (
            <a href={props.github} target="_blank" className="hover:text-white">
              <FiGithub />
            </a>
          )}
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              className="hover:text-primary-text"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeatureProject;
export { HL };
