import { Heart, Award, Users, Building2, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  { icon: Heart, title: "환자 중심", desc: "환자 한 분 한 분의 건강을 최우선으로 생각합니다." },
  { icon: Award, title: "전문 진료", desc: "신장내과 및 일반내과 전문의가 직접 진료합니다." },
  { icon: Users, title: "친절한 서비스", desc: "편안하고 따뜻한 진료 환경을 만들어 드립니다." },
  { icon: Building2, title: "최신 시설", desc: "최신 의료장비로 정확한 검사와 치료를 제공합니다." },
];

const features = [
  {
    title: "대학병원급 투석 장치",
    desc: "독일 FMC사의 최신 투석기계 5008S를 도입하여 대학병원 수준의 정밀한 투석 치료를 제공합니다.",
    bg: "/about/fmc.jpeg",
    bgSize: "cover",
  },
  {
    title: "투석전문의 상주",
    desc: "대학병원 출신 투석전문의가 상주하며 전문적이고 체계적인 투석치료를 직접 담당합니다.",
    bg: "/about/dia.png",
    bgSize: "contain",
  },
  {
    title: "우수한 협진 시스템",
    desc: "한양대학교병원, 동탄성심병원 등 유수의 대학병원들과 진료 협력 체결로 필요시 즉각적인 협진이 가능합니다.",
    bg: null,
    bgSize: "cover",
  },
];

function CertificateCard({ subject, english }: { subject: string; english: string }) {
  return (
    <div className="flex-1 max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(170deg, #07122b 0%, #0f2247 40%, #07122b 100%)" }}>
      {/* 금색 상단 */}
      <div className="h-2" style={{ background: "linear-gradient(90deg, #7a5800, #f5c842, #e8a800, #f5c842, #7a5800)" }} />

      <div className="px-7 py-7 text-center">
        {/* 메달 */}
        <div className="w-20 h-20 mx-auto mb-5 rounded-full flex flex-col items-center justify-center border-4"
          style={{
            borderColor: "#f5c842",
            background: "radial-gradient(circle at 35% 35%, #ffe066, #c8900a 60%, #7a5200)",
            boxShadow: "0 0 18px #f5c84288"
          }}>
          <span className="text-white font-black text-2xl leading-none drop-shadow">1</span>
          <span className="text-white font-bold text-xs tracking-widest drop-shadow">등급</span>
        </div>

        <p className="text-yellow-300 text-xs tracking-wide mb-1">2주기 1차 고혈압·당뇨병</p>
        <p className="text-white font-bold text-lg leading-snug">{subject} 적정성 평가</p>
        <p className="font-extrabold text-2xl mb-5" style={{ color: "#f5c842" }}>1등급 기관</p>

        <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, #f5c842, transparent)" }} />

        <p className="text-gray-300 text-xs mb-0.5">기관명: <span className="text-white font-semibold">봉담이룸내과의원</span></p>
        <p className="text-gray-300 text-xs mb-5">평가기간: 2023.3.~2024.2.</p>

        <p className="text-white text-sm leading-relaxed mb-4">
          귀 원은 {subject} 적정성 평가 결과가<br />
          우수한 <span className="text-yellow-300 font-bold">1등급 기관</span>으로 선정되었습니다.
        </p>

        <p className="text-gray-500 text-xs italic leading-relaxed mb-5">
          {english}
        </p>

        <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, #f5c842, transparent)" }} />

        <p className="text-gray-400 text-xs mb-1">2024년 12월 27일</p>
        <p className="text-white font-bold text-sm">건강보험심사평가원장</p>
      </div>

      {/* 금색 하단 */}
      <div className="h-2" style={{ background: "linear-gradient(90deg, #7a5800, #f5c842, #e8a800, #f5c842, #7a5800)" }} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <div
        className="relative text-white py-12 px-4 text-center"
        style={{ backgroundImage: "url('/gallery/외래/opd2.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">병원소개</h1>
          <p className="text-blue-100">봉담이룸내과의원을 소개합니다</p>
        </div>
      </div>

      {/* 원장 인사말 */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-[#1565C0] mb-4">원장 인사말</h2>
            <div className="w-12 h-1 bg-[#1565C0] mb-6 rounded" />
            <p className="text-gray-700 leading-relaxed mb-4">
              안녕하세요, 봉담이룸내과의원에 오신 것을 환영합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              저희 의원은 200평 규모의 내과 진료 및 인공신장실을 중심으로 지역 주민 여러분의 건강을
              책임지고자 최선을 다하고 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              환자 한 분 한 분을 가족처럼 생각하며, 정확한 진단과 적절한 치료로
              건강한 삶을 되찾으실 수 있도록 돕겠습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              언제나 편안하게 방문하시어 궁금한 점을 물어봐 주시기 바랍니다.
            </p>
            <p className="text-gray-600 mt-6 font-semibold">봉담이룸내과의원 원장 이은영 드림</p>
          </div>

          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="bg-blue-50 rounded-2xl overflow-hidden w-72">
              <Image
                src="/doctor.png"
                alt="대표원장"
                width={300}
                height={400}
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 인공신장실 특장점 */}
      <section className="py-16 px-4" style={{ background: "linear-gradient(160deg, #07122b 0%, #0f2247 60%, #07122b 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">봉담이룸내과 인공신장실</h2>
            <p className="text-blue-300 text-sm">항상 최선을 다하겠습니다</p>
            <div className="w-16 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, #f5c842, transparent)" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="relative rounded-xl overflow-hidden min-h-44 shadow-sm border border-blue-900"
                style={{ background: "#ffffff" }}
              >
                {f.bg && (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${f.bg}')`,
                      backgroundSize: f.bgSize,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
                <div className="relative p-6">
                  <div
                    className="inline-block rounded-lg px-4 py-3 w-full"
                    style={{ background: "rgba(255,255,255,0.88)" }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 size={20} className="text-[#1565C0] shrink-0 mt-0.5" />
                      <h3 className="text-[#1a3a6b] font-bold text-base">{f.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pl-7">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 인증/수상 */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">인증 및 수상</h2>
          <p className="text-center text-gray-500 text-sm mb-10">2년 연속 고혈압·당뇨병 적정성 평가 1등급 기관 선정</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <CertificateCard
              subject="고혈압"
              english="This certificate confirms that your esteemed hospital has been selected as a first class health care institution pursuant to the quality assessment of hypertension management."
            />
            <CertificateCard
              subject="당뇨병"
              english="This certificate confirms that your esteemed hospital has been selected as a first class health care institution pursuant to the quality assessment of diabetes management."
            />
          </div>
          <div className="mt-8 bg-[#1565C0] text-white rounded-xl px-6 py-4 text-center">
            <p className="font-bold text-lg">🏆 2년 연속 고혈압 · 당뇨병 적정성 평가 1등급 기관 선정</p>
            <p className="text-blue-200 text-sm mt-1">건강보험심사평가원 | 2024년 12월 27일</p>
          </div>
        </div>
      </section>

      {/* 병원 가치 */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">저희가 추구하는 가치</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-[#1565C0]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 병원 정보 */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">병원 정보</h2>
        <div className="border rounded-xl overflow-hidden">
          {[
            { label: "진료과목", value: "신장내과, 일반내과" },
            { label: "대표전화", value: "031-297-9666" },
            { label: "투석문의", value: "031-297-9667 (3층 투석실), 9661 (2층 투석실)" },
            { label: "팩스", value: "031-297-9665 (대표), 9668 (3층 투석실), 9662 (2층 투석실)" },
            { label: "주소", value: "경기도 화성시 봉담읍 상리1길 109, 이룸프라자 2층·3층" },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`flex py-4 px-6 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <span className="w-28 text-gray-500 text-sm font-medium shrink-0">{row.label}</span>
              <span className="text-gray-800 text-sm">{row.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
