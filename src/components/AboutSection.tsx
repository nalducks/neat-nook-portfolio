const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <h2 className="heading-lg text-foreground mb-16 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-6">
          <p className="body-lg">
            I'm a designer and developer passionate about building products that are
            both beautiful and functional. With years of experience across branding,
            web, and product design, I bring ideas to life with clean code and
            thoughtful design.
          </p>
          <p className="body-lg">
            When I'm not designing, you can find me exploring new technologies,
            reading, or enjoying the outdoors. I believe great design is invisible —
            it simply works.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
            <span className="text-muted-foreground text-sm">Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
