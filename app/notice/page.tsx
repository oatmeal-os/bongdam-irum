import Link from "next/link";
import { getAllNotices } from "@/lib/notices";
import { ChevronRight, FileText } from "lucide-react";

export default function NoticePage() {
  const notices = getAllNotices();

  return (
    <div>
      <div
        className="relative text-white py-12 px-4 text-center"
        style={{ backgroundImage: "url('/gallery/외래/opd6.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">공지사항</h1>
          <p className="text-blue-100">봉담이룸내과의원의 새로운 소식을 전해드립니다</p>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 py-12">
        {notices.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <FileText size={48} className="mx-auto mb-4 text-gray-200" />
            <p>등록된 공지사항이 없습니다.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {notices.map((notice, i) => (
              <li key={notice.id}>
                <Link
                  href={`/notice/${notice.id}`}
                  className="flex items-center justify-between py-5 hover:text-[#1565C0] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 text-sm font-mono w-6 text-right">{i + 1}</span>
                    <span className="text-gray-800 group-hover:text-[#1565C0] font-medium">
                      {notice.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm shrink-0">
                    <span>{notice.date}</span>
                    <ChevronRight size={16} className="group-hover:text-[#1565C0]" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
