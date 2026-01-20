'use client';

import { portfolioData } from "@/data/portfolio";
import { Timeline, Typography, ConfigProvider, theme } from "antd";
import { motion } from "framer-motion";
import { BankOutlined, CodeOutlined, RocketOutlined, SolutionOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

export default function Experience() {
  const { t } = useTranslation();

  const getIcon = (company: string) => {
    if (company.includes("Cisco")) return <CodeOutlined className="text-blue-400" />;
    if (company.includes("CES")) return <RocketOutlined className="text-blue-400" />;
    if (company.includes("Unilever")) return <BankOutlined className="text-blue-400" />;
    return <SolutionOutlined className="text-blue-400" />;
  };

  const experienceItems = t('experience', { returnObjects: true }) as Array<{
    company: string;
    role: string;
    period: string;
    points: string[];
  }>;

  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium tracking-wider uppercase text-sm mb-2 block">{t('sections.experience.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">{t('sections.experience.title')}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <Timeline
            mode="start"
            items={experienceItems.map((exp, index) => ({
              icon: (
                <div className="p-2 glass rounded-lg border-blue-500/30 bg-blue-500/10">
                  {getIcon(exp.company)}
                </div>
              ),
              content: (
                <div className="mb-12 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <Title level={4} className="!mb-0 !text-white !font-heading">
                      {exp.role} <span className="text-blue-400 ml-1">@ {exp.company}</span>
                    </Title>
                    <Text className="!text-white font-medium italic">
                      {exp.period}
                    </Text>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
          />
        </motion.div>
      </div>
    </section>
  );
}
