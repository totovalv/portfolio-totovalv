'use client';

import { useTranslation } from 'react-i18next';
import { Button, Tooltip } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';

import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  if (!mounted) {
    return (
      <Button
        type="text"
        icon={<TranslationOutlined className="text-blue-400" />}
        className="glass border-white/10 !text-white opacity-50"
      >
        <span className="ml-1 uppercase text-[10px] font-bold tracking-widest">
          --
        </span>
      </Button>
    );
  }

  return (
    <Tooltip title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}>
      <Button
        type="text"
        icon={<TranslationOutlined className="text-blue-400" />}
        onClick={toggleLanguage}
        className="glass border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 !text-white"
      >
        <span className="ml-1 uppercase text-[10px] font-bold tracking-widest">
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </span>
      </Button>
    </Tooltip>
  );
}
