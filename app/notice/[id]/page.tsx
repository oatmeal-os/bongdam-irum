import { getNoticeById, getAllNotices } from "@/lib/notices";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  const notices = getAllNotices();
  return notices.map((n) => ({ id: n.id }));
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = getNoticeById(id);

  if (!notice) notFound();

  const lines = notice.content.split("\n");
  const rendered = lines.map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} className="text-lg font-bold mt-6 mb-2 text-gray-800">{line.slice(3)}</h2>;
    if (line.startsWith("# ")) return <h1 key={i} className="text-xl font-bold mt-6 mb-2 text-gray-800">{line.slice(2)}</h1>;
    if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc text-gray-700">{renderInline(line.slice(2))}</li>;
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="text-gray-700 leading-relaxed">{renderInline(line)}</p>;
  });

  return (
    <div>
      <div className="bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">공지사항</h1>
      </div>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/notice" className="flex items-center gap-1 text-[#1565C0] text-sm mb-8 hover:underline">
          <ChevronLeft size={16} /> 목록으로
        </Link>

        <div className="border-b-2 border-[#1565C0] pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{notice.title}</h2>
          <p className="text-gray-400 text-sm">{notice.date}</p>
        </div>

        <div className="min-h-40">{rendered}</div>

        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <Link
            href="/notice"
            className="inline-block px-6 py-2 border border-[#1565C0] text-[#1565C0] rounded-full text-sm hover:bg-blue-50 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}

function renderInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
  );
}
