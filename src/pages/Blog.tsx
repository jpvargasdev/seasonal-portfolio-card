
import { Link } from "react-router-dom";
import BlogSection from "@/components/BlogSection";
import SeasonalBackground from "@/components/SeasonalBackground";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <SeasonalBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-4 z-10">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-gray-800 dark:text-white hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Blog Content */}
      <div className="pt-20">
        <BlogSection />
      </div>
    </div>
  );
};

export default Blog;
