import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type props = {
  tools: string[];
  github?: string;
  website?: string;
  description: string;
  title: string;
};

function OtherProject({ tools, github, website, title, description }: props) {
  return (
    <div className="px-[13px] py-[14px] flex flex-col  gap-[23px] font-poppins bg-secondary-bg rounded-[5px] hover:shadow-glow transition-shadow">
      <div className="flex justify-between">
        <div className="text-primary-text/70 hover:text-primary-text">
          {website && (
            <a href={website} target="_blank">
              <FiExternalLink />
            </a>
          )}
        </div>
        <div className="text-secondary-dark flex gap-[10px] hover:text-white transition-all active:scale-100">
          {github && (
            <a href={github} target="_blank">
              <FiGithub />
            </a>
          )}
        </div>
      </div>
      <div className="h-full flex flex-col justify-between gap-[47px]">
        <div>
          <h3 className="text-xl font-medium mb-[10px]">{title}</h3>
          <p className="text-[14px] text-secondary-dark font-light text-justify">
            {description}
          </p>
        </div>
        <div className="flex items-start flex-wrap [&>*]:mr-auto gap-[8px] text-primary-text font-light">
          {tools.map((tool) => (
            <span>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherProject;
