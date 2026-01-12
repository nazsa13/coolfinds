import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) return NextResponse.json({ error: 'Missing URL' }, { status: 400 });

  try {
    const response = await fetch(targetUrl, { headers: { 'User-Agent': 'bot' } });
    const html = await response.text();
    const $ = cheerio.load(html);

    // Scrape metadata
    const metadata = {
      title: $('meta[property="og:title"]').attr('content') || $('title').text() || targetUrl,
      description: $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || "",
      image: $('meta[property="og:image"]').attr('content') || "",
      url: targetUrl,
    };

    return NextResponse.json(metadata);
  } catch (error) {
    return NextResponse.json({ title: targetUrl }, { status: 200 });
  }
}