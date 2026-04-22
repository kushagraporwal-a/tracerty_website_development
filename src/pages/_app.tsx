import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local"
import SiteLayout from "@/components/layout/SiteLayout";

const oxygen = localFont({
  src: [
    { path: "../fonts/Oxygen-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Oxygen-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-oxygen",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../fonts/Inter.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${oxygen.variable} ${inter.variable}`}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </div>
  );
}
