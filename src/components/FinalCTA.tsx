import React from 'react';
import { HomepageData } from '@/types/homepage';

interface FinalCTAProps {
  data: HomepageData['final_cta'];
}

export default function FinalCTA({ data }: FinalCTAProps) {
  return (
    <section id={data.id} className="py-20 md:py-28 bg-[#101311] text-[#F6F7F4] px-6 text-center">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#F6F7F4]">
          {data.headline}
        </h2>
        <p className="text-base sm:text-lg text-[#A2ABA5] mb-10 max-w-[600px] mx-auto leading-relaxed">
          {data.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={data.primary_cta.url}
            className="w-full sm:w-auto px-8 py-4 bg-[#B8F36B] text-[#18210F] font-bold rounded-lg hover:bg-[#a6e655] transition-colors shadow-lg"
          >
            {data.primary_cta.label}
          </a>
          <a
            href={data.secondary_cta.url}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#29302B] text-[#F6F7F4] font-semibold rounded-lg hover:bg-[#171C19] transition-colors"
          >
            {data.secondary_cta.label}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#A2ABA5]">
          {data.trust_indicators.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#B8F36B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}