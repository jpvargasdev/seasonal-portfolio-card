
import SeasonalBackground from "@/components/SeasonalBackground";
import ProfileCard from "@/components/ProfileCard";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <SeasonalBackground />
      <div className="flex flex-col items-center justify-center p-6">
        <ProfileCard />
        <BlogSection />
      </div>
    </div>
  );
};

export default Index;
