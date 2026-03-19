import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { ProfileServices } from '@/components/ProfileServices';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
      <Nav />
      <main>
        <Hero />
        <ProfileServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
