import type { Metadata } from "next";
import { AnnouncerBar } from "@/components/layout/AnnouncerBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.descriptor}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="bg-wash flex min-h-full flex-col font-sans text-text">
        <SmoothScroll>
          <AnnouncerBar />
          <Header />
          {children}
          <Footer />
          <ScrollProgress />
        </SmoothScroll>
      </body>
    </html>
  );
}
