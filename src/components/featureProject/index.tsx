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
          `basis-[55%] shrink-0 ${props.imgClass} bg-cover bg-center`
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
        className={`basis-full font-poppins flex flex-col ${
          props.reversed ? "items-start" : "items-end"
        } gap-[20px]`}
      >
        <div
          className={`mt-0 flex flex-col ${
            props.reversed ? "items-start" : "items-end"
          }`}
        >
          <div className="w-fit font-medium text-xs text-primary-text">
            Featured Project
          </div>
          <h2 className="w-fit font-medium text-xl">{props.title}</h2>
        </div>
        <div className="z-10 text-secondary-dark text-sm w-[140%] bg-secondary-bg shadow-deep rounded-[5px] px-4 py-5 transition-all duration-500">
          {props.popText}
        </div>
        <div
          className={`font-normal text-sm flex flex-row flex-wrap ${
            props.reversed
              ? "items-start [&>*]:mr-auto"
              : "items-end [&>*]:ml-auto"
          }  gap-[8px] px-1`}
        >
          {props.tools.map((tool) => (
            <span>{tool}</span>
          ))}
        </div>
        <div className="flex gap-[10px] text-secondary-text">
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
