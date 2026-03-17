import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { InfiniteGrid } from '@/components/InfiniteGrid';
import { MidSection } from '@/components/MidSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollThemeSwitcher } from '@/components/ScrollThemeSwitcher';

export default function Home() {
  return (
    <>
      <InfiniteGrid />
      <Nav />
      <ScrollThemeSwitcher />
      <main className="relative z-10">
        <Hero />
        <MidSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
