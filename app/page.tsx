import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ChevronRight, Stethoscope, Heart, Droplets, Activity } from "lucide-react";
import KakaoMap from "@/components/KakaoMap";
import NoticePopup from "@/components/NoticePopup";
import { getAllNotices } from "@/lib/notices";

const services = [
  {
    icon: Droplets,
    title: "신장내과 · 인공신장실",
    desc: "만성신부전, 혈액투석, 단백뇨 등 신장 질환을 전문으로 진료합니다.",
    href: "/departments",
  },
  {
    icon: Stethoscope,
    title: "일반내과",
    desc: "감기, 소화기 질환, 고혈압, 당뇨 등 내과 전반을 진료합니다.",
    href: "/departments",
  },
  {
    icon: Heart,
    title: "만성질환 관리",
    desc: "고혈압, 당뇨, 이상지질혈증 등 만성질환을 체계적으로 관리합니다.",
    href: "/departments",
  },
  {
    icon: Activity,
    title: "기타진료",
    desc: "금연치료, 수액, 예방접종, 영양주사 등 다양한 진료를 제공합니다.",
    href: "/departments",
  },
];

// 협력병원 로고 이미지 목록
// 사용법: public/partners/ 폴더에 이미지 파일을 넣고 아래 배열에 추가하세요
// 예시: { src: "/partners/병원이름.png", alt: "병원이름" }
const partners: { src: string; alt: string }[] = [
  { src: "/partners/aju.png", alt: "아주대학교병원" },
  { src: "/partners/cha.png", alt: "차병원" },
  { src: "/partners/dongtan.png", alt: "동탄성심병원" },
  { src: "/partners/hanyang.png", alt: "한양대학교병원" },
  { src: "/partners/kroea.png", alt: "고려대학교병원" },
  { src: "/partners/vincent.png", alt: "빈센트병원" },
];
const PARTNER_PLACEHOLDER_COUNT = 6; // 로고 추가 전 보여줄 빈 슬롯 수

export default function Home() {
  const notices = getAllNotices().slice(0, 3);
  return (
    <div>
      <NoticePopup />
      {/* 히어로 배너 */}
      <section
        className="relative text-white py-28 px-4"
        style={{ backgroundImage: "url('/gallery/외래/opd1.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-medium mb-3 tracking-widest uppercase">
            Bongdam Irum Medicine Center
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow">
            봉담이룸내과의원
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-8 drop-shadow">
            부설 인공신장실
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/departments"
              className="bg-white text-[#1565C0] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              진료과목 안내
            </Link>
            <Link
              href="/notice"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              공지사항 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 빠른 정보 바 */}
      <section className="bg-[#0D47A1] text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-blue-300 shrink-0" />
            <div>
              <p className="text-blue-300 text-xs">대표전화</p>
              <p className="font-semibold text-sm">031-297-9666</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-blue-300 shrink-0" />
            <div>
              <p className="text-blue-300 text-xs">위치</p>
              <p className="font-semibold text-sm">화성시 봉담읍 상리1길 109, 2·3층</p>
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 + 진료시간 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 공지사항 */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">공지사항</h2>
              <Link href="/notice" className="text-[#1565C0] text-sm flex items-center hover:underline">
                더보기 <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              {notices.map((item) => (
                <Link
                  key={item.id}
                  href={`/notice/${item.id}`}
                  className="flex justify-between items-center py-3 border-b border-gray-100 hover:text-[#1565C0] transition-colors"
                >
                  <span className="text-sm text-gray-700 truncate pr-4">{item.title}</span>
                  <span className="text-xs text-gray-400 shrink-0">{item.date}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 진료시간 안내 */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">진료시간 안내</h2>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td colSpan={2} className="pt-2 pb-1 text-[#1565C0] font-bold text-xs tracking-wide">외래진료</td>
                </tr>
                {[
                  { day: "월·수·금", time: "09:30 ~ 18:00" },
                  { day: "화·목·토", time: "09:30 ~ 13:00" },
                ].map((row) => (
                  <tr key={row.day} className="border-t border-blue-100">
                    <td className="py-2.5 text-gray-600 font-medium w-36">{row.day}</td>
                    <td className="py-2.5 text-gray-800 font-bold">{row.time}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="pt-5 pb-1 text-[#1565C0] font-bold text-xs tracking-wide">인공신장실</td>
                </tr>
                {[
                  { day: "월·수·금", time: "06:00 ~ 17:00" },
                  { day: "화·목·토", time: "06:00 ~ 12:30" },
                ].map((row) => (
                  <tr key={row.day} className="border-t border-blue-100">
                    <td className="py-2.5 text-gray-600 font-medium w-36">{row.day}</td>
                    <td className="py-2.5 text-gray-800 font-bold">{row.time}</td>
                  </tr>
                ))}
                <tr className="border-t border-blue-200">
                  <td className="py-2.5 text-gray-600 font-medium">일요일 · 공휴일(외래)</td>
                  <td className="py-2.5 text-gray-400 font-bold">휴진</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs text-gray-500">※ 점심시간 13:00 ~ 14:00, 진료종료 10분전 접수 마감입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 진료 서비스 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">진료 서비스</h2>
            <p className="text-gray-500 mt-2">전문적인 의료서비스를 제공합니다</p>
            <div className="w-16 h-1 bg-[#1565C0] mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1565C0] transition-colors">
                  <svc.icon size={24} className="text-[#1565C0] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="flex items-center text-[#1565C0] text-sm mt-4 font-medium">
                  자세히 보기 <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 협력병원 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">협력병원</h2>
            <div className="w-16 h-1 bg-[#1565C0] mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {partners.length > 0
              ? partners.map((p) => (
                  <div
                    key={p.src}
                    className="flex items-center justify-center h-20 bg-gray-50 rounded-xl border border-gray-100 p-3"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={120}
                      height={60}
                      className="object-contain max-h-14"
                    />
                  </div>
                ))
              : Array.from({ length: PARTNER_PLACEHOLDER_COUNT }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center h-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200"
                  >
                    <span className="text-gray-300 text-xs">로고 추가</span>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 배너 */}
      <section className="bg-gray-800 text-white py-10 text-center">
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <h2 className="text-xl font-bold mb-2">오시는 길</h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className="text-gray-300 text-base">경기도 화성시 봉담읍 상리1길 109, 이룸프라자 2층·3층</p>
            <a
              href="https://naver.me/Gq8leH6K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0"
            >
              <Image src="/naver-map.png" alt="네이버 지도" width={18} height={18} className="rounded-sm" />
              네이버 지도
            </a>
          </div>
        </div>
        <div className="w-full max-w-5xl mx-auto px-4">
          <KakaoMap />
        </div>
      </section>
    </div>
  );
}
