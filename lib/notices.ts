import fs from "fs";
import path from "path";
import matter from "gray-matter";

const noticesDir = path.join(process.cwd(), "content/notices");

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}

export function getAllNotices(): Omit<Notice, "content">[] {
  if (!fs.existsSync(noticesDir)) return [];

  const files = fs.readdirSync(noticesDir).filter((f) => f.endsWith(".md"));
  const notices = files.map((filename) => {
    const raw = fs.readFileSync(path.join(noticesDir, filename), "utf-8");
    const { data } = matter(raw);
    return {
      id: filename.replace(".md", ""),
      title: data.title ?? "제목 없음",
      date: data.date ?? "",
    };
  });

  return notices.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getNoticeById(id: string): Notice | null {
  const filePath = path.join(noticesDir, `${id}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    id,
    title: data.title ?? "제목 없음",
    date: data.date ?? "",
    content,
  };
}
