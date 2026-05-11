"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clapperboard,
  Compass,
  Crown,
  Gem,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  PenLine,
  Phone,
  Play,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  WandSparkles,
  X,
} from "lucide-react";

type IconType = typeof Sparkles;

const navItems = [
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#services", label: "서비스" },
  { href: "#clients", label: "클라이언트" },
  { href: "#pricing", label: "가격" },
  { href: "#contact", label: "문의" },
];

const stats = [
  { label: "진행 업체", value: "16+", icon: Store, tone: "rose" },
  { label: "월 콘텐츠", value: "60+", icon: Camera, tone: "sky" },
  { label: "운영 채널", value: "SNS/Blog/Place", icon: Compass, tone: "mint" },
  { label: "지역", value: "진주·창원", icon: MapPin, tone: "violet" },
];

const services: {
  title: string;
  desc: string;
  tags: string[];
  icon: IconType;
  level: string;
  color: string;
}[] = [
  {
    title: "인스타그램 운영",
    desc: "피드 톤앤매너, 해시태그, 업로드 흐름을 매장 성격에 맞춰 꾸준히 관리합니다.",
    tags: ["피드 기획", "계정 관리", "해시태그"],
    icon: Camera,
    level: "SOCIAL MAGE",
    color: "from-rose-300 to-pink-400",
  },
  {
    title: "릴스·숏폼 제작",
    desc: "공간, 메뉴, 시술 장면을 짧고 선명하게 보여주는 로컬형 숏폼 콘텐츠를 만듭니다.",
    tags: ["릴스", "촬영 구성", "편집"],
    icon: Clapperboard,
    level: "REELS ARCHER",
    color: "from-sky-300 to-cyan-400",
  },
  {
    title: "블로그 포스팅",
    desc: "검색 유입을 고려한 키워드와 방문 이유를 자연스럽게 엮어 포스팅합니다.",
    tags: ["SEO", "키워드", "후기형 글"],
    icon: BookOpenText,
    level: "STORY CLERIC",
    color: "from-amber-200 to-orange-300",
  },
  {
    title: "네이버 플레이스 관리",
    desc: "처음 방문하는 고객이 안심할 수 있도록 정보, 사진, 소개 문구를 정리합니다.",
    tags: ["플레이스", "로컬 검색", "매장 정보"],
    icon: SearchCheck,
    level: "PLACE GUARD",
    color: "from-emerald-200 to-teal-400",
  },
];

const portfolio = [
  {
    name: "진주 옳커피",
    type: "카페",
    quest: "따뜻한 커피 무드와 동네 단골 감성을 피드로 정리",
    mission: "인스타그램 운영 · 콘텐츠 기획",
    kind: "cafe",
  },
  {
    name: "창원 설레움 55테라스",
    type: "카페·테라스",
    quest: "테라스 공간감을 살린 릴스와 방문 욕구를 만드는 이미지 구성",
    mission: "릴스 제작 · 로컬 노출",
    kind: "terrace",
  },
  {
    name: "진주 네일 도로시",
    type: "뷰티",
    quest: "시술 디테일이 또렷하게 보이는 컬러 중심 계정 톤 정리",
    mission: "피드 브랜딩 · 포스팅",
    kind: "nail",
  },
  {
    name: "진주 차크란 에스테틱",
    type: "에스테틱",
    quest: "차분한 신뢰감과 관리 전문성을 함께 보여주는 콘텐츠 설계",
    mission: "SNS 운영 · 플레이스 관리",
    kind: "spa",
  },
  {
    name: "진주 송화한정식",
    type: "외식",
    quest: "상차림의 풍성함과 모임 수요를 연결하는 검색형 콘텐츠",
    mission: "블로그 · 네이버 플레이스",
    kind: "dining",
  },
  {
    name: "진주 교방한우",
    type: "한우·외식",
    quest: "메뉴 신뢰도와 프리미엄 식사 경험을 또렷하게 전달",
    mission: "콘텐츠 기획 · 리뷰 동선",
    kind: "beef",
  },
  {
    name: "화담 건축인테리어",
    type: "인테리어",
    quest: "시공 감각과 공간 변화를 보기 쉽게 정리한 포트폴리오형 운영",
    mission: "SNS 포트폴리오 · 블로그",
    kind: "interior",
  },
  {
    name: "그레이 로제 제시뷰티",
    type: "헤어·뷰티",
    quest: "고급스러운 뷰티 무드를 유지하며 계정 첫인상을 개선",
    mission: "브랜드 무드 · 숏폼",
    kind: "salon",
  },
];

const process = [
  { title: "상담", desc: "매장 목표와 현재 채널 상태 확인", icon: MessageCircle },
  { title: "기획", desc: "콘셉트, 업종 키워드, 월간 콘텐츠 구성", icon: PenLine },
  { title: "제작", desc: "피드, 릴스, 블로그, 플레이스 소재 제작", icon: WandSparkles },
  { title: "업로드", desc: "채널별 업로드와 노출 흐름 정리", icon: Play },
  { title: "관리/개선", desc: "반응 확인 후 다음 콘텐츠 방향 보정", icon: BarChart3 },
];

const pricing = [
  {
    name: "월정기 관리",
    price: "300,000원",
    badge: "BEST ITEM",
    desc: "인스타그램 피드, 공지, 릴스, 계정 관리와 네이버 플레이스 관리를 함께 진행합니다.",
    points: ["월간 운영 방향 제안", "콘텐츠 제작 및 업로드", "채널 상태 점검"],
    featured: true,
  },
  {
    name: "블로그 포스팅",
    price: "30,000~50,000원",
    badge: "SEARCH SCROLL",
    desc: "검색 키워드와 매장 강점을 반영한 네이버 블로그 포스팅 단건 패키지입니다.",
    points: ["키워드 기반 글 구성", "사진 흐름 정리", "업로드 완료 보고"],
    featured: false,
  },
  {
    name: "진주어때 패키지",
    price: "280,000원",
    badge: "LOCAL BOOST",
    desc: "진주어때 채널 연계 릴스 제작과 로컬 고객 노출을 위한 패키지입니다.",
    points: ["채널 연계 노출", "릴스 제작", "지역 타깃 홍보"],
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] border border-white/80 bg-white/82 px-4 py-3 shadow-[0_16px_50px_rgba(61,76,98,0.12)] backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="SOYOUNG WORLD 홈">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-pink-300 via-rose-200 to-amber-100 text-rose-700 shadow-inner">
            <Crown size={22} />
          </span>
          <span>
            <span className="block text-sm font-black tracking-[0.24em] text-slate-900">SOYOUNG</span>
            <span className="block text-[11px] font-extrabold tracking-[0.22em] text-rose-500">WORLD</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-black text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-rose-500">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:bg-rose-500 md:inline-flex"
        >
          MARKETING START
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-800 lg:hidden"
          aria-label="메뉴 열기"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 grid max-w-7xl gap-2 rounded-[24px] border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-black text-slate-700 hover:bg-rose-50 hover:text-rose-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white"
          >
            MARKETING START <ArrowRight size={16} />
          </a>
        </motion.div>
      )}
    </header>
  );
}

function FantasyBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />
      <div className="cloud cloud-c" />
      <div className="star-dot left-[9%] top-[24%]" />
      <div className="star-dot left-[32%] top-[18%] delay-200" />
      <div className="star-dot right-[18%] top-[28%] delay-500" />
      <div className="sparkle-cross left-[16%] top-[52%]" />
      <div className="sparkle-cross right-[10%] top-[16%] delay-300" />
      <svg className="absolute bottom-0 left-0 h-[42%] w-full" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 255 C140 180 230 215 340 146 C462 70 580 170 680 116 C805 48 945 90 1045 164 C1155 246 1280 180 1440 105 L1440 420 L0 420 Z" fill="#d8f5e8" />
        <path d="M0 296 C150 235 300 265 420 210 C570 142 710 252 855 178 C995 106 1155 234 1440 164 L1440 420 L0 420 Z" fill="#bfe7dc" />
        <path d="M0 340 C220 298 386 332 560 276 C785 203 988 330 1440 248 L1440 420 L0 420 Z" fill="#9fd2bd" />
      </svg>
    </div>
  );
}

function WorldMapVisual() {
  return (
    <div className="relative mx-auto aspect-[1.05] w-full max-w-[520px] overflow-hidden rounded-[34px] border border-white/80 bg-gradient-to-br from-sky-100 via-pink-50 to-amber-50 p-5 shadow-[0_30px_90px_rgba(74,91,125,0.2)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.9),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.65),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.35),transparent)]" />
      <div className="absolute left-8 top-8 rounded-full bg-white/70 px-4 py-2 text-xs font-black tracking-[0.18em] text-rose-500 shadow-sm">
        WORLD MAP
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 500" fill="none" aria-hidden="true">
        <path d="M118 322 C170 250 220 248 262 298 C306 349 360 330 413 260" stroke="#f5a5b9" strokeWidth="7" strokeLinecap="round" strokeDasharray="3 20" />
        <path d="M58 338 C104 300 147 303 186 338 C220 367 259 365 295 336 C343 298 395 305 462 348 L462 428 L58 428 Z" fill="#7fd0b0" />
        <path d="M98 334 L138 258 L181 334 Z" fill="#8ec6b0" />
        <path d="M138 258 L158 295 L120 295 Z" fill="#fff7e5" />
        <path d="M342 300 L382 216 L430 300 Z" fill="#89bfb2" />
        <path d="M382 216 L403 258 L363 258 Z" fill="#fff7e5" />
        <path d="M216 194 C240 165 274 164 300 194 L300 275 L216 275 Z" fill="#ffd6df" />
        <path d="M236 163 H280 L280 198 H236 Z" fill="#ffaec0" />
        <path d="M248 136 L280 163 H236 Z" fill="#f48fa8" />
        <path d="M236 218 H254 V275 H236 Z" fill="#fff9f1" />
        <circle cx="128" cy="322" r="18" fill="#fff" stroke="#f292ad" strokeWidth="6" />
        <circle cx="262" cy="298" r="18" fill="#fff" stroke="#80cbe9" strokeWidth="6" />
        <circle cx="413" cy="260" r="18" fill="#fff" stroke="#99dec4" strokeWidth="6" />
      </svg>

      <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-[26px] border border-white/80 bg-white/78 p-4 shadow-[0_18px_50px_rgba(69,87,110,0.12)] backdrop-blur-md sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-black tracking-[0.2em] text-sky-500">MAIN QUEST</p>
          <p className="mt-1 text-lg font-black leading-tight text-slate-900">로컬 매장의 발견 확률을 높이는 여정</p>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-black text-rose-600">
          <Gem size={17} /> LEVEL 16+
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white px-4 py-2 text-xs font-black tracking-[0.22em] text-rose-500 shadow-sm">
        <Sparkles size={14} /> {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{desc}</p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-pink-50 to-emerald-100 px-4 pb-16 pt-32 sm:pt-40">
      <FantasyBackdrop />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.2em] text-rose-500 shadow-sm backdrop-blur">
            <Star size={14} /> SOYOUNG WORLD OPEN
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.06] tracking-[-0.03em] text-slate-950 sm:text-7xl">
            브랜드 성장의
            <span className="block text-rose-500">모험을 시작하세요</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-9 text-slate-700 sm:text-xl">
            진주·창원 로컬 매장을 위한 SNS 마케팅 월드. 인스타그램 운영부터 릴스, 블로그, 네이버 플레이스, 진주어때 채널 연계까지 한 흐름으로 설계합니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white shadow-[0_18px_40px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:bg-rose-500">
              MARKETING START <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/90 bg-white/85 px-7 py-4 text-base font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:text-rose-500">
              포트폴리오 보기 <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <WorldMapVisual />
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative z-20 -mt-10 px-4" aria-label="운영 지표">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[32px] border border-white/80 bg-white/86 p-4 shadow-[0_24px_70px_rgba(71,85,105,0.15)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`stat-card stat-${item.tone}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black tracking-[0.22em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">{item.value}</p>
                </div>
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-white/80 shadow-inner">
                  <Icon size={24} />
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">
                <div className="h-full w-[78%] rounded-full bg-current opacity-70" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24">
      <SectionTitle
        eyebrow="SKILL SELECT"
        title="매장에 필요한 마케팅 스킬을 조합합니다"
        desc="직업 선택 화면처럼 보이지만 내용은 실제 운영 서비스입니다. 채널별 역할을 분명히 나누고, 매장의 방문 이유가 고객에게 닿도록 구성합니다."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_55px_rgba(71,85,105,0.1)]"
            >
              <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${service.color}`} />
              <div className="flex items-start justify-between gap-4">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition group-hover:scale-105`}>
                  <Icon size={25} />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black tracking-[0.14em] text-slate-500">{service.level}</span>
              </div>
              <h3 className="mt-6 text-2xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 min-h-[84px] text-sm font-medium leading-7 text-slate-600">{service.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-extrabold text-rose-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function MiniVisual({ kind }: { kind: string }) {
  const palette: Record<string, string> = {
    cafe: "from-amber-100 via-rose-100 to-sky-100",
    terrace: "from-sky-100 via-emerald-100 to-amber-100",
    nail: "from-pink-100 via-rose-100 to-purple-100",
    spa: "from-emerald-100 via-sky-100 to-white",
    dining: "from-amber-100 via-orange-100 to-rose-100",
    beef: "from-rose-100 via-amber-100 to-orange-100",
    interior: "from-stone-100 via-sky-100 to-emerald-100",
    salon: "from-purple-100 via-pink-100 to-white",
  };

  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gradient-to-br ${palette[kind] ?? palette.cafe}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.95),transparent_26%),radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.62),transparent_22%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[34%] rounded-t-[50%] bg-emerald-200/65" />
      <div className="absolute bottom-[24%] left-[16%] h-[31%] w-[28%] rounded-t-full bg-white/78 shadow-lg" />
      <div className="absolute bottom-[26%] right-[14%] h-[24%] w-[34%] rounded-[22px] bg-white/75 shadow-lg" />
      <div className="absolute left-[22%] top-[18%] h-[40%] w-2 rotate-12 rounded-full bg-amber-700/20" />
      <div className="absolute right-[24%] top-[18%] grid h-12 w-12 place-items-center rounded-2xl bg-white/80 text-rose-500 shadow-md">
        {kind === "interior" ? <ShieldCheck size={23} /> : kind === "dining" || kind === "beef" ? <Store size={23} /> : kind === "spa" || kind === "salon" || kind === "nail" ? <Sparkles size={23} /> : <Camera size={23} />}
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white px-4 py-24">
      <SectionTitle
        eyebrow="WORLD STAGE"
        title="업체별 퀘스트 카드로 보는 포트폴리오"
        desc="실제 이미지 의존 없이 업종별 분위기를 CSS 일러스트로 구성했습니다. 귀엽지만 영업 제안서에 넣어도 어색하지 않은 톤을 목표로 했습니다."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {portfolio.map((work, index) => (
          <motion.article
            key={work.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035 }}
            className="group rounded-[30px] border border-slate-100 bg-slate-50 p-3 shadow-[0_18px_60px_rgba(71,85,105,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(71,85,105,0.13)]"
          >
            <MiniVisual kind={work.kind} />
            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-rose-500 shadow-sm">{work.type}</span>
                <span className="text-xs font-black tracking-[0.16em] text-slate-400">QUEST</span>
              </div>
              <h3 className="mt-4 text-xl font-black leading-tight text-slate-950">{work.name}</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{work.quest}</p>
              <p className="mt-4 border-t border-slate-200 pt-4 text-xs font-black tracking-[0.08em] text-slate-500">{work.mission}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50 px-4 py-24">
      <SectionTitle
        eyebrow="QUEST LINE"
        title="상담부터 개선까지 한 줄로 이어지는 진행 단계"
        desc="처음 문의한 뒤 무엇이 진행되는지 명확해야 실제 영업 페이지로 신뢰가 생깁니다. 귀여운 퀘스트 진행바 안에 실무 프로세스를 담았습니다."
      />
      <div className="mx-auto max-w-7xl rounded-[34px] border border-white bg-white/75 p-5 shadow-[0_20px_70px_rgba(71,85,105,0.1)] backdrop-blur">
        <div className="grid gap-4 lg:grid-cols-5">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="relative rounded-[26px] border border-slate-100 bg-white p-5"
              >
                {index < process.length - 1 && <div className="absolute -right-5 top-1/2 hidden h-1 w-6 -translate-y-1/2 rounded-full bg-rose-200 lg:block" />}
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon size={23} />
                  </span>
                  <span className="text-xs font-black tracking-[0.2em] text-rose-400">STEP {String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-slate-600">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#fff7ef] px-4 py-24">
      <SectionTitle
        eyebrow="ITEM SHOP"
        title="서비스 가격은 아이템 상점처럼 명확하게"
        desc="귀여운 패키지 카드 안에서도 금액과 포함 범위는 바로 이해되도록 정리했습니다."
      />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {pricing.map((plan) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-[30px] border p-7 shadow-[0_18px_60px_rgba(71,85,105,0.1)] ${
              plan.featured ? "border-slate-950 bg-slate-950 text-white" : "border-white bg-white text-slate-950"
            }`}
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black tracking-[0.16em] ${plan.featured ? "bg-white/12 text-amber-100" : "bg-rose-50 text-rose-500"}`}>
              <Gem size={14} /> {plan.badge}
            </div>
            <h3 className="text-2xl font-black">{plan.name}</h3>
            <strong className={`mt-3 block text-4xl font-black ${plan.featured ? "text-white" : "text-rose-500"}`}>{plan.price}</strong>
            <p className={`mt-5 min-h-[84px] text-sm font-medium leading-7 ${plan.featured ? "text-white/74" : "text-slate-600"}`}>{plan.desc}</p>
            <ul className="mt-6 grid gap-3">
              {plan.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm font-bold">
                  <CheckCircle2 size={17} className={plan.featured ? "mt-0.5 text-emerald-200" : "mt-0.5 text-emerald-500"} />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black transition ${
                plan.featured ? "bg-white text-slate-950 hover:bg-rose-50" : "bg-slate-950 text-white hover:bg-rose-500"
              }`}
            >
              패키지 문의 <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-pink-50 to-white px-4 py-24">
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,transparent,#ffffff)]" />
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white bg-white/84 p-7 text-center shadow-[0_28px_90px_rgba(71,85,105,0.16)] backdrop-blur md:p-12">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-rose-300 to-sky-300 text-white shadow-lg">
          <HeartHandshake size={30} />
        </div>
        <p className="text-xs font-black tracking-[0.24em] text-rose-500">FINAL QUEST</p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">마케팅 모험을 시작할 준비가 됐다면</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
          매장 업종, 현재 채널, 원하는 목표를 알려주세요. 진주·창원 로컬 고객에게 자연스럽게 닿는 콘텐츠 흐름을 함께 설계하겠습니다.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://instagram.com/jinju_about"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-rose-500"
          >
            <InstagramIcon /> @jinju_about 문의
          </a>
          <a
            href="tel:"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 transition hover:-translate-y-1 hover:border-rose-200 hover:text-rose-500"
          >
            <Phone size={18} /> 전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black tracking-[0.24em]">SOYOUNG WORLD</p>
          <p className="mt-2 text-sm font-medium text-white/55">진주·창원 로컬 매장을 위한 SNS 마케팅 포트폴리오</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold text-white/70">
          <span>Instagram</span>
          <span>@jinju_about</span>
          <span>Jinju · Changwon</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
