'use client';

import { useEffect } from 'react';
import '@/i18n/config';

export default function I18nInitializer({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
