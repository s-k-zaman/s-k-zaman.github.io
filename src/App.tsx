import About from "./components/about-me";
import Footer from "./components/footer";
import Header from "./components/header";
import IHaveBuilt from "./components/IHaveBuilt";
import Landing from "./components/landing";
import LeftSocial from "./components/leftSocial";
import OtherProjects from "./components/otherProjects";
import RightMail from "./components/rightMail";

function App() {
  return (
    <div className=" relative px-10 min-h-screen bg-primary">
      <Header />
      <LeftSocial />
      <RightMail />
      <Landing />
      <About />
      <IHaveBuilt />
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default App;
