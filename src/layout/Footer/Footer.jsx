import { ArrowUp, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} NikaCore.co. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="#hero"
          className="flex items-center gap-1 p-2 rounded-full bg-primary/10 hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/60 text-primary transition-all duration-300 shadow-md"
        >
          <ArrowUp size={20} />
          <span className="hidden md:inline text-sm font-medium">
            Back to top
          </span>
        </a>

        <div className="flex gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-200 transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-300 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
