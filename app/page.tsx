"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Clapperboard,
  Image as ImageIcon,
  Menu,
  MessageCircle,
  Phone,
  SearchCheck,
  Sparkles,
  X,
} from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/soyoung" : "";
const asset = (path: string) => `${basePath}${path}`;
const heroPhoto = "/portfolio/angssomarketing-main.jpg";

const navItems = [
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#services", label: "서비스" },
  { href: "#clients", label: "성과" },
  { href: "#pricing", label: "가격" },
  { href: "#contact", label: "문의" },
];

const stats = [
  ["진행 업체", "20+"],
  ["월 콘텐츠", "60+"],
  ["운영 채널", "Place · Reels · Blog"],
  ["지역", "진주 · 경남"],
];

const services = [
  {
    title: "진주어때 채널 연계",
    desc: "진주어때(jinju_about) 인스타그램 채널을 기반으로 매장 노출과 콘텐츠 확산 흐름을 설계합니다.",
    icon: InstagramIcon,
    tags: ["jinju_about", "채널 연계", "로컬 노출"],
  },
  {
    title: "릴스 · 숏폼 제작",
    desc: "공간, 메뉴, 시술 장면을 짧고 선명하게 보여주는 로컬형 숏폼을 제작합니다.",
    icon: Clapperboard,
    tags: ["릴스", "촬영 구성", "편집"],
  },
  {
    title: "블로그 포스팅",
    desc: "네이버 블로그에서 검색되는 키워드와 방문 이유를 자연스럽게 엮어 콘텐츠를 작성합니다.",
    icon: BookOpenText,
    tags: ["네이버 블로그", "SEO", "키워드"],
  },
  {
    title: "네이버 플레이스 관리",
    desc: "처음 보는 고객이 안심할 수 있게 사진, 소식, 소개 문구를 꾸준히 정리합니다.",
    icon: SearchCheck,
    tags: ["플레이스", "로컬 검색", "매장 정보"],
  },
];

const portfolio = [
  {
    name: "진주 감성 카페",
    type: "카페",
    image: "/portfolio/cafe.webp",
    desc: "커피와 공간의 온도를 살린 피드 운영",
    scope: "인스타그램 운영 · 콘텐츠 기획",
  },
  {
    name: "경남 테라스 라운지",
    type: "카페 · 라운지",
    image: "/portfolio/terrace.webp",
    desc: "테라스 공간감을 보여주는 릴스와 이미지 구성",
    scope: "릴스 제작 · 로컬 노출",
  },
  {
    name: "진주 네일 스튜디오",
    type: "뷰티",
    image: "/portfolio/nail.webp",
    desc: "시술 디테일과 컬러감을 또렷하게 정리한 계정",
    scope: "피드 브랜딩 · 포스팅",
  },
  {
    name: "진주 프라이빗 스파",
    type: "에스테틱",
    image: "/portfolio/spa.webp",
    desc: "차분한 신뢰감과 전문성을 함께 보여주는 콘텐츠",
    scope: "SNS 운영 · 플레이스 관리",
  },
  {
    name: "진주 한식 다이닝",
    type: "외식",
    image: "/portfolio/dining.webp",
    desc: "상차림과 모임 수요를 연결하는 검색형 콘텐츠",
    scope: "블로그 · 네이버 플레이스",
  },
  {
    name: "진주 프리미엄 한우",
    type: "한우 · 외식",
    image: "/portfolio/beef.webp",
    desc: "메뉴 선명도와 프리미엄 식사 경험을 전달",
    scope: "콘텐츠 기획 · 리뷰 동선",
  },
  {
    name: "거제 건축 인테리어",
    type: "인테리어",
    image: "/portfolio/interior.webp",
    desc: "시공 감각과 공간 변화를 보기 쉽게 구성",
    scope: "SNS 포트폴리오 · 블로그",
  },
  {
    name: "글로우 뷰티 살롱",
    type: "헤어 · 뷰티",
    image: "/portfolio/salon.webp",
    desc: "고급스러운 뷰티 무드를 살린 첫인상 개선",
    scope: "브랜드 무드 · 숏폼",
  },
];

const pricing = [
  {
    name: "월 정기 관리",
    price: "300,000원~",
    desc: "인스타그램 운영과 네이버 플레이스 관리를 함께 진행합니다.",
    items: ["월간 운영 방향 제안", "콘텐츠 제작 및 업로드", "채널 상태 점검"],
    featured: true,
  },
  {
    name: "블로그 포스팅",
    price: "30,000~50,000원",
    desc: "검색 키워드와 매장 강점을 반영한 맞춤 포스팅입니다.",
    items: ["키워드 기반 글 구성", "사진 흐름 정리", "업로드 완료 보고"],
    featured: false,
  },
  {
    name: "진주어때 패키지",
    price: "280,000원~",
    desc: "진주어때(jinju_about) 채널 연계 릴스 제작과 로컬 노출 패키지입니다.",
    items: ["진주어때 채널 연계", "릴스 제작", "지역 타깃 홍보"],
    featured: false,
  },
];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd5c8] bg-[#fffaf4]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3 text-[#32261f]">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#32261f] text-sm font-black text-white">진주</span>
          <span>
            <span className="block text-lg font-black leading-none">진주어때 마케팅</span>
            <span className="block text-xs font-bold tracking-[0.12em] text-[#957866]">jinju_about</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 text-sm font-bold text-[#5f4f45] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md px-4 py-2 hover:bg-[#f0e4d8]">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="tel:01088853744" className="hidden rounded-md bg-[#32261f] px-5 py-3 text-sm font-black text-white md:inline-flex">
          010-8885-3744
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-[#d8cabc] bg-white text-[#32261f] lg:hidden"
          aria-label="메뉴 열기"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#dfd5c8] bg-[#fffaf4] px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md bg-white px-4 py-3 font-bold text-[#32261f]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HeroPhoto() {
  return (
    <div
      className="relative min-h-[520px] overflow-hidden bg-[#e9ded2] bg-cover bg-center lg:min-h-[680px]"
      style={{
        backgroundImage: `url("${asset(heroPhoto)}"), url("${asset("/portfolio/cafe.webp")}")`,
      }}
      role="img"
      aria-label="앵쏘정보통 마케팅 포트폴리오 대표 사진"
    >
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/28 to-transparent" />
      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-md bg-white/88 px-4 py-3 text-sm font-black text-[#32261f] shadow-sm backdrop-blur">
        <ImageIcon size={18} />
        jinju_about 마케팅
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-md border border-[#d8cabc] bg-white px-4 py-2 text-xs font-black tracking-[0.14em] text-[#957866]">{kicker}</span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#32261f] sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base font-semibold leading-8 text-[#6b5c52]">{desc}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-[#fffaf4]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-center py-6 lg:py-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-[#d8cabc] bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#957866]">
            <Sparkles size={15} /> jinju_about 기반 로컬 마케팅
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-[#32261f] sm:text-6xl">
            네이버 플레이스와
            <span className="block text-[#9c5b43]">릴스·블로그를 함께 운영합니다</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-9 text-[#5f4f45]">
            진주어때(jinju_about) 인스타그램 채널을 기반으로 진주·경남 로컬 매장의 네이버 플레이스, 릴스, 블로그 콘텐츠를 한 흐름으로 운영합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#32261f] px-7 py-4 font-black text-white">
              상담 문의 <ArrowRight size={18} />
            </a>
            <a href="https://blog.naver.com/th12dud" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-[#d8cabc] bg-white px-7 py-4 font-black text-[#32261f]">
              블로그 보기
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md border border-[#d8cabc] bg-white px-7 py-4 font-black text-[#32261f]">
              포트폴리오 보기
            </a>
          </div>
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="clients" className="bg-[#f3ece4] px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-md border border-[#dfd5c8] bg-white p-5 text-center">
            <p className="text-sm font-black text-[#957866]">{label}</p>
            <p className="mt-2 text-2xl font-black text-[#32261f]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#fffaf4] px-4 py-20">
      <SectionTitle kicker="SERVICE" title="플레이스·릴스·블로그를 함께 설계합니다" desc="진주어때(jinju_about) 채널 기반의 로컬 노출과 네이버 검색 흐름을 함께 고려해 운영합니다." />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-md border border-[#dfd5c8] bg-white"
            >
              <div className="flex items-center gap-3 border-b border-[#dfd5c8] px-5 py-4 text-[#32261f]">
                <Icon size={23} />
                <h3 className="text-lg font-black">{service.title}</h3>
              </div>
              <div className="p-5">
                <p className="min-h-[112px] text-sm font-semibold leading-7 text-[#62554d]">{service.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-[#f3ece4] px-2.5 py-1 text-xs font-black text-[#7a5f4c]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f3ece4] px-4 py-20">
      <SectionTitle kicker="PORTFOLIO" title="업종별 작업 사례" desc="각 업체의 업종과 분위기에 맞춰 플레이스 정보, 릴스 소재, 블로그 키워드 흐름을 다르게 설계합니다." />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.map((work, index) => (
          <motion.article
            key={work.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035 }}
            className="overflow-hidden rounded-md border border-[#dfd5c8] bg-white"
          >
            <Image
              src={asset(work.image)}
              alt={`${work.name} 작업 이미지`}
              width={900}
              height={600}
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="p-5">
              <span className="inline-flex rounded-md bg-[#f3ece4] px-3 py-1 text-xs font-black text-[#7a5f4c]">{work.type}</span>
              <h3 className="mt-3 text-xl font-black leading-tight text-[#32261f]">{work.name}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#62554d]">{work.desc}</p>
              <p className="mt-4 border-t border-[#eee3d8] pt-3 text-xs font-black text-[#7a5f4c]">{work.scope}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = ["상담", "기획", "제작", "업로드", "관리 개선"];
  return (
    <section className="bg-[#fffaf4] px-4 py-20">
      <SectionTitle kicker="PROCESS" title="진행 과정" desc="문의 후 어떤 순서로 운영되는지 간단하고 투명하게 안내합니다." />
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="rounded-md border border-[#dfd5c8] bg-white p-5 text-center">
            <p className="text-xs font-black tracking-[0.18em] text-[#9c5b43]">STEP {index + 1}</p>
            <p className="mt-2 text-xl font-black text-[#32261f]">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[#f3ece4] px-4 py-20">
      <SectionTitle kicker="PRICE" title="서비스 가격" desc="상담 전 기준 금액과 포함 범위를 먼저 확인할 수 있도록 명확하게 정리했습니다." />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className={`rounded-md border border-[#dfd5c8] ${plan.featured ? "bg-[#32261f] text-white" : "bg-white text-[#32261f]"}`}>
            <div className={`border-b px-6 py-4 ${plan.featured ? "border-white/15" : "border-[#dfd5c8]"}`}>
              <h3 className="text-2xl font-black">{plan.name}</h3>
            </div>
            <div className="p-6">
              <strong className={`block text-4xl font-black ${plan.featured ? "text-[#f2c894]" : "text-[#9c5b43]"}`}>{plan.price}</strong>
              <p className={`mt-4 min-h-[72px] text-sm font-semibold leading-7 ${plan.featured ? "text-white/82" : "text-[#62554d]"}`}>{plan.desc}</p>
              <ul className="mt-6 grid gap-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-black">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#7dbf80]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#fffaf4] px-4 py-20">
      <div className="mx-auto max-w-4xl rounded-md border border-[#dfd5c8] bg-white p-8 text-center md:p-12">
        <MessageCircle className="mx-auto text-[#9c5b43]" size={42} />
        <h2 className="mt-4 text-3xl font-black text-[#32261f] sm:text-5xl">진주어때 기반의 운영안을 제안드립니다</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[#62554d]">
          업종, 현재 채널 상태, 원하는 목표를 알려주시면 네이버 플레이스, 릴스, 블로그 운영 범위를 정리해드립니다.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="https://instagram.com/jinju_about" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#32261f] px-7 py-4 font-black text-white">
            <InstagramIcon size={18} /> @jinju_about 문의
          </a>
          <a href="https://blog.naver.com/th12dud" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d8cabc] bg-white px-7 py-4 font-black text-[#32261f]">
            <BookOpenText size={18} /> 블로그 보기
          </a>
          <a href="tel:01088853744" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#d8cabc] bg-white px-7 py-4 font-black text-[#32261f]">
            <Phone size={18} /> 010-8885-3744
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf4] text-[#32261f]">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <footer className="border-t border-[#dfd5c8] bg-[#32261f] px-4 py-8 text-center text-sm font-bold text-[#f8eadc]">
        jinju_about · 진주어때 기반 네이버 플레이스 · 릴스 · 블로그 마케팅
      </footer>
    </main>
  );
}
