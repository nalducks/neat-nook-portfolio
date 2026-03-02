import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Kalkulator",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Data Analysis Dashboard",
    tags: ["Python", "Excel"],
  },
  {
    title: "Arduino Line Follower",
    tags: ["C++", "Arduino"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="bg-card border border-border rounded-2xl hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-accent text-accent-foreground px-3 py-1 text-xs rounded-md"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
