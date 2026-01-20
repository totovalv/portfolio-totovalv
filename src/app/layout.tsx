import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, theme } from "antd";
import { ReadOutlined, CustomerServiceOutlined, TranslationOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Tomas Valverde | Full Stack Developer",
  description: "Modern portfolio of Tomas Valverde, a Full Stack Developer specializing in high-performance web applications.",
};

import I18nInitializer from "@/components/I18nInitializer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="antialiased bg-[#020617] text-slate-200 min-h-screen">
        <I18nInitializer>
          <StyledComponentsRegistry>
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                  colorPrimary: '#3b82f6',
                  borderRadius: 12,
                  fontFamily: 'var(--font-inter)',
                },
                components: {
                  Card: {
                    colorBgContainer: 'rgba(30, 41, 59, 0.4)',
                    colorBorderSecondary: 'rgba(255, 255, 255, 0.1)',
                  },
                }
              }}
            >
              {children}
            </ConfigProvider>
          </StyledComponentsRegistry>
        </I18nInitializer>
      </body>
    </html>
  );
}
