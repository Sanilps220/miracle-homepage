import React from 'react';
import Image from 'next/image';
import { HomepageData } from '@/types/homepage';
import Link from 'next/link';

interface FooterProps {
  data: HomepageData['footer'];
  branding: HomepageData['branding'];
}

export default function Footer({ data, branding }: FooterProps) {
  return (
    <footer className="bg-[#101311] text-[#A2ABA5] border-t border-[#29302B] px-6 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-[#29302B]">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={data.logo.dark_mode}
                alt={data.logo.alt}
                width={data.logo.width}
                height={data.logo.height}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm max-w-[320px] text-[#A2ABA5] leading-relaxed">
              {data.tagline || branding.tagline}
            </p>
          </div>

          {/* Categorized Link Columns */}
          {data.link_columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F6F7F4] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.url} className="hover:text-[#F6F7F4] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Lower Row: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{data.copyright}</p>

          <div className="flex items-center gap-6">
            {data.legal_links.map((link) => (
              <a key={link.label} href={link.url} className="hover:text-[#F6F7F4] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
