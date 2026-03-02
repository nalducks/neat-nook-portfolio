import { Button } from "@/components/ui/button";
import profilImg from "@/assets/profil.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center section-padding text-center pt-24"
    >
      <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border mb-8 shadow-lg">
        <img
          src={profilImg}
          alt="Dhany Catur Prasetya"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        "Hi, Saya Dhany Catur Prasetya.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        Berpengalaman sebagai teknisi dengan keterampilan coding, saya berfokus pada analisis data dan cybersecurity untuk mendukung dunia teknologi digital."
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline" size="lg" className="rounded-lg px-6 text-sm font-medium border-foreground text-foreground hover:bg-foreground hover:text-background">
          <a href="#contact">Let's Connect</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-lg px-6 text-sm font-medium border-foreground text-foreground hover:bg-foreground hover:text-background">
          <a href="https://drive.google.com/file/d/1vwoboXSw24dzRqMf6cMY4ftYJisLl5-G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
