import Showcase from "../showcase";
import TitleWithBar from "../titleWithBar";
import FeatureProject, { HL } from "../FeatureProject";

function IHaveBuilt() {
  return (
    <Showcase largeContent id="featured">
      <TitleWithBar title="Some projects I have worked on" />
      <div className="flex flex-col gap-[51px] sm:gap-[94px]">
        <FeatureProject
          reversed
          title="todox"
          images={[
            {
              original: "/featured/todox.png",
              alt: "todox: project todo management",
              width: 1920,
              height: 1080,
              caption: "todox: project TODOs management",
            },
            {
              original: "/featured/todox-2.png",
              alt: "todox: options",
              width: 1108,
              height: 666,
              caption: "todox: options",
            },
            {
              original: "/featured/todox-3.png",
              alt: "todox: installation & integration",
              width: 1196,
              height: 796,
              caption: "todox: installation & integration",
            },
          ]}
          description={
            <>
              A simple CLI tool for managing Project wise TODOs in Markdown
              format.
              <br />
              Works great with <HL>tmux</HL> integration and <HL>neovim</HL>.
              <br />
              Edit TODOs, Add a tasks, Specify custom tmux windows.
            </>
          }
          disclaimer={<>Works best on Linux — still in active development</>}
          tools={["Go", "tmux", "pflag", "linux", "CLI"]}
          github="https://github.com/s-k-zaman/todox#"
        />
        <FeatureProject
          title="Research paper to XML"
          images={[
            {
              original: "/featured/research-xml.png",
              alt: "research-xml",
              width: 1739,
              height: 1039,
              caption: "xml result",
            },
            {
              original: "/featured/research-xml-4.png",
              alt: "research-xml results",
              width: 1286,
              height: 681,
              caption: "extracted data in files",
            },
            {
              original: "/featured/research-xml-2.png",
              alt: "research-xml affiliations",
              width: 1920,
              height: 1080,
              caption: "extracted affiliations",
            },
            {
              original: "/featured/research-xml-3.png",
              alt: "research-xml references",
              width: 1920,
              height: 1080,
              caption: "extracted references",
            },
          ]}
          description={
            <>
              A sophisticated Python-based tool for academic document
              processing, leveraging advanced NLP techniques with spaCy to
              extract structured metadata from PDF documents.
              <br />
              It converts <HL>PDFs</HL> to TEI XML using Grobid, parses and
              enriches the data, and outputs in JATS or Elsevier XML formats for
              seamless integration into <HL>publishing</HL> workflows.
            </>
          }
          disclaimer={
            <>
              Can be used in automation pipeline. Human interaction is needed
              for data accuracy.
            </>
          }
          privateGithubAccessText="Not for SALE! used by company."
          tools={[
            "NL Processing",
            "OCR",
            "Grobid",
            "Spacy",
            "tei-XML",
            "pdfplumber",
            "lxml",
            "English language",
          ]}
          github="https://github.com/s-k-zaman/research-paper-to-xml.git"
          privateGithub
        />
        <FeatureProject
          title="Twitter(X) Feed Scraper Bot"
          reversed
          images={[
            {
              original: "/featured/x-feed-scraper.png",
              alt: "x-feed-scraper",
              width: 1322,
              height: 939,
              caption: "features",
            },
          ]}
          description={
            <>
              A Python-based web scraper for extracting posts from Twitter (X)
              feeds using Selenium and Flask.
              <br />
              This tool <HL>automates</HL> the process of logging into Twitter
              and scraping <HL>recent posts</HL> from the home <HL>timeline</HL>
              .
              <br />
            </>
          }
          disclaimer={
            <>Respect X's usage policy to avoid over-usage of the server.</>
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
          privateGithub
        />
        <FeatureProject
          title="Muni Landing Page"
          images={[
            {
              original: "/featured/muni-out.png",
              alt: "muni landing page",
              width: 1920,
              height: 1080,
              caption: "muni landing page",
            },
            {
              original: "/featured/muni-out-2.png",
              alt: "muni landing page 2",
              width: 1920,
              height: 1080,
              caption: "muni landing page",
            },
          ]}
          description={
            <>
              Landing page for a muni, The intelligent AI agent built to
              streamline municipal services.
              <br />
              NextJs demo project
            </>
          }
          tools={["NextJs", "tailwindCSS", "Figma Design"]}
          github="https://github.com/s-k-zaman/-muni_out-test.git"
          website="https://muni-out-test.vercel.app/"
        />
        <FeatureProject
          reversed
          title="Hostel Meal Management"
          images={[
            {
              original: "/featured/hostel-meal.png",
              alt: "hostel meal management",
              height: 722,
              width: 1300,
            },
          ]}
          description={
            <>
              A Python-based application for automating meal tracking,
              budgeting, and charge calculations for hostels.
              <br />
              This system simplifies the management of boarder meals, guest
              meals, deposits, and expenses using <HL>Excel spreadsheet</HL> as
              the data backend.
              <br />
              <HL>Auto-calculate</HL> meals for day and night time.
            </>
          }
          disclaimer={<>Used and works best for hostel messes in India</>}
          tools={["Python", "pandas", "openpyxl", "pendulum", "fuzzy-search"]}
          github="https://github.com/s-k-zaman/auto-mealer-hostel"
        />
        <FeatureProject
          title="Stealthwriter Humnaizer"
          images={[
            {
              original: "/featured/stealthwriter-humanizer.png",
              alt: "stealthwriter-humanizer",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          description={
            <>
              A Python semi-automation tool that humanizes text in Word (.docx)
              documents using the StealthWriter.ai web service via Selenium
              browser automation.
              <br />
              Helpful for <HL>content writers</HL>, <HL>academic writers</HL>{" "}
              processing large and
              <HL> multiple files </HL>in a day.
            </>
          }
          disclaimer={
            <>
              This project is for educational and personal use. Please respect
              StealthWriter.ai's terms of service.
            </>
          }
          tools={["python", "automation", "selenium"]}
          github="https://github.com/s-k-zaman/stealthwriter-humanizer.git"
          privateGithub
        />
        <FeatureProject
          title="Casemine Scraper"
          images={[
            {
              original: "/featured/casemine-scraper.png",
              alt: "casemine-scraper",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          reversed
          description={
            <>
              A Python-based web scraper for Casemine, a platform providing
              access to <HL>judgments</HL> and <HL>orders</HL> from{" "}
              <HL>high courts</HL> across India.
              <br />
              This tool automates the process of downloading legal documents,
              handling CAPTCHAs, and managing <HL>large-scale data</HL>{" "}
              extraction very fast(parallel download).
            </>
          }
          disclaimer={
            <>
              This project is for educational and research purposes only. Ensure
              compliance with Casemine's terms of service and applicable laws
              when using this scraper.
            </>
          }
          tools={[
            "python",
            "automation",
            "selenium",
            "Producer–Consumer Algo",
            "large-scale data",
            "headless",
            "json",
          ]}
          github="https://github.com/s-k-zaman/casemine-scraper#"
          privateGithub
        />
        <FeatureProject
          title="Zara Products Scraper"
          images={[
            {
              original: "/featured/zara-scraper.png",
              alt: "zara-data-scraper",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          description={
            <>
              A Python script that scrapes Zara's website to download
              high-quality product images. It uses Selenium for browser
              automation to navigate product pages and <HL>extract images</HL>,
              handling
              <HL> multiple color</HL> variants.
            </>
          }
          disclaimer={<>Use responsibly and respect Zara's terms of service</>}
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
          privateGithub
        />
        <FeatureProject
          reversed
          title="X(Previously Twitter) Mention Reply Bot"
          images={[
            {
              original: "/featured/twitter-mention-reply.png",
              alt: "twitter-mention-reply",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          description={
            <>
              An automated Twitter bot that <HL>monitors</HL> mentions and
              replies to them using Selenium browser automation.
            </>
          }
          disclaimer={
            <>
              Tested and works reliably with X (Twitter) web interface. <br />
              Best suited for personal or small-scale use.
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
          privateGithub
        />
        <FeatureProject
          title="LinkedIn Mention Reply Bot"
          images={[
            {
              original: "/featured/linkedin-mention-reply.png",
              alt: "linkedin-mention-reply",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          description={
            <>
              An automated bot that <HL>monitors</HL> LinkedIn mentions and
              replies to them intelligently, helping you maintain engagement on
              the platform.
            </>
          }
          disclaimer={
            <>
              Designed for controlled, personal use on LinkedIn (automation
              limits apply)
            </>
          }
          tools={["python", "automation", "selenium", "bot", "headless"]}
          github="https://github.com/s-k-zaman/linkedin-mention-reply"
          privateGithub
        />
        <FeatureProject
          reversed
          title="Product recommend glens"
          images={[
            {
              original: "/featured/glens-product-recommend.png",
              alt: "glens-product-recommend",
              width: 1311,
              height: 870,
              caption: "features",
            },
          ]}
          description={
            <>
              A serverless product recommendation system that processes uploaded
              images, detects clothing items, and finds similar products using
              Google Lens and web scraping.
            </>
          }
          disclaimer={
            <>
              Experimental project demonstrating image-to-product matching with
              Google Lens
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
          privateGithub
        />
        <FeatureProject
          title="ReadEase.in- Read articles"
          images={[
            {
              original: "/featured/readease.png",
              alt: "readease",
              width: 1894,
              height: 890,
              caption: "Landing page",
            },
            {
              original: "/featured/readease-2.png",
              alt: "readease serarch",
              width: 1920,
              height: 1080,
              caption: "serarching articles",
            },
            {
              original: "/featured/readease-4.png",
              alt: "readease admin",
              width: 1920,
              height: 1080,
              caption: "admin side for control",
            },
            {
              original: "/featured/readease-3.png",
              alt: "readease article",
              width: 1920,
              height: 1080,
              caption: "Read an articles with treeview",
            },
            {
              original: "/featured/readease-5.png",
              alt: "readease admin subject",
              width: 1920,
              height: 857,
              caption: "admin side: subjects list",
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
          disclaimer={
            <>
              Full-stack startup project (client, admin, and server) — website
              currently offline
            </>
          }
          tools={["NextJs", "react", "Ts", "Node", "MongoDB", "JWT"]}
          // website="https://www.readease.in"
          github="https://github.com/s-k-zaman/readease-client.git"
          privateGithubAccessText="Why you need codes? and which repo(client, admin, server)?"
          privateGithub
        />
        <FeatureProject
          reversed
          title="Netflix clone"
          images={[
            {
              original: "/featured/netflix-clone-2.png",
              alt: "netflix clone 2",
              width: 1920,
              height: 1080,
              caption: "sign in: firebase",
            },
            {
              original: "/featured/netflix-clone.png",
              alt: "netflix clone",
              width: 1920,
              height: 1080,
              caption: "landing page on sign in",
            },
            {
              original:
                "https://images.unsplash.com/photo-1637363990764-de84fd247b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              alt: "readease",
              height: 780,
              width: 1170,
            },
          ]}
          description={
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
        <FeatureProject
          title="XVG to CSV"
          images={[
            {
              original: "/featured/xvg-csv.png",
              alt: "xvg-to-csv",
              width: 1359,
              height: 1044,
            },
          ]}
          description={
            <>
              A simple script to convert gromacs(used in molecular simulation)
              output file of .XVG format to csv files
            </>
          }
          tools={["python", "numpy", "argparse"]}
          github="https://github.com/s-k-zaman/xvg-to-csv"
        />
      </div>
    </Showcase>
  );
}

export default IHaveBuilt;
