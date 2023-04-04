import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import FeatureProject, { HL } from "../featureProject";

function IHaveBuilt() {
  return (
    <Showcase>
      <TitleWithBar title="Some Things I’ve Built">
        <div className="flex flex-col gap-[64px]">
          <FeatureProject
            title="Halcyon Theme"
            imgClass="bg-fearured-test"
            popText={
              <>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on{" "}
                <HL>
                  Visual Studio Marketplace, Package Control, Atom Package
                  Manager
                </HL>
                , and <HL>npm</HL>.
              </>
            }
            tools={["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"]}
            github="this"
            website="that"
          />
          <FeatureProject
            reversed
            title="Halcyon Theme"
            imgClass="bg-fearured-test"
            popText={
              <>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on{" "}
                <HL>
                  Visual Studio Marketplace, Package Control, Atom Package
                  Manager
                </HL>
                , and <HL>npm</HL>.
              </>
            }
            tools={["test1", "test2"]}
            github="this"
            website="that"
          />
        </div>
      </TitleWithBar>
    </Showcase>
  );
}

export default IHaveBuilt;
