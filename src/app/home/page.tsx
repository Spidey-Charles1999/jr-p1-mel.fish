import HeroHeader from "./_components/HeroHeader";
import ProjectShowcase from "./_components/ProjectShowcase";
import CaseStudiesBanner from "./_components/CaseStudiesBanner";
import AudienceSegments from "./_components/AudienceSegments";
import CallToAction from "./_components/CallToAction";
import SiteFooter from "./_components/SiteFooter";
import HomeLayout from "./layout";
import ServicesOverview from "./_components/ServicesOverview";

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroHeader />
      <ServicesOverview />
      <ProjectShowcase />
      <CaseStudiesBanner />
      <AudienceSegments />
      <CallToAction/>
      <SiteFooter />
    </HomeLayout>
  );
}
