import HeroHeader from "./_components/HeroHeader";
import ProjectShowcase from "./_components/ProjectShowcase";
import CaseStudiesBanner from "./_components/CaseStudiesBanner";
import AudienceSegments from "./_components/AudienceSegments";
import CallToAction from "./_components/CallToAction";
import Footer from "./_components/Footer";
import HomeLayout from "./layout";
import ServicesOverview from "./_components/ServicesOverview";

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroHeader/>
      <ServicesOverview/>
      <ProjectShowcase/>
      <CaseStudiesBanner/>
      <AudienceSegments/>
      <CallToAction/>
      <Footer/>
    </HomeLayout>
  );
}
