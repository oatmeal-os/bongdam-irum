"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

const images: { src: string; category: "외래" | "인공신장실" }[] = [
  { src: "/gallery/외래/opd1.jpeg", category: "외래" },
  { src: "/gallery/외래/opd2.jpeg", category: "외래" },
  { src: "/gallery/외래/opd3.jpeg", category: "외래" },
  { src: "/gallery/외래/opd4.jpeg", category: "외래" },
  { src: "/gallery/외래/opd5.jpeg", category: "외래" },
  { src: "/gallery/외래/opd6.jpeg", category: "외래" },
  { src: "/gallery/인공신장실/hr1.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr2.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr3.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr4.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr5.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr6.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr7.jpeg", category: "인공신장실" },
  { src: "/gallery/인공신장실/hr8.jpeg", category: "인공신장실" },
];

const categories = ["전체", "외래", "인공신장실"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<"전체" | "외래" | "인공신장실">("전체");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "전체" ? images : images.filter((img) => img.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // 키보드 조작 (← → Esc)
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <div>
      <div
        className="relative text-white py-12 px-4 text-center"
        style={{ backgroundImage: "url('/gallery/외래/opd5.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">둘러보기</h1>
          <p className="text-blue-100">봉담이룸내과의원을 사진으로 미리 만나보세요</p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* 카테고리 탭 */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightboxIndex(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? "bg-[#1565C0] text-white border-[#1565C0]"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#1565C0] hover:text-[#1565C0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 사진 그리드 */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group"
              >
                <Image
                  src={img.src}
                  alt={`${img.category} 사진 ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-200"
              >
                <ImageIcon size={28} className="mb-2 text-gray-300" />
                <p className="text-xs text-gray-300">사진 준비 중</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 라이트박스 */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 닫기 버튼 */}
          <button
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="닫기"
          >
            <X size={24} />
          </button>

          {/* 이전 버튼 */}
          <button
            className="absolute left-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="이전 사진"
          >
            <ChevronLeft size={28} />
          </button>

          {/* 사진 */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={`${filtered[lightboxIndex].category} 사진`}
              width={1200}
              height={800}
              className="object-contain w-full max-h-[85vh] rounded-lg"
            />
            {/* 페이지 표시 */}
            <p className="text-center text-white/60 text-sm mt-3">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          {/* 다음 버튼 */}
          <button
            className="absolute right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="다음 사진"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
