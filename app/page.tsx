"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Clapperboard,
  Menu,
  MessageCircle,
  Phone,
  SearchCheck,
  Sparkles,
  X,
} from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/soyoung" : "";
const asset = (path: string) => `${basePath}${path}`;

const navItems = [
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#services", label: "서비스" },
  { href: "#clients", label: "클라이언트" },
  { href: "#pricing", label: "가격" },
  { href: "#contact", label: "문의" },
];

const stats = [
  ["진행 업체", "16+"],
  ["월 콘텐츠", "60+"],
  ["운영 채널", "SNS · Blog · Place"],
  ["지역", "진주 · 창원"],
];

const services = [
  {
    title: "인스타그램 운영",
    desc: "매장의 분위기와 강점이 한눈에 보이도록 피드 흐름, 문구, 업로드를 관리합니다.",
    icon: InstagramIcon,
    tags: ["피드 기획", "계정 관리", "해시태그"],
  },
  {
    title: "릴스·숏폼 제작",
    desc: "공간, 메뉴, 시술 장면을 짧고 선명하게 보여주는 로컬형 숏폼을 제작합니다.",
    icon: Clapperboard,
    tags: ["릴스", "촬영 구성", "편집"],
  },
  {
    title: "블로그 포스팅",
    desc: "검색 키워드와 방문 이유를 자연스럽게 엮어 네이버 블로그 콘텐츠를 작성합니다.",
    icon: BookOpenText,
    tags: ["SEO", "키워드", "후기형 글"],
  },
  {
    title: "네이버 플레이스 관리",
    desc: "처음 보는 고객도 안심할 수 있게 사진, 소식, 소개 문구를 꾸준히 정리합니다.",
    icon: SearchCheck,
    tags: ["플레이스", "로컬 검색", "매장 정보"],
  },
];

const portfolio = [
  {
    name: "진주 옳커피",
    type: "카페",
    image: "/portfolio/cafe.webp",
    desc: "커피와 공간의 따뜻한 인상을 살린 피드 운영",
    scope: "인스타그램 운영 · 콘텐츠 기획",
  },
  {
    name: "창원 설레움 55테라스",
    type: "카페·테라스",
    image: "/portfolio/terrace.webp",
    desc: "테라스 공간감을 보여주는 릴스와 이미지 구성",
    scope: "릴스 제작 · 로컬 노출",
  },
  {
    name: "진주 네일 도로시",
    type: "뷰티",
    image: "/portfolio/nail.webp",
    desc: "시술 디테일과 컬러감을 또렷하게 정리한 계정 톤",
    scope: "피드 브랜딩 · 포스팅",
  },
  {
    name: "진주 차크란 에스테틱",
    type: "에스테틱",
    image: "/portfolio/spa.webp",
    desc: "차분한 신뢰감과 전문성을 함께 보여주는 콘텐츠",
    scope: "SNS 운영 · 플레이스 관리",
  },
  {
    name: "진주 송화한정식",
    type: "외식",
    image: "/portfolio/dining.webp",
    desc: "상차림과 모임 수요를 연결하는 검색형 콘텐츠",
    scope: "블로그 · 네이버 플레이스",
  },
  {
    name: "진주 교방한우",
    type: "한우·외식",
    image: "/portfolio/beef.webp",
    desc: "메뉴 신뢰도와 프리미엄 식사 경험을 전달",
    scope: "콘텐츠 기획 · 리뷰 동선",
  },
  {
    name: "화담 건축인테리어",
    type: "인테리어",
    image: "/portfolio/interior.webp",
    desc: "시공 감각과 공간 변화를 보기 쉽게 구성",
    scope: "SNS 포트폴리오 · 블로그",
  },
  {
    name: "그레이 로제 제시뷰티",
    type: "헤어·뷰티",
    image: "/portfolio/salon.webp",
    desc: "고급스러운 뷰티 무드를 유지한 첫인상 개선",
    scope: "브랜드 무드 · 숏폼",
  },
];

const pricing = [
  {
    name: "월정기 관리",
    price: "300,000원",
    desc: "인스타그램 운영과 네이버 플레이스 관리를 함께 진행합니다.",
    items: ["월간 운영 방향 제안", "콘텐츠 제작 및 업로드", "채널 상태 점검"],
    featured: true,
  },
  {
    name: "블로그 포스팅",
    price: "30,000~50,000원",
    desc: "검색 키워드와 매장 강점을 반영한 단건 포스팅입니다.",
    items: ["키워드 기반 글 구성", "사진 흐름 정리", "업로드 완료 보고"],
    featured: false,
  },
  {
    name: "진주어때 패키지",
    price: "280,000원",
    desc: "진주어때 채널 연계 릴스 제작과 로컬 노출 패키지입니다.",
    items: ["채널 연계 노출", "릴스 제작", "지역 타깃 홍보"],
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
    <header className="sticky top-0 z-50 border-b-4 border-[#7a4a21] bg-[#f7b32b] shadow-[0_6px_0_rgba(90,52,19,0.22)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3 text-[#4a2b12]">
          <span className="grid h-14 w-14 place-items-center rounded-full border-4 border-[#6b3d18] bg-gradient-to-b from-[#ffe66b] to-[#f28b22] text-xl font-black shadow-[inset_0_-4px_0_rgba(107,61,24,0.24)]">
            SY
          </span>
          <span>
            <span className="block text-xl font-black leading-none tracking-tight">SOYOUNG WORLD</span>
            <span className="block text-xs font-black tracking-[0.18em] text-[#76512a]">LOCAL SNS MARKETING</span>
          </span>
        </a>

        <nav className="hidden items-center rounded-xl border-2 border-[#8a541f] bg-[#ffd34c] px-3 py-2 text-sm font-black text-[#4a2b12] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-4 py-2 hover:bg-white/45">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden rounded-xl border-3 border-[#532f13] bg-[#df4c28] px-5 py-3 text-sm font-black text-white shadow-[inset_0_-4px_0_rgba(80,36,13,0.35)] md:inline-flex">
          MARKETING START
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-lg border-3 border-[#5a3519] bg-[#fff7cf] text-[#4a2b12] lg:hidden"
          aria-label="메뉴 열기"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t-2 border-[#8a541f] bg-[#fff2aa] px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg border-2 border-[#d59a35] bg-white/55 px-4 py-3 font-black text-[#4a2b12]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HeroArt() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-t-[36px] border-4 border-[#6b3d18] bg-[#8bd6ff] shadow-[0_10px_0_rgba(73,48,24,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,.8),transparent_18%),radial-gradient(circle_at_72%_16%,rgba(255,255,255,.55),transparent_22%)]" />
      <div className="cloud-puff left-[8%] top-[18%]" />
      <div className="cloud-puff right-[8%] top-[12%] scale-90" />
      <div className="absolute bottom-0 left-0 right-0 h-[58%]">
        <div className="absolute inset-x-0 bottom-[38%] h-[60%] bg-[#bdeac6] [clip-path:polygon(0_70%,14%_42%,27%_55%,42%_24%,58%_48%,70%_28%,86%_55%,100%_30%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-0 bottom-[18%] h-[52%] bg-[#7fd39b] [clip-path:polygon(0_70%,16%_48%,31%_62%,45%_36%,58%_54%,75%_38%,100%_58%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[#5fb680]" />
      </div>
      <div className="absolute bottom-[21%] right-[10%] flex gap-3">
        <div className="h-24 w-24 rounded-t-full border-4 border-[#7a4a21] bg-[#ffcf57]" />
        <div className="h-28 w-28 rounded-t-full border-4 border-[#7a4a21] bg-[#ef8c34]" />
        <div className="h-20 w-20 rounded-t-full border-4 border-[#7a4a21] bg-[#ffe283]" />
      </div>
      <div className="absolute bottom-[12%] left-[7%] h-28 w-36 rounded-t-[80px] border-4 border-[#7a4a21] bg-[#fff4c8] shadow-[inset_0_-10px_0_rgba(142,92,41,.18)]">
        <div className="absolute -top-8 left-8 h-16 w-20 rounded-t-full border-4 border-[#7a4a21] bg-[#ffb13d]" />
        <div className="absolute bottom-0 left-12 h-16 w-12 rounded-t-full bg-[#8b5125]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 border-t-4 border-[#4f3c2c] bg-[linear-gradient(90deg,#d5d5d5_0_18px,#eeeeee_18px_36px)]" />
    </div>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-md border-2 border-[#8a541f] bg-[#ffe375] px-4 py-2 text-xs font-black tracking-[0.14em] text-[#78431a]">{kicker}</span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3f2717] sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base font-semibold leading-8 text-[#6b5a48]">{desc}</p>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-[#dff6ff] px-4 pb-12 pt-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[40px] border-4 border-[#6b3d18] bg-[#fff9df] shadow-[0_12px_0_rgba(80,48,22,0.18)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-lg border-2 border-[#9b6125] bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#a45c1f]">
                <Sparkles size={15} /> LOCAL SNS PORTFOLIO
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-[#3b2516] sm:text-6xl">
                브랜드 성장의
                <span className="block text-[#df4c28]">기반을 만듭니다</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-9 text-[#5f4f42]">
                진주·창원 로컬 매장을 위한 SNS 마케팅 포트폴리오. 인스타그램 운영, 릴스 제작, 블로그 포스팅, 네이버 플레이스 관리를 한 흐름으로 정리합니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border-3 border-[#532f13] bg-[#df4c28] px-7 py-4 font-black text-white shadow-[inset_0_-5px_0_rgba(80,36,13,0.35)]">
                  MARKETING START <ArrowRight size={18} />
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border-3 border-[#7a4a21] bg-[#fff1a8] px-7 py-4 font-black text-[#4a2b12] shadow-[inset_0_-5px_0_rgba(122,74,33,0.16)]">
                  포트폴리오 보기
                </a>
              </div>
            </div>
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="clients" className="bg-[#dff6ff] px-4 pb-20">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[28px] border-4 border-[#6b3d18] bg-[#fff9df] p-4 shadow-[0_8px_0_rgba(80,48,22,0.14)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-xl border-2 border-[#d59a35] bg-white p-5 text-center">
            <p className="text-sm font-black text-[#9b6125]">{label}</p>
            <p className="mt-2 text-2xl font-black text-[#3b2516]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#fff9df] px-4 py-20">
      <SectionTitle kicker="SERVICE" title="필요한 채널을 정확하게 운영합니다" desc="재미있는 분위기는 살리되, 서비스 설명은 실제 상담에 바로 쓰일 수 있게 명확하게 정리했습니다." />
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
              className="rounded-2xl border-4 border-[#7a4a21] bg-white shadow-[0_7px_0_rgba(80,48,22,0.14)]"
            >
              <div className="flex items-center gap-3 border-b-4 border-[#7a4a21] bg-[#ffd34c] px-5 py-4 text-[#4a2b12]">
                <Icon size={24} />
                <h3 className="text-lg font-black">{service.title}</h3>
              </div>
              <div className="p-5">
                <p className="min-h-[112px] text-sm font-semibold leading-7 text-[#625142]">{service.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-[#d59a35] bg-[#fff4c8] px-2.5 py-1 text-xs font-black text-[#8a541f]">
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
    <section id="portfolio" className="bg-[#ccefd8] px-4 py-20">
      <SectionTitle kicker="PORTFOLIO" title="업종별 작업 사례" desc="각 업체의 업종과 분위기에 맞춰 직접 생성한 2D 일러스트 이미지를 사용했습니다." />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.map((work, index) => (
          <motion.article
            key={work.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035 }}
            className="overflow-hidden rounded-2xl border-4 border-[#6b3d18] bg-[#fff9df] shadow-[0_8px_0_rgba(80,48,22,0.15)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(work.image)} alt={`${work.name} 업종 일러스트`} className="aspect-[3/2] w-full border-b-4 border-[#6b3d18] object-cover" />
            <div className="p-5">
              <span className="inline-flex rounded-md bg-[#ffd34c] px-3 py-1 text-xs font-black text-[#704016]">{work.type}</span>
              <h3 className="mt-3 text-xl font-black leading-tight text-[#3b2516]">{work.name}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#625142]">{work.desc}</p>
              <p className="mt-4 border-t-2 border-[#e5c36a] pt-3 text-xs font-black text-[#8a541f]">{work.scope}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = ["상담", "기획", "제작", "업로드", "관리/개선"];
  return (
    <section className="bg-[#fff9df] px-4 py-20">
      <SectionTitle kicker="PROCESS" title="진행 과정" desc="문의 후 어떤 순서로 운영되는지 간단하고 투명하게 안내합니다." />
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="rounded-xl border-4 border-[#7a4a21] bg-white p-5 text-center shadow-[0_6px_0_rgba(80,48,22,0.12)]">
            <p className="text-xs font-black tracking-[0.18em] text-[#df4c28]">STEP {index + 1}</p>
            <p className="mt-2 text-xl font-black text-[#3b2516]">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-[#dff6ff] px-4 py-20">
      <SectionTitle kicker="PRICE" title="서비스 가격" desc="실제 상담 전에 기준 금액과 포함 범위를 확인할 수 있도록 명확하게 정리했습니다." />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className={`rounded-2xl border-4 border-[#6b3d18] shadow-[0_8px_0_rgba(80,48,22,0.14)] ${plan.featured ? "bg-[#3f73b7] text-white" : "bg-white text-[#3b2516]"}`}>
            <div className="border-b-4 border-[#6b3d18] bg-[#ffd34c] px-6 py-4 text-[#4a2b12]">
              <h3 className="text-2xl font-black">{plan.name}</h3>
            </div>
            <div className="p-6">
              <strong className={`block text-4xl font-black ${plan.featured ? "text-[#ffe66b]" : "text-[#df4c28]"}`}>{plan.price}</strong>
              <p className={`mt-4 min-h-[72px] text-sm font-semibold leading-7 ${plan.featured ? "text-white/88" : "text-[#625142]"}`}>{plan.desc}</p>
              <ul className="mt-6 grid gap-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-black">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#58c66d]" /> {item}
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
    <section id="contact" className="bg-[#ccefd8] px-4 py-20">
      <div className="mx-auto max-w-4xl rounded-[28px] border-4 border-[#6b3d18] bg-[#fff9df] p-8 text-center shadow-[0_10px_0_rgba(80,48,22,0.16)] md:p-12">
        <MessageCircle className="mx-auto text-[#df4c28]" size={42} />
        <h2 className="mt-4 text-3xl font-black text-[#3b2516] sm:text-5xl">로컬 매장에 맞는 운영을 제안드립니다</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[#625142]">
          업종, 현재 채널 상태, 원하는 목표를 알려주시면 필요한 콘텐츠와 운영 범위를 정리해드립니다.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="https://instagram.com/jinju_about" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border-3 border-[#532f13] bg-[#df4c28] px-7 py-4 font-black text-white">
            <InstagramIcon size={18} /> @jinju_about 문의
          </a>
          <a href="tel:" className="inline-flex items-center justify-center gap-2 rounded-xl border-3 border-[#7a4a21] bg-white px-7 py-4 font-black text-[#4a2b12]">
            <Phone size={18} /> 전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dff6ff] text-[#3b2516]">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <footer className="border-t-4 border-[#6b3d18] bg-[#4b2d16] px-4 py-8 text-center text-sm font-bold text-[#fff2aa]">
        SOYOUNG WORLD · Jinju & Changwon Local SNS Marketing
      </footer>
    </main>
  );
}
