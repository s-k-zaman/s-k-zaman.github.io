import About from "./components/about-me";
import Footer from "./components/footer";
import Header from "./components/header";
import IHaveBuilt from "./components/IHaveBuilt";
import Landing from "./components/landing";
import LeftSocial from "./components/leftSocial";
import MyExperiences from "./components/myExperiences";
import OtherProjects from "./components/otherProjects";
import RightMail from "./components/rightMail";
import { cn } from "./lib/tailwindCss";

function App() {
  return (
    <div
      className={cn(
        "flex flex-col",
        "scroll-smooth relative min-h-screen bg-primary",
      )}
    >
      <Header />
      <LeftSocial />
      <RightMail />
      <div className={cn("scroll-smooth", "px-6 lg:px-10")}>
        <Landing />
        <About />
        <IHaveBuilt />
        <MyExperiences />
        {/* <OtherProjects /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
