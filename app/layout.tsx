import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://irummed.kr"),
  title: "봉담이룸내과의원 - 봉담 투석전문병원",
  description: "봉담이룸내과의원 - 신장내과 및 일반내과 진료",
  openGraph: {
    title: "봉담이룸내과의원 - 봉담 투석전문병원",
    description: "신장내과 · 일반내과 | 봉담 투석전문병원",
    images: ["/gallery/외래/opd1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
