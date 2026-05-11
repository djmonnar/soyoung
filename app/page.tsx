"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Star, CheckCircle, ChevronDown, Sparkles,
  MapPin, ArrowRight, Camera, Hash, Globe, Heart,
  TrendingUp, Users, MessageCircle, BarChart3, Play, Menu, X
} from "lucide-react";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const Instagram = InstagramIcon;

// ─── Data ────────────────────────────────────────────────────────────────────

const CLIENTS = [
  { name: "옳커피", area: "진주", emoji: "☕" },
  { name: "설레움 55테라스", area: "창원", emoji: "🌿" },
  { name: "뷰티 앤 힐링", area: "대안", emoji: "💆" },
  { name: "3시15분", area: "신안", emoji: "⏰" },
  { name: "화담 건축인테리어", area: "진주", emoji: "🏠" },
  { name: "송화한정식", area: "진주", emoji: "🍱" },
  { name: "교방한우", area: "진주", emoji: "🥩" },
  { name: "설레움 55", area: "진주", emoji: "🌸" },
  { name: "차크란 에스테틱", area: "진주", emoji: "✨" },
  { name: "그레이 로제 제시뷰티", area: "진주", emoji: "💄" },
  { name: "네일 도로시", area: "진주", emoji: "💅" },
  { name: "래푸스", area: "대안", emoji: "🌹" },
  { name: "클라운지", area: "평거", emoji: "🛋️" },
  { name: "핸디드 홈케어", area: "진주", emoji: "🏡" },
  { name: "호박오리", area: "평거", emoji: "🍲" },
  { name: "호박오리", area: "초전", emoji: "🍲" },
];

const SERVICES = [
  {
    icon: Instagram,
    title: "인스타그램 관리",
    desc: "트렌디한 피드 기획부터 릴스 제작, 해시태그 전략까지 계정 성장을 위한 전방위 관리",
    tags: ["피드 기획", "릴스 제작", "해시태그"],
    color: "from-pink-400 to-rose-400",
    bg: "from-pink-50 to-rose-50",
  },
  {
    icon: Globe,
    title: "블로그 포스팅",
    desc: "SEO 최적화된 네이버 블로그 포스팅으로 검색 노출을 극대화하는 전략적 콘텐츠 작성",
    tags: ["SEO 최적화", "키워드 분석", "콘텐츠 기획"],
    color: "from-fuchsia-400 to-pink-400",
    bg: "from-fuchsia-50 to-pink-50",
  },
  {
    icon: MapPin,
    title: "네이버 플레이스",
    desc: "지역 검색 상위 노출을 위한 플레이스 최적화 및 리뷰 관리로 오프라인 방문객 유입 증대",
    tags: ["플레이스 최적화", "리뷰 관리", "지역 노출"],
    color: "from-rose-400 to-pink-500",
    bg: "from-rose-50 to-pink-50",
  },
  {
    icon: Play,
    title: "진주어때 채널",
    desc: "진주 지역 대표 채널 '진주어때'와 연계한 릴스 제작 및 게시물 업로드로 로컬 마케팅 강화",
    tags: ["릴스 제작", "로컬 마케팅", "채널 연계"],
    color: "from-pink-500 to-fuchsia-500",
    bg: "from-pink-50 to-fuchsia-50",
  },
];

const STATS = [
  { label: "관리 업체", value: "16+", icon: Users },
  { label: "월 게시물", value: "60+", icon: Camera },
  { label: "팔로워 증가율", value: "↑300%", icon: TrendingUp },
  { label: "평균 참여율", value: "8%+", icon: Heart },
];

const PRICING = [
  {
    name: "월정기 관리",
    price: "300,000",
    unit: "/ 월",
    highlight: true,
    badge: "BEST",
    items: [
      "인스타그램 피드 게시글 작성",
      "공지사항 업로드",
      "동영상 (릴스) 제작",
      "인스타그램 계정 전체 관리",
      "네이버 플레이스 관리",
    ],
  },
  {
    name: "블로그 포스팅",
    price: "30,000 ~ 50,000",
    unit: "/ 건",
    highlight: false,
    badge: "단건",
    items: [
      "SEO 최적화 키워드 포함",
      "네이버 블로그 포스팅",
      "사진 편집 및 레이아웃",
      "업로드 완료 보고",
    ],
  },
  {
    name: "진주어때 패키지",
    price: "280,000",
    unit: "릴스 제작",
    highlight: false,
    badge: "채널",
    items: [
      "진주어때 채널 릴스 제작",
      "게시물 업로드: 150,000원",
      "로컬 타겟 마케팅",
      "채널 연계 노출",
    ],
    sub: "게시물 업로드 별도 150,000원",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "소개" },
    { href: "#services", label: "서비스" },
    { href: "#clients", label: "클라이언트" },
    { href: "#pricing", label: "가격안내" },
    { href: "#contact", label: "문의하기" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-pink-100/50 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black gradient-text">박소영</span>
          <span className="text-xs text-pink-400 font-medium tracking-widest hidden sm:inline">MARKETING</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-600 hover:text-pink-500 font-medium transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://instagram.com/jinju_about"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white text-sm font-semibold shimmer-btn hover:shadow-lg hover:shadow-pink-200 transition-all"
        >
          <Instagram size={14} />
          @jinju_about
        </a>

        <button
          className="md:hidden text-pink-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-pink-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-700 font-medium hover:text-pink-500 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Decorative blobs */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] blob-animate opacity-30"
        style={{
          background: "linear-gradient(-45deg, #ffb6c1, #ff69b4, #ffc0cb, #ff1493)",
          backgroundSize: "400% 400%",
          animation: "blobMorph 12s ease-in-out infinite, gradientShift 10s ease infinite",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] blob-animate opacity-20"
        style={{
          background: "linear-gradient(-45deg, #ffc0cb, #ffb6c1, #ff69b4)",
          backgroundSize: "400% 400%",
          animation: "blobMorph 15s ease-in-out infinite 2s, gradientShift 8s ease infinite",
        }}
      />

      {/* Floating decorations */}
      <div className="absolute top-[15%] left-[8%] float-1 opacity-60">
        <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center shadow-lg shadow-pink-100">
          <Instagram size={22} className="text-pink-400" />
        </div>
      </div>
      <div className="absolute top-[25%] right-[10%] float-2 opacity-60">
        <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center shadow-lg shadow-pink-100">
          <Camera size={18} className="text-rose-400" />
        </div>
      </div>
      <div className="absolute bottom-[25%] left-[6%] float-3 opacity-50">
        <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center shadow-lg shadow-pink-100">
          <Hash size={24} className="text-pink-500" />
        </div>
      </div>
      <div className="absolute top-[55%] right-[6%] float-1 opacity-50">
        <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur flex items-center justify-center shadow-lg shadow-pink-100">
          <Star size={18} className="text-yellow-400" />
        </div>
      </div>

      {/* Sparkle dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute sparkle"
          style={{
            top: `${15 + i * 12}%`,
            left: `${20 + i * 13}%`,
            animationDelay: `${i * 0.4}s`,
            width: 6, height: 6,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ffb6c1, #ff69b4)",
          }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 pill mb-8 shadow-md shadow-pink-200"
        >
          <Sparkles size={12} />
          <span>SNS 마케팅 전문가</span>
          <Sparkles size={12} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl sm:text-7xl font-black leading-tight mb-6"
        >
          <span className="text-gray-800">브랜드를</span>
          <br />
          <span className="gradient-text">아름답게</span>
          <br />
          <span className="text-gray-800">성장시킵니다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-500 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          인스타그램 · 블로그 · 네이버플레이스 · 진주어때
          <br />
          <span className="text-pink-500 font-semibold">박소영</span>이 당신의 브랜드 이야기를 전합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="shimmer-btn flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 text-white font-bold text-lg shadow-xl shadow-pink-200 hover:shadow-2xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300"
          >
            지금 문의하기 <ArrowRight size={20} />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border-2 border-pink-200 text-pink-500 font-bold text-lg hover:border-pink-400 hover:-translate-y-1 transition-all duration-300"
          >
            서비스 보기 <ChevronDown size={20} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4 card-hover">
              <s.icon size={22} className="text-pink-400 mb-2 mx-auto" />
              <div className="text-2xl font-black gradient-text">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-pink-400 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ffb6c1, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-pink-200 spin-slow" />
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌸</div>
                  <div className="font-black text-3xl gradient-text">박소영</div>
                  <div className="text-sm text-pink-400 font-medium mt-1">SNS 마케터</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute top-4 right-4 glass-pink rounded-2xl p-3 float-1 shadow-lg">
                <Instagram size={20} className="text-pink-500" />
              </div>
              <div className="absolute bottom-8 left-2 glass-pink rounded-2xl p-3 float-2 shadow-lg">
                <MapPin size={20} className="text-rose-500" />
              </div>
              <div className="absolute top-1/2 -right-4 glass-pink rounded-2xl p-3 float-3 shadow-lg">
                <TrendingUp size={20} className="text-fuchsia-500" />
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="pill mb-6 inline-block shadow-md shadow-pink-100">
              <Sparkles size={11} className="mr-1" /> About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              <span className="text-gray-800">지역 브랜드의</span>
              <br />
              <span className="gradient-text">디지털 파트너</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg mb-8">
              진주 · 창원 지역을 기반으로 소상공인과 로컬 브랜드의
              온라인 존재감을 만들어드립니다. 단순 업로드가 아닌,
              <span className="text-pink-500 font-semibold"> 브랜드의 스토리</span>를
              담아 고객과 진심으로 소통하는 콘텐츠를 만듭니다.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Instagram, text: "인스타그램 계정 운영 & 성장 전략" },
                { icon: Globe, text: "네이버 블로그 SEO 최적화 포스팅" },
                { icon: MapPin, text: "네이버 플레이스 상위 노출 관리" },
                { icon: Play, text: "진주어때 채널 릴스 & 게시물 제작" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-pink-400" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com/jinju_about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5 transition-all"
            >
              <Instagram size={16} />
              @jinju_about 팔로우
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fff0f3 0%, #ffffff 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-block shadow-md shadow-pink-100">
            <Star size={11} className="mr-1" /> Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            제공하는 <span className="gradient-text">서비스</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            브랜드 성장에 필요한 모든 SNS 마케팅을 한 곳에서 해결하세요
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative card-hover rounded-3xl p-6 bg-gradient-to-br ${svc.bg} border border-pink-100 overflow-hidden group`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${svc.color} rounded-3xl`}
                style={{ opacity: 0, mixBlendMode: "multiply" }}
              />

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-lg shadow-pink-100 group-hover:scale-110 transition-transform`}>
                <svc.icon size={22} className="text-white" />
              </div>

              <h3 className="font-black text-gray-800 text-lg mb-3 group-hover:text-gray-900">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {svc.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/70 text-pink-500 font-medium border border-pink-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 glass rounded-3xl p-8 border border-pink-100"
        >
          <h3 className="text-xl font-black text-center text-gray-700 mb-8">
            📋 진행 프로세스
          </h3>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "상담", desc: "업체 파악 및 목표 설정", emoji: "💬" },
              { step: "02", title: "기획", desc: "콘텐츠 방향성 & 전략 수립", emoji: "📝" },
              { step: "03", title: "제작", desc: "게시글·릴스 제작 및 업로드", emoji: "✨" },
              { step: "04", title: "분석", desc: "성과 리포트 & 전략 개선", emoji: "📊" },
            ].map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < 3 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-gradient-to-r from-pink-300 to-pink-100" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 text-white font-black text-lg flex items-center justify-center mx-auto mb-3 shadow-lg shadow-pink-100">
                  {p.emoji}
                </div>
                <div className="text-xs text-pink-400 font-bold tracking-widest mb-1">STEP {p.step}</div>
                <div className="font-black text-gray-800">{p.title}</div>
                <div className="text-xs text-gray-500 mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section id="clients" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ff69b4 1px, transparent 0)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-block shadow-md shadow-pink-100">
            <Heart size={11} className="mr-1" /> Clients
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            함께하는 <span className="gradient-text">클라이언트</span>
          </h2>
          <p className="text-gray-500 text-lg">
            진주 · 창원 지역의 다양한 브랜드와 성장을 함께합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((c, i) => (
            <motion.div
              key={`${c.name}-${c.area}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-hover glass rounded-2xl p-5 border border-pink-100 text-center group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {c.emoji}
              </div>
              <div className="font-bold text-gray-800 text-sm leading-tight">{c.name}</div>
              <div className="inline-block mt-2 px-2 py-0.5 rounded-full bg-pink-50 text-pink-400 text-xs font-medium">
                📍 {c.area}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Users, text: "16개 업체 관리 중" },
            { icon: MapPin, text: "진주·창원 지역 기반" },
            { icon: TrendingUp, text: "꾸준한 팔로워 성장" },
            { icon: MessageCircle, text: "빠른 소통 & 피드백" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 px-5 py-3 glass rounded-full border border-pink-100 text-gray-600 text-sm font-medium">
              <b.icon size={15} className="text-pink-400" />
              {b.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #fff0f3 0%, #ffe8f0 50%, #fff0f3 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-block shadow-md shadow-pink-100">
            <BarChart3 size={11} className="mr-1" /> Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            합리적인 <span className="gradient-text">가격 안내</span>
          </h2>
          <p className="text-gray-500 text-lg">투명하고 명확한 가격으로 부담 없이 시작하세요</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative card-hover rounded-3xl overflow-hidden ${
                plan.highlight
                  ? "bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-400 text-white glow-pink"
                  : "glass border border-pink-100 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-t-3xl" />
              )}

              <div className="p-8">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-5 ${
                  plan.highlight
                    ? "bg-white/20 text-white"
                    : "bg-pink-50 text-pink-500"
                }`}>
                  {plan.badge}
                </div>

                <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <span className={`text-3xl font-black ${plan.highlight ? "text-white" : "gradient-text"}`}>
                    {plan.price}
                    <span className="text-base">원</span>
                  </span>
                  <span className={`ml-1 text-sm font-medium ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
                    {plan.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white/80" : "text-pink-400"}`}
                      />
                      <span className={plan.highlight ? "text-white/90" : "text-gray-600"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.sub && (
                  <p className={`text-xs mb-4 px-3 py-2 rounded-xl ${
                    plan.highlight ? "bg-white/15 text-white/80" : "bg-pink-50 text-pink-400"
                  }`}>
                    ✦ {plan.sub}
                  </p>
                )}

                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm transition-all ${
                    plan.highlight
                      ? "bg-white text-pink-500 hover:bg-pink-50"
                      : "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:shadow-lg hover:shadow-pink-200"
                  }`}
                >
                  문의하기 <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          ✦ 업체 규모 및 서비스 범위에 따라 맞춤 견적 상담 가능합니다
        </motion.p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 rounded-full"
        style={{ background: "radial-gradient(circle, #ff69b4, transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill mb-4 inline-block shadow-md shadow-pink-100">
            <MessageCircle size={11} className="mr-1" /> Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
            지금 바로 <span className="gradient-text">문의하세요</span>
          </h2>
          <p className="text-gray-500 text-lg">브랜드 성장을 위한 첫 걸음, 함께 시작합니다</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Instagram card */}
          <motion.a
            href="https://instagram.com/jinju_about"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-hover glass rounded-3xl p-8 border border-pink-100 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-400 flex items-center justify-center mb-5 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
              <Instagram size={30} className="text-white" />
            </div>
            <h3 className="font-black text-xl text-gray-800 mb-2">인스타그램 DM</h3>
            <p className="text-pink-500 font-semibold text-lg mb-3">@jinju_about</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              인스타그램 DM으로 편하게 문의 주세요.
              빠른 시간 내 답변 드리겠습니다.
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-pink-400 font-semibold text-sm">
              DM 보내기 <ArrowRight size={14} />
            </span>
          </motion.a>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass rounded-3xl p-6 border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <MapPin size={20} className="text-pink-500" />
                </div>
                <div>
                  <div className="font-black text-gray-800">담당자</div>
                  <div className="text-gray-500">박소영 마케터</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <MapPin size={20} className="text-rose-500" />
                </div>
                <div>
                  <div className="font-black text-gray-800">활동 지역</div>
                  <div className="text-gray-500">경남 진주 · 창원 중심</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <BarChart3 size={20} className="text-fuchsia-500" />
                </div>
                <div>
                  <div className="font-black text-gray-800">전문 채널</div>
                  <div className="text-gray-500">인스타 · 블로그 · 플레이스 · 진주어때</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
              <p className="text-gray-600 text-sm leading-relaxed">
                💬 <span className="font-semibold text-pink-500">맞춤 상담</span> 가능합니다.<br />
                업체 규모와 목표에 따라 최적의 패키지를 제안해 드립니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden py-16"
      style={{ background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #c71585 100%)" }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-white font-black text-2xl mb-3">박소영</div>
            <div className="text-white/70 text-sm font-medium tracking-widest mb-4">SNS MARKETING</div>
            <p className="text-white/60 text-sm leading-relaxed">
              지역 브랜드의 디지털 성장을 함께하는 SNS 마케팅 파트너
            </p>
          </div>

          <div>
            <div className="text-white font-bold mb-4">서비스</div>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>인스타그램 관리</li>
              <li>네이버 블로그 포스팅</li>
              <li>네이버 플레이스 관리</li>
              <li>진주어때 채널 연계</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold mb-4">연락처</div>
            <a
              href="https://instagram.com/jinju_about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Instagram size={15} />
              @jinju_about
            </a>
            <p className="text-white/60 text-sm mt-3">📍 경남 진주 · 창원</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2025 박소영 마케팅. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Heart size={12} className="text-white/60" />
            Made with love for local brands
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
