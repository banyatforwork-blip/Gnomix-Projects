import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
