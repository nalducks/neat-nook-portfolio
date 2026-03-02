import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center section-padding text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up">
        Hello, I'm
      </p>
      <h1 className="heading-xl text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        John Doe
      </h1>
      <p className="body-lg max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        A creative developer crafting clean, thoughtful digital experiences.
      </p>
      <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="rounded-full px-8 text-sm font-medium">
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
