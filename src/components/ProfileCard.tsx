
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="glass-card rounded-[var(--radius)] p-8 w-full max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="w-32 h-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop"
            alt="Profile"
            className="profile-image w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>

        {/* Bio */}
        <p className="text-gray-600 text-center leading-relaxed">
          Passionate developer crafting beautiful web experiences. Focused on creating intuitive and elegant solutions that make a difference.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 pt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-600"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-600"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-600"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-gray-600"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
