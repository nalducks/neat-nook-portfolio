import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">Let's Connect</h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Tertarik untuk bekerja sama? Silakan hubungi saya melalui email atau media sosial.
        </p>

        <Button asChild size="lg" className="rounded-lg px-8 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-box mb-10">
          <a href="mailto:dhanycaturpras@gmail.com" className="inline-flex items-center gap-2">
            <Mail size={16} />
            dhanycaturpras@gmail.com
          </a>
        </Button>

        <div className="flex items-center justify-center gap-8 text-muted-foreground">
          <a href="https://github.com/nalducks" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
