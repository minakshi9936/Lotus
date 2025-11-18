import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Rooms from '@/components/Rooms';
import Footer from '@/components/Footer';

export default function RoomPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Breadcrumb />
      <Rooms />
      <Footer />
    </main>
  );
}