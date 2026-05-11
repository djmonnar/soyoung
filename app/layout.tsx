import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박소영 | SNS 마케팅 포트폴리오",
  description: "인스타그램·블로그·네이버플레이스·진주어때 전문 마케터 박소영의 포트폴리오",
  openGraph: {
    title: "박소영 | SNS 마케팅 포트폴리오",
    description: "진주·창원 지역 기반 SNS 마케팅 전문가",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
