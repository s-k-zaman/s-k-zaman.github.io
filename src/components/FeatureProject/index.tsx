import { RiErrorWarningLine } from "react-icons/ri";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ImageGallery, { Image } from "./ImageGallery";
import { cn } from "../../lib/tailwindCss";
import AccessGithub from "../AccessGithub";

export function HL({ children }: { children: JSX.Element | string }) {
  return <span className="text-primary-text">{children}</span>;
}

export function Disclaimer({ disclaimer }: { disclaimer?: React.ReactNode }) {
  if (!disclaimer) return null;
  return (
    <div
      className={cn(
        "bg-white/[12%] py-[5px] px-[7px]",
        "rounded-[18px] font-medium text-xs text-white/80",
        "flex gap-2",
      )}
    >
      <RiErrorWarningLine size={20} className="shrink-0 text-white/80" />
      <p className="mt-[2px]">{disclaimer}</p>
    </div>
  );
}

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  reversed?: boolean;
  images?: Image[];
  tools: string[];
  github?: string;
  privateGithub?: boolean;
  disclaimer?: React.ReactNode;
  privateGithubAccessText?: string;
  website?: string;
};

export default function FeatureProject({
  title,
  description,
  reversed,
  images,
  tools,
  github,
  disclaimer,
  privateGithub = false,
  privateGithubAccessText = "Why you want this project?",
  website,
}: Props) {
  const haveImage = Boolean(images && images.length);
  return (
    <div
      className={cn(
        "w-full",
        "bg-card",
        "flex flex-col-reverse gap-[10px] md:flex-row",
        reversed && "md:flex-row-reverse",
        "rounded-[20px] p-[5px]",
      )}
    >
      <div
        className={cn(
          haveImage && "shrink-0 basis-[40%] ",
          "overflow-hidden rounded-[20px]",
          "max-h-[363px]",
        )}
      >
        <ImageGallery images={images || []} />
      </div>
      <div
        className={cn(
          "px-[24px] py-[10px]",
          "flex flex-col justify-between",
          "relative basis-full font-poppins",
          "gap-[20px] lg:bg-none bg-cover bg-center",
        )}
      >
        {/* title and description */}
        <div className="flex flex-col gap-[5px]">
          {github ? (
            <AccessGithub
              title={title}
              github={github}
              privateGithub={privateGithub}
              privateGithubAccessText={privateGithubAccessText}
              disclaimer={disclaimer}
              noTabIndex
            >
              <h2 className="w-fit font-medium text-2xl xl:text-3xl text-primary-text hover:underline">
                {title}
              </h2>
            </AccessGithub>
          ) : (
            <h2 className="w-fit font-medium text:2xl xl:text-3xl text-primary-text">
              {title}
            </h2>
          )}
          <div className="text-white/80 text-[16px] font-light">
            {description}
          </div>
        </div>
        {/* tools */}
        <div>
          <div
            className={cn(
              "font-medium text-sm text-[#f6f6f6] font-code",
              "flex flex-row flex-wrap gap-[8px]",
            )}
          >
            {tools.map((tool, idx) => {
              if (idx + 1 === tools.length) {
                return <span key={`tool-${idx}`}>{tool}</span>;
              }
              return <span key={`tool-${idx}`}>{tool},</span>;
            })}
          </div>
        </div>
        {/* disclaimer and links */}
        <div className="flex flex-col gap-[12px]">
          <Disclaimer disclaimer={disclaimer} />
          {(website || github) && (
            <div
              className={cn(
                "flex flex-row gap-[32px]",
                "text-primary-text font-minecraft",
              )}
            >
              <AccessGithub
                title={title}
                github={github}
                privateGithub={privateGithub}
                privateGithubAccessText={privateGithubAccessText}
                disclaimer={disclaimer}
              >
                <div className="hover:underline flex gap-1 items-center rounded-[10px] bg-primary px-[14px] py-[8px]">
                  <FiGithub /> Github
                </div>
              </AccessGithub>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  className="hover:underline flex gap-1 items-center rounded-[10px] bg-primary px-[14px] py-[8px]"
                >
                  <FiExternalLink /> website
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
