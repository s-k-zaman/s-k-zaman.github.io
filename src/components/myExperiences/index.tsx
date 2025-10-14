import { Btn } from "../header";
import OtherProject from "../otherProject";
import Showcase from "../showcase";
import TitleSecondary from "../titleSecondary";
import TitleWithBar from "../titleWithBar";

function MyExperiences() {
  const handleCVDownload = async () => {
    const fileName = "s-k-zaman_CV.pdf";
    try {
      const response = await fetch("/downloads/khairul-cv.pdf");
      const blob = await response.blob();
      const fileUrl = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileUrl;
      alink.download = fileName;
      alink.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Showcase>
      <TitleWithBar title="Experiences">
        <div id="experiences" className="flex flex-col gap-[20px]">
          <Btn name="In my resume, click to download 📥"primary onClick={handleCVDownload} />
        </div>
      </TitleWithBar>
    </Showcase>
  );
}

export default MyExperiences;
