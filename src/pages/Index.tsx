
import SeasonalBackground from "@/components/SeasonalBackground";
import ProfileCard from "@/components/ProfileCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <SeasonalBackground />
      <div className="flex flex-col items-center justify-center p-6">
        <ProfileCard />
        
        {/* <Link  */}
        {/*   to="/blog" */}
        {/*   className="mt-8 inline-flex items-center gap-2 px-6 py-3 glass-card rounded-lg text-gray-800 dark:text-white hover:scale-105 transition-transform" */}
        {/* > */}
        {/*   View Blog <ArrowRight className="w-4 h-4" /> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Index;
