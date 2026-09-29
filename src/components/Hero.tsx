import React from 'react';
import Image from 'next/image';
import { HomepageData } from '@/types/homepage';

interface HeroProps {
  data: HomepageData['hero'];
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id={data.id} className="pt-16 pb-20 md:pt-24 md:pb-28 px-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy & Actions */}
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#101311] bg-[#DFE4DE] rounded-md mb-6 uppercase">
            {data.category_badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101311] leading-[1.08] whitespace-pre-line mb-6">
            {data.headline}
          </h1>
          <p className="text-lg text-[#59615C] max-w-[680px] mb-8 leading-relaxed">
            {data.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href={data.primary_cta.url}
              className="px-6 py-3.5 bg-[#101311] text-[#F6F7F4] font-semibold rounded-lg hover:bg-black transition-colors text-center shadow-md"
            >
              {data.primary_cta.label}
            </a>
            <a
              href={data.secondary_cta.url}
              className="px-6 py-3.5 text-[#101311] font-semibold hover:opacity-75 transition-opacity flex items-center justify-center gap-2"
            >
              {data.secondary_cta.label} &rarr;
            </a>
          </div>

          {/* Friction Reducers */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#59615C]">
            {data.friction_reducers.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2D8A58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Layered Dashboard Mockup */}
        <div className="relative rounded-xl border border-[#DFE4DE] bg-white p-3 shadow-2xl overflow-hidden">
          <Image
            src={data.visual.asset}
            alt={data.visual.alt}
            width={800}
            height={500}
            priority
            className="rounded-lg w-full h-auto object-cover"
          />

          {/* Floating UI Layer Cards */}
          {data.visual.layers && (
            <div className="hidden sm:block">
              {/* Layer 1: Workflow Status */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-[#DFE4DE] p-3 rounded-lg shadow-lg max-w-[220px]">
                <div className="flex items-center justify-between gap-2 text-xs font-bold text-[#101311]">
                  <span>{data.visual.layers[0]?.title}</span>
                  <span className="text-[10px] bg-[#B8F36B] text-[#18210F] px-1.5 py-0.5 rounded">
                    {data.visual.layers[0]?.status}
                  </span>
                </div>
                <p className="text-[11px] text-[#59615C] mt-1">{data.visual.layers[0]?.detail}</p>
              </div>

              {/* Layer 2: Activity Chart */}
              <div className="absolute bottom-6 right-6 bg-[#171C19] text-[#F6F7F4] p-3.5 rounded-lg shadow-xl border border-[#29302B] max-w-[200px]">
                <p className="text-[11px] text-[#A2ABA5] font-medium">{data.visual.layers[1]?.title}</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-[#B8F36B]">{data.visual.layers[1]?.value}</span>
                  <span className="text-[10px] text-[#A2ABA5]">{data.visual.layers[1]?.period}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}