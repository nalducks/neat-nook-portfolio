import { Button } from "@/components/ui/button";
import profilImg from "@/assets/profil.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center section-padding text-center pt-24 relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/30 mb-8 mx-auto glow-box animate-float">
          <img src={profilImg} alt="Dhany Catur Prasetya" className="w-full h-full object-cover" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-primary font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight font-display">
          Hi, I'm <span className="text-primary glow-text">Dhany</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Berpengalaman sebagai teknisi dengan keterampilan coding, berfokus pada
          <span className="text-primary"> analisis data</span> dan
          <span className="text-accent"> cybersecurity</span>.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="rounded-lg px-8 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-box">
            <a href="#contact">Let's Connect</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg px-8 text-sm font-medium border-border text-foreground hover:border-primary hover:text-primary transition-all">
            <a href="https://drive.google.com/file/d/1vwoboXSw24dzRqMf6cMY4ftYJisLl5-G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
