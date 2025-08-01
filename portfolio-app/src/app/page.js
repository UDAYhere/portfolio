import Layout from '@/components/Layout';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import TimelineSection from '@/sections/TimelineSection';
import ContactSection from '@/sections/ContactSection';
import Section from '@/components/Section';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </Layout>
  );
}
