import React from 'react';
import Image from 'next/image';
import { HomepageData } from '@/types/homepage';

interface TestimonialsProps {
  data: HomepageData['testimonials'];
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section id={data.id} className="py-20 md:py-28 bg-[#DFE4DE]/30 border-y border-[#DFE4DE] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#101311] max-w-[700px] mx-auto mb-16">
          {data.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-[#DFE4DE] shadow-sm flex flex-col justify-between"
            >
              <p className="text-lg text-[#101311] italic leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#DFE4DE]">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#DFE4DE]">
                    <Image
                      src={item.avatar_image}
                      alt={item.avatar_alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#101311]">{item.author_name}</h4>
                    <p className="text-xs text-[#59615C]">{item.author_title}, {item.company_name}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#101311] block">{item.metric_win.value}</span>
                  <span className="text-[11px] text-[#59615C] block max-w-[120px]">{item.metric_win.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}