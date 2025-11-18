import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import About from '@/components/About';
import Testimonial from '@/components/Testimonial';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Topbar />
      <Navbar />
      <Hero />
      <Rooms />
      <About />
      <Gallery />
      <Testimonial />
      <Footer />
    </main>
  );
}
