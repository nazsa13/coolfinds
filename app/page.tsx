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
  { url: "https://www.instagram.com/cool.finds.ae", customTitle: "Instagram" },
  { url: "https://www.tiktok.com/@cool.finds.ae", customTitle: "TikTok" },
  { url: "https://youtube.com/@cool-finds-ae", customTitle: "YouTube" },
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
          <div className="flex justify-center gap-6 mb-6 mt-6">
            <a href="https://youtube.com/@cool-finds-ae" target="_blank" className="text-gray-400 hover:text-red-600 transition-colors">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </svg>
            </a>
  
  <a href="https://www.instagram.com/cool.finds.ae" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  </a>

  <a href="https://www.tiktok.com/@cool.finds.ae" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.02.23 2.1.94 2.84.69.76 1.71 1.15 2.72 1.1 1.01-.06 1.93-.63 2.5-1.45.39-.56.57-1.25.61-1.93.04-3.47-.02-6.94-.01-10.41z"/>
    </svg>
  </a>
</div>
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