import type { Metadata } from 'next';
import portfolioData from '@/data/portfolio.json';
import PortfolioPage from '@/components/PortfolioPage';
import type { PortfolioData } from '@/types/portfolio';

const data = portfolioData as unknown as PortfolioData;

export const metadata: Metadata = {
  title: data.site.name ?? data.site.title,
  description: data.site.description ?? 'A portfolio of selected freelance work.',
};

export default function Home() {
  return <PortfolioPage data={data} />;
}