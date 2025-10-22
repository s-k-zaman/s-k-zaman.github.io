import { RESUME_NAME, RESUME_PATH } from "../../lib/downloadResources";
import { Btn } from "../header";
import OtherProject from "../otherProject";
import Showcase from "../showcase";
import TitleSecondary from "../titleSecondary";
import TitleWithBar from "../titleWithBar";

function MyExperiences() {
  const handleCVDownload = async () => {
    const fileName = RESUME_NAME;
    try {
      const response = await fetch(RESUME_PATH);
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
      <TitleWithBar title="Experiences" />
      <div id="experiences" className="flex flex-col gap-[20px]">
        <Btn
          name="In my resume, click to download 📥"
          primary
          onClick={handleCVDownload}
        />
      </div>
    </Showcase>
  );
}

export default MyExperiences;
