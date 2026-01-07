import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { Aboutme } from "../Components/Aboutme";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { FluidText } from "../Components/FluidText";

export const Home = () => {
    return <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-purple-500/30">
        <Navbar />
        <main>
            <HeroSection />
            <FluidText />
            <Aboutme />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    </div>;
};