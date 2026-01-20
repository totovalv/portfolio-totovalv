'use client';

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsAndEducation from "@/components/SkillsAndEducation";
import { FloatButton } from "antd";
import { ArrowUpOutlined, GithubOutlined, LinkedinOutlined, RocketOutlined } from "@ant-design/icons";
import { portfolioData } from "@/data/portfolio";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1)_0%,_rgba(2,6,23,1)_100%)] -z-20" />
      <div className="fixed top-0 left-0 w-full h-full bg-grid opacity-[0.03] -z-10 pointer-events-none" />

      {/* Navigation (Simple Glassmorphism) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-8 border-white/5">
          <a href="#" className="text-sm font-bold tracking-tighter text-blue-500 hover:text-white transition-colors">TV.</a>
          <div className="hidden md:flex gap-6">
            <a href="#projects" className="text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">{t('sections.projects.tag')}</a>
            <a href="#experience" className="text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">{t('sections.experience.tag')}</a>
            <a href="#about" className="text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">{t('sections.skills.tag')}</a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a href={`mailto:${portfolioData.email}`} className="text-xs uppercase tracking-widest font-bold text-white bg-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-500 transition-all">{t('hero.cta')}</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative pt-20">
        <Hero />

        <div id="projects">
          <Projects />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="about">
          <SkillsAndEducation />
        </div>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold font-heading mb-6 tracking-tight">{t('sections.contact.title')}</h3>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              {t('sections.contact.tag')}
            </p>

            <div className="flex justify-center gap-6 mb-12">
              <a href={portfolioData.socials.find(s => s.name === "LinkedIn")?.url} target="_blank" className="text-2xl text-slate-500 hover:text-blue-400 transition-colors">
                <LinkedinOutlined />
              </a>
              <a href={portfolioData.socials.find(s => s.name === "GitHub")?.url} target="_blank" className="text-2xl text-slate-500 hover:text-blue-400 transition-colors">
                <GithubOutlined />
              </a>
            </div>

            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} {portfolioData.name}. {t('hero.role')}
            </p>
          </div>
        </footer>
      </div>

      <FloatButton.BackTop icon={<ArrowUpOutlined />} type="primary" className="bg-blue-600" />
    </main>
  );
}
