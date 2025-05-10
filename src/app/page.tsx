
import Footer from "./components/footer/footer";
import ComingToKaduna from "./components/landing-page/coming-to-kd";
import FAQ from "./components/landing-page/faq";
import Feedback from "./components/landing-page/feedback";
import HeroSection from "./components/landing-page/hero-section";
// import WaveTimeline from "./components/landing-page/wave";
import WhoAreWe from "./components/landing-page/who-are-we";
import NavBar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-montserrat)]">
      <header>
        <NavBar />
      </header>
      <main className="max-w-screen-4xl mx-auto px-4 py-12 flex flex-col gap-12 items-center sm:items-start">
        <HeroSection />
        <WhoAreWe />
        <ComingToKaduna />
        <Feedback/>
        <FAQ />
        {/* <WaveTimeline /> */}

      </main>

      <footer className="">
        <hr />
        <Footer />
      </footer>
    </div>
  );
}
