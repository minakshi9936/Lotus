import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Breadcrumb />
      <Contact />
      <Footer />
    </main>
  );
}