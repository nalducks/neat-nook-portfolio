import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Tertarik untuk bekerja sama? Silakan hubungi saya melalui email atau media sosial.
      </p>

      <Button asChild variant="outline" size="lg" className="rounded-lg px-6 text-sm font-medium border-foreground text-foreground hover:bg-foreground hover:text-background mb-10">
        <a href="mailto:dhanycaturpras@gmail.com" className="inline-flex items-center gap-2">
          <Mail size={16} />
          dhanycaturpras@gmail.com
        </a>
      </Button>

      <div className="flex items-center justify-center gap-8 text-muted-foreground">
        <a href="https://github.com/nalducks" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-foreground transition-colors">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-foreground transition-colors">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-foreground transition-colors">Instagram</a>
      </div>
    </section>
  );
};

export default ContactSection;
