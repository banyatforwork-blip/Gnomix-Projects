import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import gnomixLogo from "@assets/gnomix-logo.png";

const footerLinks = {
  product: [
    { name: "Gnomix Script", href: "https://github.com/gnomixperson/gnomix_script" },
    { name: "Gnomix OS", href: "https://github.com/gnomixperson/gnomix_os" },
    { name: "Rust ISO", href: "https://github.com/gnomixperson/rust-iso" },
  ],
  community: [
    { name: "Discord", href: "https://discord.gg/RHS3NptNpc" },
    { name: "GitHub", href: "https://github.com/gnomixperson" },
    { name: "Contributing", href: "https://github.com/gnomixperson/gnomix_script/blob/main/CONTRIBUTING.md" },
  ],
  resources: [
    { name: "Documentation", href: "https://github.com/gnomixperson/gnomix_script#readme" },
    { name: "Releases", href: "https://github.com/gnomixperson/gnomix_script/releases" },
    { name: "Issues", href: "https://github.com/gnomixperson/gnomix_script/issues" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src={gnomixLogo}
                alt="Gnomix Logo"
                className="h-8 w-8 rounded-md"
              />
              <span className="font-bold text-lg">Gnomix</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Open-source projects and tools for customizing your Linux
              experience. Transform Ubuntu into pure GNOME.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/gnomixperson"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
                data-testid="link-footer-github"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/RHS3NptNpc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
                data-testid="link-footer-discord"
                aria-label="Discord"
              >
                <SiDiscord className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center flex flex-wrap items-center justify-center gap-1"
          >
            <span>&copy; {currentYear} Gnomix. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />
            </motion.span>
            <span>for the Linux community.</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
