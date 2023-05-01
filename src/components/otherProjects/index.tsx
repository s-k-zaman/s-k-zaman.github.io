import { Btn } from "../header";
import OtherProject from "../otherProject";
import Showcase from "../showcase";
import TitleSecondary from "../titleSecondary";

function OtherProjects() {
  return (
    <Showcase>
      <TitleSecondary title="Other Noteworthy Projects">
        <div id="other-projects" className="flex flex-col gap-[20px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[10px] [&>*]:flex-1">
            <OtherProject
              title="E-commerce Platform"
              tools={["Laravel", "Javascript", "MySQL", "sass"]}
              description="Developed high traffic custom e-commerce web application via
              Laravel framework, HTML5, CSS3/SASS, JavaScirpt/React,
              MySQL and Elastic Search."
            />
            <OtherProject
              title="HackerNews Scraper"
              description="A Python scraper for HackerNews that provides news with
            more than 100 votes including the links of the news source."
              tools={["python", "https", "BeautifulSoup"]}
            />
            <OtherProject
              title="XVG to CSV"
              description="A simple script to convert gromacs(used in molecular simulation) output file ie.XVG to csv files"
              tools={["python", "numpy", "argparse"]}
              github="https://github.com/s-k-zaman/xvg-to-csv"
            />
          </div>
          {/* Show button for more projects than 5 */}
          {/*           
          <div className="mx-auto mt-[20px]">
            <Btn name="Show More" primary />
          </div> */}
        </div>
      </TitleSecondary>
    </Showcase>
  );
}

export default OtherProjects;
