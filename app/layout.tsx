import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOYOUNG WORLD | 박소영 SNS 마케팅 포트폴리오",
  description:
    "진주·창원 로컬 매장을 위한 인스타그램 운영, 릴스 제작, 블로그 포스팅, 네이버 플레이스 관리 포트폴리오.",
  openGraph: {
    title: "SOYOUNG WORLD | 박소영 SNS 마케팅 포트폴리오",
    description: "진주·창원 로컬 매장을 위한 SNS 마케팅 월드.",
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
