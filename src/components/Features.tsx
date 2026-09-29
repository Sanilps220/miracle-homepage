import React from 'react';
import Image from 'next/image';
import { HomepageData } from '@/types/homepage';

interface FeaturesProps {
  data: HomepageData['features'];
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section id={data.id} className="py-20 md:py-28 px-6 max-w-[1200px] mx-auto">
      <div className="text-center max-w-[680px] mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-[#59615C] uppercase mb-3 block">
          {data.kicker}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101311] mb-4">
          {data.headline}
        </h2>
        <p className="text-base sm:text-lg text-[#59615C]">
          {data.subheadline}
        </p>
      </div>

      {/* 3x3 Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.grid.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-6 bg-white rounded-xl border border-[#DFE4DE] shadow-sm hover:border-[#101311] transition-all group"
          >
            <div>
              <div className="mb-6 relative h-40 w-full rounded-lg bg-[#F6F7F4] border border-[#DFE4DE] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.visual.asset}
                  alt={item.visual.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#101311] mb-2">{item.title}</h3>
              <p className="text-sm text-[#59615C] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}