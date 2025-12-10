import { useQuery } from "@tanstack/react-query";
import type { ProjectsData, Project } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink, Users, Code, Sparkles } from "lucide-react";
import { SiDiscord, SiGithub } from "react-icons/si";
import gnomixIcon from "@assets/IMG_0118_1764222140510-ONEcpzt2_(1)_1765343324348.png";

function Navigation({ siteInfo }: { siteInfo?: ProjectsData["siteInfo"] }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      data-testid="nav-main"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-3">
            <img 
              src={gnomixIcon} 
              alt="Gnomix" 
              className="w-9 h-9 rounded-lg object-contain"
              data-testid="img-nav-logo"
            />
            <span className="font-semibold text-lg hidden sm:inline">Gnomix</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-lg"
              onClick={() => scrollToSection("projects")}
              data-testid="nav-link-projects"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-lg"
              onClick={() => scrollToSection("community")}
              data-testid="nav-link-community"
            >
              Community
            </Button>
            {siteInfo?.githubProfile && (
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-lg"
                onClick={() => window.open(siteInfo.githubProfile, "_blank")}
                data-testid="nav-button-github"
              >
                <SiGithub className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ siteInfo }: { siteInfo?: ProjectsData["siteInfo"] }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-green-500/10 to-blue-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-green-400 to-blue-400 rounded-full blur-2xl opacity-30" />
            <img 
              src={gnomixIcon} 
              alt="Gnomix Logo" 
              className="relative w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl"
              data-testid="img-hero-logo"
            />
          </div>
        </div>
        
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          data-testid="text-hero-title"
        >
          {siteInfo?.title || "Gnomix"}
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          data-testid="text-hero-tagline"
        >
          {siteInfo?.tagline || "A Collection of Projects"}
        </p>
        
        <p 
          className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto"
          data-testid="text-hero-description"
        >
          {siteInfo?.description || "Explore our open-source projects and tools"}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {siteInfo?.githubProfile && (
            <Button 
              size="lg" 
              className="rounded-xl gap-2"
              onClick={() => window.open(siteInfo.githubProfile, "_blank")}
              data-testid="button-github-profile"
            >
              <SiGithub className="w-5 h-5" />
              View GitHub
            </Button>
          )}
          {siteInfo?.discordUrl && (
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-xl gap-2"
              onClick={() => window.open(siteInfo.discordUrl, "_blank")}
              data-testid="button-discord"
            >
              <SiDiscord className="w-5 h-5" />
              Join Discord
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card 
      className="group relative overflow-visible bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 rounded-xl"
      data-testid={`card-project-${project.id}`}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-pink-500/20 via-green-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500/20 via-green-500/20 to-blue-500/20">
              <Code className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground" data-testid={`text-project-name-${project.id}`}>
              {project.name}
            </h3>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="gap-1 rounded-lg">
              <Sparkles className="w-3 h-3" />
              Featured
            </Badge>
          )}
        </div>
        
        <p 
          className="text-muted-foreground text-sm mb-4 line-clamp-3"
          data-testid={`text-project-desc-${project.id}`}
        >
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs rounded-md bg-muted/50"
              data-testid={`badge-tag-${project.id}-${tag}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-center gap-2 rounded-lg"
          onClick={() => window.open(project.githubUrl, "_blank")}
          data-testid={`button-view-project-${project.id}`}
        >
          <Github className="w-4 h-4" />
          View on GitHub
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </Card>
  );
}

function ProjectsSection({ projects, isLoading }: { projects?: Project[]; isLoading: boolean }) {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            data-testid="text-projects-title"
          >
            Projects
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our collection of open-source projects and tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="w-10 h-10 rounded-lg" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-5 w-16 rounded-md" />
                  <Skeleton className="h-5 w-20 rounded-md" />
                </div>
                <Skeleton className="h-9 w-full rounded-lg" />
              </Card>
            ))
          ) : projects && projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No projects found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CommunitySection({ siteInfo }: { siteInfo?: ProjectsData["siteInfo"] }) {
  return (
    <section className="py-20 px-6 bg-card/30" id="community">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Community
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Connect with other users, get support, and stay updated
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {siteInfo?.discordUrl && (
            <Card 
              className="p-6 rounded-xl hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => window.open(siteInfo.discordUrl, "_blank")}
              data-testid="card-discord-community"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#5865F2]/20">
                  <SiDiscord className="w-8 h-8 text-[#5865F2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Discord</h3>
                  <p className="text-sm text-muted-foreground">Chat with the community</p>
                </div>
              </div>
            </Card>
          )}
          
          {siteInfo?.githubProfile && (
            <Card 
              className="p-6 rounded-xl hover-elevate active-elevate-2 cursor-pointer transition-all"
              onClick={() => window.open(siteInfo.githubProfile, "_blank")}
              data-testid="card-github-community"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-foreground/10">
                  <SiGithub className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Contribute and track development</p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={gnomixIcon} 
              alt="Gnomix" 
              className="w-10 h-10 rounded-lg object-contain"
            />
            <span className="font-semibold text-lg">Gnomix</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Website by</span>
            <a 
              href="https://github.com/chichbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-green-400 transition-colors font-medium"
              data-testid="link-credit-chichbo"
            >
              @chichbo
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Made with love for the open-source community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { data, isLoading } = useQuery<ProjectsData>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation siteInfo={data?.siteInfo} />
      <div className="pt-16">
        <HeroSection siteInfo={data?.siteInfo} />
        <ProjectsSection projects={data?.projects} isLoading={isLoading} />
        <CommunitySection siteInfo={data?.siteInfo} />
        <Footer />
      </div>
    </div>
  );
}
