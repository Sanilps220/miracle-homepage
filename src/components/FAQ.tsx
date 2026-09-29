'use client';

import React, { useState } from 'react';
import { HomepageData } from '@/types/homepage';

interface FAQProps {
  data: HomepageData['faq'];
}

export default function FAQ({ data }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(data.items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id={data.id} className="py-20 md:py-28 px-6 max-w-[800px] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#101311] mb-12">
        {data.headline}
      </h2>

      <div className="space-y-4">
        {data.items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-[#DFE4DE] pb-4">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center text-left py-4 text-lg font-semibold text-[#101311] focus:outline-none focus:ring-2 focus:ring-[#3877E8] rounded-md"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                <span className="text-2xl font-mono leading-none ml-4">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div id={`faq-answer-${item.id}`} className="mt-2 text-[#59615C] leading-relaxed text-sm sm:text-base">
                  <p>{item.answer}</p>
                  {item.link && (
                    <a
                      href={item.link.url}
                      className="inline-block mt-3 text-sm font-semibold text-[#3877E8] hover:underline"
                    >
                      {item.link.label} &rarr;
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}