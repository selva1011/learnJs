import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import LearnMap from "@/components/LearnMap";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen  min-w-full max-w-full font-mono">
      <div className="w-[1000px] flex-col flex items-center max-lg:w-[90%]">
        <Header />
        <LearnMap />
        <Footer />
      </div>
    </main>
  );
}
