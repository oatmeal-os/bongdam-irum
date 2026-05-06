import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a2a4a] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center gap-4">
        <Image src="/logo.png" alt="봉담이룸내과의원" width={150} height={65} className="object-contain" />
        <p className="text-gray-400 text-sm leading-relaxed">
          봉담이룸내과의원 | 대표자 : 이은영 | 경기도 화성시 봉담읍 상리1길 109, 이룸프라자 2·3층 | TEL 031-297-9666
        </p>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-xs">
        © 2025 봉담이룸내과의원. All rights reserved.
      </div>
    </footer>
  );
}
