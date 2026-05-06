import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a4a] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 병원 정보 */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-300">봉담이룸내과의원</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            신장내과 및 일반내과 전문<br />
            환자 중심의 따뜻한 진료를 약속드립니다.
          </p>
        </div>

        {/* 진료 안내 */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-300">진료시간</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="font-medium text-blue-200 text-xs mt-1">외래진료</li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400 shrink-0" />
              월·수·금 09:30 ~ 18:00
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400 shrink-0" />
              화·목·토 09:30 ~ 13:00
            </li>
            <li className="font-medium text-blue-200 text-xs mt-2">인공신장실</li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400 shrink-0" />
              월·수·금 06:00 ~ 17:00
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-blue-400 shrink-0" />
              화·목·토 06:00 ~ 12:30
            </li>
          </ul>
        </div>

        {/* 연락처 */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-blue-300">오시는 길</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="flex items-start gap-2">
              <Phone size={14} className="text-blue-400 mt-0.5 shrink-0" />
              <span>대표 031-297-9666<br />투석문의 031-297-9667<br />팩스 031-297-9665</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
              <span>경기도 화성시 봉담읍 상리1길 109<br />이룸프라자 2층, 3층</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 하단 카피라이트 */}
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-xs">
        © 2025 봉담이룸내과의원. All rights reserved.
      </div>
    </footer>
  );
}
