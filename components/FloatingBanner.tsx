"use client";

import Image from "next/image";
import { Phone, ChevronUp } from "lucide-react";

export default function FloatingBanner() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* 데스크탑: 우측 고정 세로 배너 */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2">
        {/* dia 로고 */}
        <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
          <Image src="/about/dia.png" alt="투석전문의" width={64} height={64} className="object-contain" />
        </div>

        {/* 네이버 지도 */}
        <a
          href="https://naver.me/Gq8leH6K"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-md p-2 flex flex-col items-center gap-1 hover:shadow-lg transition-shadow w-20"
        >
          <Image src="/naver-map.png" alt="네이버 지도" width={36} height={36} className="object-contain" />
          <span className="text-xs text-gray-600 font-medium">지도</span>
        </a>

        {/* 블로그 */}
        <a
          href="https://blog.naver.com/irummed"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl shadow-md p-2 flex flex-col items-center gap-1 hover:shadow-lg transition-shadow w-20"
        >
          <Image src="/naverblog.png" alt="네이버 블로그" width={36} height={36} className="object-contain" />
          <span className="text-xs text-gray-600 font-medium">블로그</span>
        </a>

        {/* 전화번호 */}
        <a
          href="tel:0312979666"
          className="bg-[#1565C0] rounded-xl shadow-md p-2 flex flex-col items-center gap-1 hover:bg-[#1976D2] transition-colors w-20"
        >
          <Phone size={24} className="text-white" />
          <span className="text-xs text-white font-medium text-center leading-tight">031-297-9666</span>
        </a>
      </div>

      {/* 모바일: 하단 고정 가로 배너 */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        {/* dia 로고 */}
        <div className="flex-1 flex flex-col items-center justify-center py-2">
          <Image src="/about/dia.png" alt="투석전문의" width={44} height={44} className="object-contain" />
        </div>

        {/* 전화걸기 */}
        <a
          href="tel:0312979666"
          className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-gray-600"
        >
          <Phone size={22} />
          <span className="text-xs font-medium">전화걸기</span>
        </a>

        {/* 네이버 지도 */}
        <a
          href="https://naver.me/Gq8leH6K"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5"
        >
          <Image src="/naver-map.png" alt="네이버 지도" width={26} height={26} className="object-contain" />
          <span className="text-xs text-gray-600 font-medium">네이버 지도</span>
        </a>

        {/* Top */}
        <button
          onClick={scrollToTop}
          className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-gray-600"
        >
          <ChevronUp size={22} />
          <span className="text-xs font-medium">Top</span>
        </button>
      </div>
    </>
  );
}
