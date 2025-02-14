
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import SeasonalBackground from "@/components/SeasonalBackground";
import BlogCard from "@/components/BlogCard";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const mockPost = {
  title: "How AI is Revolutionizing Web Design",
  date: "February 13, 2025",
  author: {
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop",
    bio: "Senior Web Developer passionate about AI and emerging technologies."
  },
  headerImage: "https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=2080&auto=format&fit=crop",
  content: `
    <h2>Introduction</h2>
    <p>The landscape of web design is rapidly evolving, with artificial intelligence playing an increasingly crucial role in how we create and optimize digital experiences...</p>

    <blockquote>AI is not just changing how we build websites; it's transforming how we think about digital interfaces entirely.</blockquote>

    <h2>The Impact of AI on Design Processes</h2>
    <p>Modern AI tools are revolutionizing traditional design workflows in several key ways:</p>
    <ul>
      <li>Automated layout generation</li>
      <li>Intelligent color palette selection</li>
      <li>Dynamic content adaptation</li>
      <li>User behavior prediction</li>
    </ul>

    <h2>Code Example</h2>
    <pre><code>
    // AI-powered component generation
    const AIComponent = () => {
      const [layout, setLayout] = useState(null);
      
      useEffect(() => {
        // AI generates optimal layout
        const generatedLayout = AIService.generateLayout();
        setLayout(generatedLayout);
      }, []);
      
      return <div>{layout}</div>;
    }
    </code></pre>
  `,
  relatedPosts: [
    {
      title: "The Future of UI/UX Design",
      excerpt: "Exploring upcoming trends in user interface and experience design.",
      date: "February 10, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Machine Learning in Web Development",
      excerpt: "How ML is changing the way we build web applications.",
      date: "February 8, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    toast({
      title: "Share Feature Coming Soon",
      description: `Sharing to ${platform} will be implemented soon!`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      <SeasonalBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-4 z-10">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-gray-800 dark:text-white hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </nav>

      {/* Article */}
      <article className="pt-24 px-4 max-w-4xl mx-auto">
        <div className={cn(
          "glass-card rounded-xl overflow-hidden",
          "dark:bg-black/30 dark:border-white/10"
        )}>
          {/* Header Image */}
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={mockPost.headerImage}
              alt={mockPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Title & Date */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                {mockPost.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">{mockPost.date}</p>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleShare('Twitter')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('LinkedIn')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('Facebook')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: mockPost.content }}
            />

            {/* Author Section */}
            <div className="flex items-center gap-4 p-6 glass-card rounded-xl mt-8">
              <img
                src={mockPost.author.image}
                alt={mockPost.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {mockPost.author.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {mockPost.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPost.relatedPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
