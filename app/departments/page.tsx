import { Droplets, Stethoscope, Activity, Heart, ChevronRight } from "lucide-react";

const departments = [
  {
    icon: Droplets,
    name: "신장내과 · 인공신장실",
    color: "bg-blue-50 text-blue-600",
    desc: "신장(콩팥)과 관련된 모든 질환을 전문으로 진료합니다. 조기 발견과 치료로 신장 기능을 보존하고 삶의 질을 높이는 데 중점을 둡니다.",
    diseases: [
      "만성 신부전 (만성콩팥병)",
      "급성 신부전",
      "단백뇨 · 혈뇨",
      "신증후군",
      "사구체신염",
      "신장 고혈압",
      "혈액투석",
      "전해질 이상",
    ],
  },
  {
    icon: Stethoscope,
    name: "일반내과",
    color: "bg-green-50 text-green-600",
    desc: "감기, 소화기 이상, 고혈압, 당뇨 등 내과 전반에 걸친 질환을 진료합니다. 생활습관 교정과 예방 의학에도 힘쓰고 있습니다.",
    diseases: [
      "감기 · 독감 · 폐렴",
      "위장염 · 소화불량",
      "고혈압",
      "당뇨병",
      "이상지질혈증 (고지혈증)",
      "갑상선 질환",
      "빈혈",
      "기침 · 호흡기 질환",
    ],
  },
  {
    icon: Heart,
    name: "만성질환 관리",
    color: "bg-red-50 text-red-500",
    desc: "고혈압, 당뇨, 신부전 등 만성질환은 꾸준한 관리가 중요합니다. 정기 추적 관찰과 약물 조절로 합병증을 예방합니다.",
    diseases: [
      "고혈압 장기 관리",
      "당뇨 합병증 예방",
      "만성 신부전 관리",
      "지속적 약물 치료",
      "생활습관 교정 상담",
      "정기 혈액검사 추적",
    ],
  },
  {
    icon: Activity,
    name: "기타진료",
    color: "bg-purple-50 text-purple-600",
    desc: "내과 전반에 걸친 다양한 진료와 처치를 제공합니다. 건강 증진과 예방 의학에도 힘쓰고 있습니다.",
    diseases: [
      "금연치료",
      "수액 치료",
      "예방접종 (독감 · 폐렴 · 대상포진 등)",
      "영양주사 (비타민 등)",
      "상처 처치 및 드레싱",
      "각종 증명서 발급",
    ],
  },
];

export default function DepartmentsPage() {
  return (
    <div>
      <div
        className="relative text-white py-12 px-4 text-center"
        style={{ backgroundImage: "url('/gallery/인공신장실/hr3.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">진료과목</h1>
          <p className="text-blue-100">봉담이룸내과의원의 진료 분야를 안내해 드립니다</p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        {departments.map((dept) => (
          <div key={dept.name} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-4 p-6 border-b border-gray-100">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${dept.color.split(" ")[0]}`}>
                <dept.icon size={24} className={dept.color.split(" ")[1]} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{dept.name}</h2>
                <p className="text-gray-500 text-sm mt-1">{dept.desc}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-600 mb-3">주요 진료 질환</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dept.diseases.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                    <ChevronRight size={14} className="text-[#1565C0] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
