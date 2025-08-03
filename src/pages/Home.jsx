import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMe";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSectiion";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";





export const Home =() => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        
            <ThemeToggle/>
            
            <StarBackground />
            
            <Navbar />
        
            <HeroSection />

            <AboutSection />

            <SkillSection />

            <ProjectsSection />

            <ContactSection />

            <Footer />
    </div>
    );
};