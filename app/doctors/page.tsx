export default function DoctorsPage() {
  return (
    <div>
      <div
        className="relative text-white py-12 px-4 text-center"
        style={{ backgroundImage: "url('/gallery/외래/opd4.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">의료진 소개</h1>
          <p className="text-blue-100">봉담이룸내과의원의 의료진을 소개합니다</p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* 사진 */}
            <div className="md:w-72 bg-blue-50 flex flex-col items-center justify-end pt-8 pb-6 px-6 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/doctor.png"
                alt="대표원장 이은영"
                className="w-full object-contain object-bottom"
              />
              <div className="text-center mt-4">
                <p className="font-bold text-gray-800 text-lg">이은영</p>
                <p className="text-[#1565C0] text-sm font-medium">대표원장</p>
                <div className="flex gap-2 justify-center mt-2">
                  <span className="inline-block bg-[#1565C0] text-white text-xs px-3 py-1 rounded-full">내과 전문의</span>
                  <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full">신장 투석전문의</span>
                </div>
              </div>
            </div>

            {/* 이력 */}
            <div className="flex-1 p-8 space-y-7">

              {/* 주요 약력 */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white text-sm bg-[#1565C0] px-3 py-1 rounded-full w-fit mb-3">
                  주요 약력
                </h3>
                <ul className="space-y-1">
                  {[
                    "한양대학교병원 신장내과 외래교수",
                    "전) 권혁호내과의원 원장",
                    "전) 태암내과의원 원장",
                  ].map((item) => (
                    <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-[#1565C0] mt-1 shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 학력 */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white text-sm bg-[#1565C0] px-3 py-1 rounded-full w-fit mb-3">
                  학력
                </h3>
                <ul className="space-y-1">
                  {[
                    "한양대학교 의과대학 학사 졸업",
                    "한양대학교 의과대학 석사 졸업",
                    "한양대학교병원 인턴 및 내과 레지던트 수료",
                    "한양대학교병원 신장내과 전임의",
                  ].map((item) => (
                    <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-[#1565C0] mt-1 shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 학회 활동 */}
              <div>
                <h3 className="flex items-center gap-2 font-bold text-white text-sm bg-[#1565C0] px-3 py-1 rounded-full w-fit mb-3">
                  학회 활동
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {[
                    "대한신장학회 혈관초음파 instructor",
                    "대한중재신장연구회 정회원",
                    "대한신장학회 정회원",
                    "대한고혈압학회 정회원",
                    "대한투석협회 정회원",
                    "대한당뇨병학회 정회원",
                    "대한내과학회 정회원",
                  ].map((item) => (
                    <li key={item} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-[#1565C0] mt-1 shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
