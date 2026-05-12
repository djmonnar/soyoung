import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "진주어때 마케팅 | jinju_about 로컬 마케팅 포트폴리오",
  description:
    "진주어때(jinju_about)를 기반으로 진주·경남 로컬 매장을 위한 네이버 플레이스, 릴스, 블로그 마케팅을 운영합니다.",
  openGraph: {
    title: "진주어때 마케팅 | jinju_about 로컬 마케팅 포트폴리오",
    description: "진주·경남 로컬 매장을 위한 네이버 플레이스, 릴스, 블로그 마케팅.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
