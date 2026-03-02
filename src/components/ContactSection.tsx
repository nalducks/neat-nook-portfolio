import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <h2 className="heading-lg text-foreground mb-6">Let's Work Together</h2>
      <p className="body-lg mb-10 max-w-md mx-auto">
        Have a project in mind? I'd love to hear about it. Drop me a message and
        let's create something great.
      </p>

      <Button asChild size="lg" className="rounded-full px-8 text-sm font-medium mb-12">
        <a href="mailto:hello@johndoe.com" className="inline-flex items-center gap-2">
          <Mail size={16} />
          hello@johndoe.com
        </a>
      </Button>

      <div className="flex items-center justify-center gap-8 text-muted-foreground">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-foreground transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-foreground transition-colors"
        >
          Dribbble
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
