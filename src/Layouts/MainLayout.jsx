import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutOverview from "../components/about/AboutOverview";
import Facilities from "../components/about/Facilities";
import MissionVision from "../components/about/MissionVision";
import NoticeBoard from "../components/about/NoticeBoard";
import OurDepartment from "../components/about/OurDepartment";
import WhyChooseUs from "../components/about/WhyChooseUs";
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
