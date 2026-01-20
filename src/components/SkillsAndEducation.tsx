'use client';

import { portfolioData } from "@/data/portfolio";
import { Tag, Badge, Card, Typography } from "antd";
import { motion } from "framer-motion";
import { ReadOutlined, CustomerServiceOutlined, TranslationOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

const { Title, Text, Paragraph } = Typography;

import { useState, useEffect } from 'react';

export default function SkillsAndEducation() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translatedEducation = (t('education', { returnObjects: true }) as any[]).map((te, idx) => ({
    ...portfolioData.education[idx],
    ...te
  }));

  // Prevent hydration mismatch by returning a simplified skeleton or matching server output
  const languagesTitle = !mounted ? 'Languages' : t('sections.skills.lang');

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-col gap-12">
        {/* Left Side: Skills */}
        <div className="flex-[1.5]">
          <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-full" />
            {t('sections.skills.tech')}
          </h2>

          <div className="glass p-8 rounded-3xl border-none">
            <Paragraph className="!text-slate-400 !text-lg mb-8 leading-relaxed italic">
              &quot;{portfolioData.skills[0]}... and more. I thrive on creating pixel-perfect, accessible, and performant web applications.&quot;
            </Paragraph>

            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Tag className="px-5 py-2.5 rounded-xl border-slate-700 bg-slate-800/40 text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-all cursor-default">
                    {skill}
                  </Tag>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Education & Languages */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full" />
              {t('sections.skills.edu')}
            </h2>
            <div className="flex flex-col gap-4">
              {translatedEducation.map((edu, i) => (
                <Card key={i} className="glass border-none group ">
                  <div className="flex gap-4">
                    <div className="p-3 glass rounded-2xl h-fit border-blue-500/20 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                      <ReadOutlined className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm mb-1">{edu.school}</p>
                      <span className="text-slate-500 text-xs italic">{edu.period}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

          </div>

          <div>
            <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full" />
              {languagesTitle}
            </h2>
            <div className="glass p-6 rounded-3xl grid grid-cols-2 gap-4">
              {portfolioData.languages.map((lang) => (
                <div key={lang.name} className="flex items-start gap-3">
                  <TranslationOutlined className="text-blue-400 mt-1" />
                  <div>
                    <h5 className="text-white font-bold text-sm leading-none mb-1">{lang.name}</h5>
                    <p className="text-slate-400 text-xs">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
