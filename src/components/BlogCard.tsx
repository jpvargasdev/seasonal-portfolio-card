
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "Coming Soon!",
      description: "Full blog feature is under development",
      duration: 2000,
    });
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-lg overflow-hidden transform transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-lg",
        "dark:bg-black/30 dark:border-white/10"
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {post.excerpt}
        </p>

        <button
          onClick={handleReadMore}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
