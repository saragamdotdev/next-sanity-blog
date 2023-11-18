import HeroSection from "@/components/HeroSection";
import HomePosts from "@/components/HomePosts";
import HomeTutorials from "@/components/HomeTutorials";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-3 md:px-10 lg:px-20">
        <HeroSection />
        <HomePosts />
        <HomeTutorials />
      </div>
    </main>
  );
}
