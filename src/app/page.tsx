import homepageDataRaw from '@/data/homepage.json';
import { HomepageData } from '@/types/homepage';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Transformation from '@/components/Transformation';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const data = homepageDataRaw as unknown as HomepageData;



export default function Home() {
  return (
    <main className="bg-[#F6F7F4] text-[#101311] min-h-screen font-sans">
      <Header navigation={data.navigation} announcement={data.announcement_bar} />
      <Hero data={data.hero} />
      <Transformation data={data.transformation} />
      <Features data={data.features} />
      <Testimonials data={data.testimonials} />
      <FAQ data={data.faq} />
      <FinalCTA data={data.final_cta} />
      <Footer data={data.footer} branding={data.branding} />
    </main>
  );
}