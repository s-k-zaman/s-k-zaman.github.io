import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import FeatureProjectNew, { HL } from "../featureProject";
import FeatureProject from "../featureProject/index-old";

function IHaveBuilt() {
  return (
    <Showcase largeContent>
      <TitleWithBar title="Some Things I’ve Built" />
      <div id="featured" className="flex flex-col gap-[94px] tb3">
        <FeatureProjectNew
          title="ReadEase"
          images={[
            {
              original: "/featured/readease.png",
              alt: "readease",
              height: 890,
              width: 1894,
            },
            {
              original: "/featured/todox.png",
              alt: "todox",
              height: 1080,
              width: 1920,
              caption: "TODOs app",
            },
          ]}
          description={
            <>
              An articles reading website where user can see <HL>Tree View</HL>{" "}
              of the articles. NextJs was used to create the front end,{" "}
              <HL>SSR, caching</HL> etc. while Node, Express were used to create
              back-end. Build an <HL>inbuilt WYSIWYG</HL> editor using{" "}
              <HL>slate-react</HL>.
            </>
          }
          tools={["NextJs", "react", "Ts", "Node", "MongoDB", "JWT"]}
          website="https://www.readease.in"
        />
        <FeatureProject
          title="Stealthwriter Humnaizer"
          reversed
          imgClass=""
          popText={
            <>
              A Python semi-automation tool that humanizes text in Word (.docx)
              documents using the StealthWriter.ai web service via Selenium
              browser automation. Helpful for content writers, academic writers
              processing large and multiple files in a day.
            </>
          }
          tools={["python", "automation", "selenium"]}
          github="https://github.com/s-k-zaman/stealthwriter-humanizer.git"
        />
        <FeatureProject
          title="Zara Products Scraper"
          imgClass=""
          popText={
            <>
              A Python script that scrapes Zara's website to download
              high-quality product images. It uses Selenium for browser
              automation to navigate product pages and extract images, handling
              multiple color variants.
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "large-scale data",
            "headless",
            "images",
            "multi-colored",
          ]}
          github="https://github.com/s-k-zaman/zara-data-scraper#"
        />
        <FeatureProject
          title="Casemine Scraper"
          imgClass=""
          reversed
          popText={
            <>
              A Python-based web scraper for Casemine, a platform providing
              access to judgments and orders from high courts across India. This
              tool automates the process of downloading legal documents,
              handling CAPTCHAs, and managing large-scale data extraction very
              fast(parallel download).
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "large-scale data",
            "headless",
            "json",
          ]}
          github="https://github.com/s-k-zaman/casemine-scraper#"
        />
        <FeatureProject
          title="Product recommend glens"
          imgClass=""
          popText={
            <>
              A serverless product recommendation system that processes uploaded
              images, detects clothing items, and finds similar products using
              Google Lens and web scraping.
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "headless",
            "json",
            "S3",
            "SQS",
            "eCommerce",
          ]}
          github="https://github.com/s-k-zaman/glens-product-recommend#"
        />
        <FeatureProject
          title="Twitter(X) Feed Scraper Bot"
          reversed
          imgClass=""
          popText={
            <>
              A Python-based web scraper for extracting posts from Twitter (X)
              feeds using Selenium and Flask. This tool automates the process of
              logging into Twitter and scraping recent posts from the home
              timeline.
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "bot",
            "headless",
            "Flask",
            "API",
            "notification",
          ]}
          github="https://github.com/s-k-zaman/twitter-feed-scraper"
        />
        <FeatureProject
          title="X(Previously Twitter) Mention Reply Bot"
          imgClass=""
          popText={
            <>
              An automated Twitter bot that monitors mentions and replies to
              them using Selenium browser automation.
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "bot",
            "headless",
            "retry",
            "notification",
          ]}
          github="https://github.com/s-k-zaman/twitter-mention-reply"
        />
        <FeatureProject
          title="LinkedIn Mention Reply Bot"
          imgClass=""
          reversed
          popText={
            <>
              An automated bot that monitors LinkedIn mentions and replies to
              them intelligently, helping you maintain engagement on the
              platform.
            </>
          }
          tools={["python", "automation", "selenium", "bot", "headless"]}
          github="https://github.com/s-k-zaman/linkedin-mention-reply#"
        />
        <FeatureProject
          title="Research paper to XML"
          imgClass="bg-featured-research-xml"
          popText={
            <>
              A sophisticated Python-based tool for academic document
              processing, leveraging advanced NLP techniques with spaCy to
              extract structured metadata from PDF documents. It converts PDFs
              to TEI XML using Grobid, parses and enriches the data, and outputs
              in JATS or Elsevier XML formats for seamless integration into
              publishing workflows.
            </>
          }
          tools={["Grobid", "Spacy", "NL", "tei-XML", "pdfplumber", "lxml"]}
          github="https://github.com/s-k-zaman/research-paper-to-xml.git"
        />
        <FeatureProject
          title="Muni Landing Page"
          imgClass="bg-featured-muni-out"
          reversed
          popText={
            <>
              Landing page for a muni, The intelligent AI agent built to
              streamline municipal services.
            </>
          }
          tools={["NextJs", "tailwindCSS", "Figma Design"]}
          github="https://github.com/s-k-zaman/-muni_out-test.git"
          website="https://muni-out-test.vercel.app/"
        />
        <FeatureProject
          title="Hostel Meal Management"
          imgClass="bg-featured-hostel-meal"
          popText={
            <>
              A Python-based application for automating meal tracking,
              budgeting, and charge calculations for hostels. This system
              simplifies the management of boarder meals, guest meals, deposits,
              and expenses using Excel spreadsheets as the data backend.
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
              A simple CLI tool for managing Project wise TODO lists in Markdown
              format, with tmux integration. Edit TODOs, Add a tasks, Specify
              custom file.
            </>
          }
          tools={["Go", "tmux", "pflag", "linux", "CLI"]}
          github="https://github.com/s-k-zaman/todox#"
        />
        <FeatureProject
          title="ReadEase"
          imgClass="bg-featured-readease"
          images={[
            {
              original: "/featured/readease.png",
              alt: "readease",
              height: 890,
              width: 1894,
            },
            {
              original: "/featured/todox.png",
              alt: "todox",
              height: 1080,
              width: 1920,
              caption: "TODOs app",
            },
          ]}
          popText={
            <>
              An articles reading website where user can see <HL>Tree View</HL>{" "}
              of the articles. NextJs was used to create the front end,{" "}
              <HL>SSR, caching</HL> etc. while Node, Express were used to create
              back-end. Build an <HL>inbuilt WYSIWYG</HL> editor using{" "}
              <HL>slate-react</HL>.
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
              <HL>favourite List, give rating, add to watchlist</HL> etc. Axios
              was used for handling APIs and Redux for React State handling.
            </>
          }
          tools={["react", "tailwindCss", "axios", "redux", "firebase"]}
          github="https://github.com/s-k-zaman/netflix-clone"
          website="https://netfilx-clone-305ab.web.app/"
        />
      </div>
    </Showcase>
  );
}

export default IHaveBuilt;
