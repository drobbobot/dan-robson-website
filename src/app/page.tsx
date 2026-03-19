import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ProfileServices } from '@/components/ProfileServices';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProfileServices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
