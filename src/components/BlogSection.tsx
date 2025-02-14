
import { useState } from "react";
import BlogCard from "./BlogCard";

const mockPosts = [
  {
    title: "Exploring AI-Generated Design: The Future of Portfolios",
    excerpt: "How AI tools are shaping the future of portfolio creation and what this means for designers and developers.",
    date: "January 24, 2025",
    image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "The Evolution of Web Design: 2025 Trends",
    excerpt: "Discover the latest web design trends that are transforming the digital landscape and how to implement them in your projects.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mastering Responsive Design",
    excerpt: "Essential techniques and best practices for creating truly responsive and adaptive web experiences across all devices.",
    date: "January 10, 2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Impact of AI on Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we approach software development and design.",
    date: "January 5, 2025",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Building Better User Experiences",
    excerpt: "Key principles and strategies for creating engaging and intuitive user experiences that keep visitors coming back.",
    date: "December 28, 2024",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Future of Web Development",
    excerpt: "A deep dive into upcoming technologies and methodologies that will shape the future of web development.",
    date: "December 20, 2024",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 px-6 w-full max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Insights & Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the latest in technology, design, and development. 
            <span className="block text-sm italic mt-1">Full blog feature coming soon!</span>
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {mockPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
