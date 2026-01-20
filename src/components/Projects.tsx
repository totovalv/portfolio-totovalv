'use client';

import { portfolioData } from "@/data/portfolio";
import { GithubOutlined, GlobalOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Card, Tag, Button, Typography, Space } from "antd";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

export default function Projects() {
  const { t } = useTranslation();

  const translatedProjects = (t('projects', { returnObjects: true }) as any[]).map((tp, idx) => ({
    ...portfolioData.projects[idx],
    ...tp
  }));

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-blue-500 font-medium tracking-wider uppercase text-sm mb-2 block">{t('sections.projects.tag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">{t('sections.projects.title')}</h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            {t('sections.projects.all')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {translatedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="glass glass-hover border-none overflow-hidden h-full flex flex-col group"
                hoverable
                cover={
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      alt={project.title}
                      src={project.project_snapshot || project.image || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {project.featured && (
                      <Tag color="gold" className="absolute top-4 right-4 z-20 m-0 px-3 py-1 border-none bg-yellow-500/20 text-yellow-500 backdrop-blur-md">
                        Featured
                      </Tag>
                    )}
                  </div>
                }
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Title level={3} className="!mb-2 !text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </Title>
                    <Paragraph className="!text-slate-400 line-clamp-3">
                      {project.description}
                    </Paragraph>
                  </div>

                  <div className="mt-auto pt-6 flex flex-wrap gap-3">
                    {project.live && (
                      <Button
                        type="primary"
                        icon={<GlobalOutlined />}
                        href={project.live}
                        target="_blank"
                        className="rounded-lg"
                      >
                        {t('sections.projects.visit')}
                      </Button>
                    )}
                    {project.repo && (
                      <Button
                        icon={<GithubOutlined />}
                        href={project.repo}
                        target="_blank"
                        className="glass  rounded-lg border-slate-700"
                      >
                        {t('sections.projects.repo')}
                      </Button>
                    )}
                    {project.video && (
                      <Button
                        icon={<PlayCircleOutlined />}
                        href={project.video}
                        target="_blank"
                        className="glass  rounded-lg border-slate-700"
                      >
                        {t('sections.projects.video')}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
