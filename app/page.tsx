"use client";
import { useEffect, useState } from 'react';

interface LinkItem {
  url: string;
  customTitle?: string;
}
interface LinkPreview {
  title: string;
  description: string;
  image?: string;
}
// --- EDIT YOUR LINKS HERE ---
const LINKS: LinkItem[] = [
  { url: "https://github.com/vercel", customTitle: "My GitHub Projects" },
  { url: "https://nextjs.org", customTitle: "Learn Web Development" },
  { url: "https://youtube.com", customTitle: "My Favorite Videos" },
];

export default function LinkTree() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-12 px-4 transition-colors duration-300">
      <button 
        onClick={() => setIsDark(!isDark)}
        className="mb-8 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
      <div className="w-full max-w-md space-y-4">
        <header className="text-center mb-8">
          <img src="/me.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm" />
          <h1 className="text-2xl font-bold">@cool.finds.ae</h1>
          <p className="text-gray-500 dark:text-gray-400">All Products Links Below 👇🏻</p>
        </header>

        {LINKS.map((item) => (
         <PreviewCard 
            key={item.url} 
             url={item.url} 
             customTitle={item.customTitle} 
          />
        ))}
      </div>
    </main>
  );
}

interface PreviewCardProps {
  url: string;
  customTitle?: string;
}

function PreviewCard({ url, customTitle }: PreviewCardProps) {
  const [data, setData] = useState<LinkPreview | null>(null);

  useEffect(() => {
    fetch(`/api/preview?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  if (!data) return <div className="h-24 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl" />;

return (
    <a 
      href={url} 
      target="_blank" 
      className="flex items-center bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all mb-4 shadow-sm backdrop-blur-sm group"
    >
      {/* Square Icon Section */}
      <div className="w-28 aspect-square flex-shrink-0 bg-white flex items-center justify-center border-r border-gray-100 dark:border-gray-700 overflow-hidden">
        {data.image ? (
          <img 
            src={data.image} 
            alt="" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="text-3xl">🔗</div>
        )}
      </div>

      {/* Text Content Section */}
      <div className="p-4 flex flex-col justify-center flex-grow min-w-0">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg truncate mb-1">
          {customTitle || data.title}
        </h3>
        
        {/* The Link Brief */}
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-snug mb-2">
          {data.description}
        </p>

        <span className="text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest opacity-80">
          {new URL(url).hostname.replace('www.', '')}
        </span>
      </div>
    </a>
  );
}