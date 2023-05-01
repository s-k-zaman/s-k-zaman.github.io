import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import FeatureProject, { HL } from "../featureProject";

function IHaveBuilt() {
  return (
    <Showcase>
      <TitleWithBar title="Some Things I’ve Built">
        <div id="featured" className="flex flex-col gap-[64px]">
          <FeatureProject
            title="ReadEase"
            imgClass="bg-featured-readease"
            popText={
              <>
                An articles reading website where user can see{" "}
                <HL>Tree View</HL> of the articles. NextJs was used to create
                the front end, <HL>SSR, caching</HL> etc. while Node, Express
                were used to create back-end. Build an <HL>inbuilt WYSIWYG</HL>{" "}
                editor using <HL>slate-react</HL>.
              </>
            }
            tools={["NextJs", "react", "Ts", "Node", "MongoDB", "JWT"]}
            website="https://www.readease.in"
          />
          <FeatureProject
            reversed
            title="Netflix clone"
            imgClass="bg-featured-netflix"
            website="text"
            popText={
              <>
                A working Netflix Clone using React and <HL>TMDB APIs</HL>.
                Functionality to add shows to{" "}
                <HL>favourite List, give rating, add to watchlist</HL> etc.
                Axios was used for handling APIs and Redux for React State
                handling.
              </>
            }
            tools={["react", "tailwindCss", "axios", "redux"]}
          />
        </div>
      </TitleWithBar>
    </Showcase>
  );
}

export default IHaveBuilt;
