import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import FeatureProject, { HL } from "../featureProject";

function IHaveBuilt() {
  return (
    <Showcase>
      <TitleWithBar title="Some Things I’ve Built">
        <div id="featured" className="flex flex-col gap-[94px]">
          <FeatureProject
            title="Hostel Meal Management"
            imgClass="bg-featured-hostel-meal"
            popText={
              <>
                A Python-based application for automating meal tracking,
                budgeting, and charge calculations for hostels. This system
                simplifies the management of boarder meals, guest meals,
                deposits, and expenses using Excel spreadsheets as the data
                backend.
              </>
            }
            tools={["Python", "pandas", "openpyxl", "pendulum", "fuzzy-search"]}
            github="https://github.com/s-k-zaman/auto-mealer-hostel"
          />
          <FeatureProject
            reversed
            title="todox"
            imgClass="bg-featured-todox"
            popText={
              <>
                A simple CLI tool for managing Project wise TODO lists in
                Markdown format, with tmux integration. Edit TODOs, Add a tasks,
                Specify custom file.
              </>
            }
            tools={["Go", "tmux", "pflag", "linux"]}
            github="https://github.com/s-k-zaman/todox#"
          />
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
            github="https://github.com/s-k-zaman/netflix-clone"
            website="https://netfilx-clone-305ab.web.app/"
          />
        </div>
      </TitleWithBar>
    </Showcase>
  );
}

export default IHaveBuilt;
