import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import ThemeProvider from "@/components/providers/ThemeProvider";
import BackgroundEffects from "@/components/shared/BackgroundEffects";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Web Developer`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col">
        <ThemeProvider>
          <BackgroundEffects />

          <main className="relative z-10">{children}</main>

          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
