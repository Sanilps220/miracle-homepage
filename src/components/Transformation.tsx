import React from 'react';
import { HomepageData } from '@/types/homepage';

interface TransformationProps {
  data: HomepageData['transformation'];
}

export default function Transformation({ data }: TransformationProps) {
  return (
    <section id={data.id} className="py-20 md:py-28 bg-[#101311] text-[#F6F7F4] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#B8F36B] uppercase mb-3 block">
            {data.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F7F4] mb-4">
            {data.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A2ABA5]">
            {data.subheadline}
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="space-y-6">
          {data.comparison.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#29302B] bg-[#171C19]"
            >
              {/* Old Way */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#29302B] bg-[#171C19]/50">
                <span className="inline-block text-[11px] font-bold tracking-wider text-[#FF6B6B] uppercase mb-3">
                  The Old Way
                </span>
                <h3 className="text-xl font-semibold text-[#F6F7F4] mb-2">{item.old_way.title}</h3>
                <p className="text-sm text-[#A2ABA5] leading-relaxed">{item.old_way.description}</p>
              </div>

              {/* New Way (NexusAI Way) */}
              <div className="p-6 md:p-8 bg-[#101311] border-l-4 border-l-[#B8F36B]">
                <span className="inline-block text-[11px] font-bold tracking-wider text-[#B8F36B] uppercase mb-3">
                  The NexusAI Way
                </span>
                <h3 className="text-xl font-semibold text-[#F6F7F4] mb-2">{item.new_way.title}</h3>
                <p className="text-sm text-[#DFE4DE] leading-relaxed">{item.new_way.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
