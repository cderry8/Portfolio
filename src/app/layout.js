import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, DM_Sans } from "next/font/google";
import AmbientBackdrop from "@/components/shell/AmbientBackdrop";
import NavigationProgress from "@/components/shell/NavigationProgress";
import SiteHeader from "@/components/shell/SiteHeader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description:
    "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className={`${dmSans.className} min-h-screen overflow-x-hidden antialiased`} suppressHydrationWarning>
        <AmbientBackdrop />
        <NavigationProgress />
        <SiteHeader />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
