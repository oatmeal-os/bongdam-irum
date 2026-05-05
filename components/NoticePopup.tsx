"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "notice_popup_hidden_until";

export default function NoticePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hiddenUntil = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toDateString();
    if (hiddenUntil !== today) {
      setVisible(true);
    }
  }, []);

  const close = () => setVisible(false);

  const hideToday = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-[#d6e8f5] rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">

        {/* 닫기 버튼 */}
        <div className="flex justify-end px-4 pt-3">
          <button onClick={close} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* 팝업 내용 */}
        <div className="px-8 pt-2 pb-6 text-center">
          <p className="text-[#E04A2F] font-bold text-sm mb-1">봉담이룸내과</p>
          <h2 className="text-[#1a3a6b] font-extrabold text-4xl mb-5 tracking-tight">진료시간변경</h2>

          <p className="text-gray-800 text-base mb-1">
            <span className="text-[#E04A2F] font-bold">5월, 6월</span> 2달간 외래 진료시간이 변경됩니다.
          </p>
          <p className="text-gray-600 text-sm mb-6">진료에 불편을 드려 죄송합니다.</p>

          {/* 구분선 */}
          <div className="h-px bg-[#6fa8d0] mb-5" />

          {/* 시간표 */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="bg-[#c5d9ea] text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shrink-0 w-28 text-center">
                월 / 수 / 금
              </span>
              <div>
                <p className="text-[#1a3a6b] font-extrabold text-2xl">9:30 - 18:00</p>
                <p className="text-[#1a3a6b] font-semibold text-xs mt-0.5">( 점심시간 13:00 - 14:00 )</p>
              </div>
            </div>
            <div className="h-px bg-[#6fa8d0]" />
            <div className="flex items-center gap-4">
              <span className="bg-[#c5d9ea] text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full shrink-0 w-28 text-center">
                화 / 목 / 토
              </span>
              <p className="text-[#1a3a6b] font-extrabold text-2xl">9:30 - 13:00</p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="h-px bg-[#6fa8d0] mt-5 mb-5" />

          {/* 로고 */}
          <div className="flex items-center justify-center gap-2">
            <Image src="/logo_0.png" alt="봉담이룸내과의원" width={32} height={32} className="object-contain" />
            <span className="text-gray-700 font-bold text-sm">봉담이룸내과의원</span>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex border-t border-[#6fa8d0]">
          <button
            onClick={hideToday}
            className="flex-1 py-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-black/5 transition-colors"
          >
            오늘 하루 보지않기
          </button>
          <div className="w-px bg-[#6fa8d0]" />
          <button
            onClick={close}
            className="flex-1 py-3 text-sm font-semibold text-[#1a3a6b] hover:bg-black/5 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
