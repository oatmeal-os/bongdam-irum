"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원소개" },
  { href: "/doctors", label: "의료진" },
  { href: "/departments", label: "진료과목" },
  { href: "/gallery", label: "둘러보기" },
  { href: "/notice", label: "공지사항" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* 상단 정보 바 */}
      <div className="bg-[#1565C0] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-end items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>대표: 031-297-9666 &nbsp;|&nbsp; 투석문의: 031-297-9667</span>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="bg-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* 로고 */}
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="봉담이룸내과의원"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-[#1565C0] hover:bg-blue-50 rounded font-medium text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-2 text-gray-700 border-b border-gray-100 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
