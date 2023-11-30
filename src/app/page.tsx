import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroArea } from "@/components/HeroArea";

export default function Home() {
  return (
    <main className="h-screen bg-black10">
      <Header />
      <HeroArea />
      <Footer />
    </main>
  );
}
