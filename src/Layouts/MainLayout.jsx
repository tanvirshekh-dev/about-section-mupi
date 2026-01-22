import AboutCTA from "../Components/about/AboutCTA";
import AboutHero from "../Components/about/AboutHero";
import AboutOverview from "../Components/about/AboutOverview";
import Facilities from "../Components/about/Facilities";
import MissionVision from "../Components/about/MissionVision";
import NoticeBoard from "../components/about/NoticeBoard";
import OurDepartment from "../components/about/OurDepartment";
import WhyChooseUs from "../Components/about/WhyChooseUs";
import Instructor from "../components/about/Instructor";

const MainLayout = () => {
  return (
    <div>
      <AboutHero />
      <NoticeBoard />
      <AboutOverview />
      <OurDepartment />
      <MissionVision />
      <Instructor />
      <Facilities />
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
};

export default MainLayout;
