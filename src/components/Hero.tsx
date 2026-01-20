'use client';

import { portfolioData } from "@/data/portfolio";
import { GithubOutlined, RocketOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <Tag color="processing" className="mb-4 px-4 py-1 rounded-full text-sm font-medium border-none bg-blue-500/10 text-blue-400">
              {t('hero.status')}
            </Tag>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t('hero.greeting')} <span className="text-gradient leading-tight">{portfolioData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
              {t('hero.role')} <span className="text-slate-600">/</span> {t('hero.location')}
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                className="h-14 px-8 text-lg font-medium shadow-lg shadow-blue-500/20"
                href={`mailto:${portfolioData.email}`}
              >
                Let&apos;s Connect
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined />}
                className="h-14 px-8 text-lg font-medium glass border-slate-700 hover:border-blue-500"
                href="https://github.com/totovalv"
                target="_blank"
              >
                GitHub
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 glass p-2">
              <img
                src="https://github.com/totovalv.png"
                alt={portfolioData.name}
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-grid -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
