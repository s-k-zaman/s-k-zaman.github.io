import { ghRepoName } from "../../lib/github";
import { cn } from "../../lib/tailwindCss";
import { Dialog } from "../../ui/dialog";
import { Disclaimer } from "../FeatureProject";
import { RequestAccess } from "./RequestAccess";

type Props = {
  title: React.ReactNode;
  github?: string;
  privateGithub?: boolean;
  privateGithubAccessText?: string;
  disclaimer?: React.ReactNode;
  children: React.ReactNode;
  noTabIndex?: boolean;
};

function AccessGithub({
  title,
  github,
  privateGithub = false,
  privateGithubAccessText = "",
  disclaimer,
  children,
  noTabIndex = false,
}: Props) {

  if (!github) return null;

  if (!privateGithub) {
    return (
      <a href={github} target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Dialog
      noOutsideClose
      trigger={noTabIndex ? children : <button>{children}</button>}
      title={<>This is private repository</>}
      description={<>To see the project assets you need access in GitHub.</>}
      className={cn()}
      size="2xl"
      name={`gh-${ghRepoName(github)}`}
      tabIndex={noTabIndex ? -1 : 0}
    >
      <div>
        <div className="flex flex-col gap-[8px]">
          <div className="my-3 flex flex-col gap-1">
            <p className="text-primary-text">{title}</p>
            <p className="text-sm">
              Link: <em>{github}</em>
            </p>
          </div>
          <Disclaimer disclaimer={disclaimer} />
          {privateGithubAccessText && (
            <p className="text-lg font-medium text-center mt-2">
              {privateGithubAccessText}
            </p>
          )}
        </div>
        <RequestAccess
          github={github}
          privateGithubAccessText={privateGithubAccessText}
        />
      </div>
    </Dialog>
  );
}

export default AccessGithub;
