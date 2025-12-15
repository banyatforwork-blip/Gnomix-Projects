import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";
import gnomixLogo from "@assets/gnomix-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-blue-900/20 dark:from-purple-900/30 dark:via-violet-900/20 dark:to-blue-900/30 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src={gnomixLogo}
            alt="Gnomix Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl shadow-2xl shadow-purple-500/20"
            data-testid="img-hero-logo"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          data-testid="text-hero-title"
        >
          <span className="gradient-text">Gnomix</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4"
          data-testid="text-hero-tagline"
        >
          Transform Ubuntu Into Pure GNOME
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          data-testid="text-hero-description"
        >
          A collection of open-source projects and tools for customizing your
          Linux experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/gnomixperson"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-hero-github"
          >
            <Button size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              View GitHub
            </Button>
          </a>
          <a
            href="https://discord.gg/RHS3NptNpc"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-hero-discord"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 glass-button backdrop-blur-md"
            >
              <SiDiscord className="h-5 w-5" />
              Join Discord
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="link-scroll-indicator"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
