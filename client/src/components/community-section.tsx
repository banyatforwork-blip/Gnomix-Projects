import { motion } from "framer-motion";
import { Github, Users, Code, MessageSquare, Bug, Lightbulb } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const contributeWays = [
  {
    icon: Code,
    title: "Code",
    description: "Submit PRs and help improve the codebase",
  },
  {
    icon: Bug,
    title: "Bug Reports",
    description: "Report issues and help us fix problems",
  },
  {
    icon: MessageSquare,
    title: "Discussions",
    description: "Share ideas and help other users",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description: "Suggest new features and improvements",
  },
];

export function CommunitySection() {
  return (
    <section
      id="community"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-community-title"
          >
            <span className="gradient-text">Join the Community</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Connect with other Linux enthusiasts and help shape the future of
            Gnomix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
              data-testid="card-discord"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-[#5865F2]/20">
                    <SiDiscord className="h-8 w-8 text-[#5865F2]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl">
                      Discord
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Growing community</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base mb-6">
                  Chat with the community, get support, and stay updated on the
                  latest developments. Our Discord is the best place to connect
                  with other Gnomix users.
                </CardDescription>
                <a
                  href="https://discord.gg/RHS3NptNpc"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-discord-community"
                >
                  <Button className="w-full gap-2">
                    <SiDiscord className="h-4 w-4" />
                    Join Discord
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
              data-testid="card-github"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-foreground/10">
                    <Github className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl">
                      GitHub
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Code className="h-4 w-4" />
                      <span>Open Source</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base mb-6">
                  Contribute code, report bugs, and track development. All our
                  projects are open source and welcome contributions from the
                  community.
                </CardDescription>
                <a
                  href="https://github.com/gnomixperson"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-github-community"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    View GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">
            Ways to Contribute
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {contributeWays.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                  <way.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{way.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {way.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
