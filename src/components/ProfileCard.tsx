
import { Github, Instagram, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const ProfileCard = () => {
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check initial theme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    toast({
      title: `Switched to ${!isDark ? 'Dark' : 'Light'} Mode`,
      duration: 1500
    });
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-[var(--radius)] p-8 w-full max-w-md mx-auto transform transition-transform duration-300 hover:scale-[1.02]",
        "dark:bg-black/30 dark:border-white/10"
      )}
      style={{
        transform: "perspective(1000px) rotateX(0deg)",
        transition: "transform 0.3s ease-out",
      }}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Profile Image */}
        <div className="w-32 h-32 overflow-hidden transform transition-all duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop"
            alt="Profile"
            className="profile-image w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">John Doe</h1>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          Passionate developer crafting beautiful web experiences. Focused on creating intuitive and elegant solutions that make a difference.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 pt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-300"
                >
                  <Linkedin size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect on LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-300"
                >
                  <Github size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View GitHub Projects</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-300"
                >
                  <Twitter size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow on Twitter</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-300"
                >
                  <Instagram size={24} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow on Instagram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
