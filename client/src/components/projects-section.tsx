import { motion } from "framer-motion";
import { ExternalLink, Star, Archive, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { ProjectsData, Project } from "@shared/schema";

const tagColors: Record<string, string> = {
  Ubuntu: "bg-orange-500/20 text-orange-300 dark:text-orange-200",
  GNOME: "bg-blue-500/20 text-blue-300 dark:text-blue-200",
  Linux: "bg-yellow-500/20 text-yellow-300 dark:text-yellow-200",
  TypeScript: "bg-blue-600/20 text-blue-300 dark:text-blue-200",
  Rust: "bg-orange-600/20 text-orange-300 dark:text-orange-200",
  ISO: "bg-green-500/20 text-green-300 dark:text-green-200",
  Bootable: "bg-purple-500/20 text-purple-300 dark:text-purple-200",
  Archived: "bg-gray-500/30 text-gray-400 dark:text-gray-300",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: Project }) {
  const isArchived = project.tags.includes("Archived");
  
  return (
    <motion.div variants={itemVariants} className="group">
      <Card
        className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 ${
          isArchived ? "opacity-70" : ""
        }`}
        data-testid={`card-project-${project.id}`}
      >
        <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
          <div className="space-y-1 min-w-0">
            <CardTitle className="text-xl md:text-2xl font-semibold flex flex-wrap items-center gap-2">
              {project.name}
              {project.featured && (
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 no-default-hover-elevate">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              {isArchived && (
                <Badge
                  variant="secondary"
                  className="bg-gray-500/20 text-gray-400"
                >
                  <Archive className="h-3 w-3 mr-1" />
                  Archived
                </Badge>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <CardDescription className="text-sm md:text-base line-clamp-3 mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tags
              .filter((tag) => tag !== "Archived")
              .map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`text-xs ${tagColors[tag] || "bg-secondary"}`}
                >
                  {tag}
                </Badge>
              ))}
          </div>
        </CardContent>
        <CardFooter>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            data-testid={`link-project-github-${project.id}`}
          >
            <Button variant="outline" className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="h-64 animate-pulse">
          <CardHeader>
            <div className="h-6 bg-muted rounded w-3/4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
            <div className="flex gap-2 mt-4">
              <div className="h-6 bg-muted rounded-full w-16" />
              <div className="h-6 bg-muted rounded-full w-14" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const { data, isLoading, error } = useQuery<ProjectsData>({
    queryKey: ["/api/projects"],
  });

  const sortedProjects = data?.projects
    ? [...data.projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        const aArchived = a.tags.includes("Archived");
        const bArchived = b.tags.includes("Archived");
        if (aArchived && !bArchived) return 1;
        if (!aArchived && bArchived) return -1;
        return 0;
      })
    : [];

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
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
            data-testid="text-projects-title"
          >
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore our collection of open-source projects and tools
          </p>
        </motion.div>

        {isLoading ? (
          <ProjectsSkeleton />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Failed to load projects</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
