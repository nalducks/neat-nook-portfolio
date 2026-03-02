import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brand Identity System",
    description:
      "A complete visual identity for a fintech startup, including logo, typography, and brand guidelines.",
    tag: "Branding",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Designed and developed a modern shopping experience with seamless checkout and product discovery.",
    tag: "Web Development",
  },
  {
    title: "Mobile Banking App",
    description:
      "A clean, intuitive mobile app focused on simplifying personal finance management.",
    tag: "Product Design",
  },
  {
    title: "Portfolio Website",
    description:
      "A minimal, fast portfolio built with React and Tailwind CSS to showcase creative work.",
    tag: "Web Design",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading-lg text-foreground mb-16 text-center">Selected Work</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group border border-border bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {project.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <CardTitle className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
