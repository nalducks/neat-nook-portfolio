import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Award, GraduationCap, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = ["Komunikasi", "Analisis", "Kolaborasi", "Kreativitas", "Penyelesaian Masalah"];
const languages = ["C++", "Python", "CSS", "JavaScript", "HTML"];
const software = ["Excel", "Word", "Power Point", "Accurate 5", "VS Code", "Arduino"];

const certificates = [
  "1st LKS Wilker 2021",
  "Data Engineering Dicoding",
  "Data Fundamental Microsoft Azure",
];

const education = [
  {
    title: "Sarjana Teknik Informatika",
    place: "Universitas Widyagama Malang",
    period: "2024 - Saat ini",
    desc: "Membuat ERD untuk meningkatkan kualitas desain basis data.",
  },
  {
    title: "Teknik Elektronika",
    place: "SMKN 1 Wonoasri",
    period: "2018 - 2021",
    desc: "Finalis LKS Tingkat Provinsi Jawa Timur 2021. Membuat project stopwatch dengan STM32 dan robotic line follower.",
  },
];

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="bg-secondary/80 text-foreground/90 px-3 py-1.5 text-xs font-medium rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default">
    {children}
  </Badge>
);

const SectionCard = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="glass rounded-xl p-5 gradient-border hover:bg-card/80 transition-all duration-300">
    <div className="flex items-center gap-2.5 mb-4">
      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground font-display text-sm tracking-wide">{title}</h3>
    </div>
    {children}
  </div>
);

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" ref={ref} className={`section-padding max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">About</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        {/* Left - Bio */}
        <div className="glass rounded-xl p-6 gradient-border">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <User size={16} />
            </div>
            <h3 className="font-semibold text-foreground font-display text-sm tracking-wide">Bio</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Dengan latar belakang di bidang elektronik dan teknologi, saya memiliki keahlian dalam administrasi dan perawatan mesin. Saat ini, saya bekerja sebagai Administrator dan Maintenance Technician, seperti Customer Service, Data Entry, Inventory Management, Troubleshooting, Repairing, Assembly and Fabrication.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm mt-4">
            Saya tertarik untuk mengembangkan karir di dunia teknologi digital. Saya memiliki keahlian dalam bahasa pemrograman seperti C++, Python, JavaScript, HTML, dan CSS, serta telah mengembangkan situs web portofolio pribadi.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-border/50">
            <div className="text-center">
              <p className="text-xl font-bold text-primary font-display">3+</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-primary font-display">5+</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-primary font-display">3</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Certificates</p>
            </div>
          </div>
        </div>

        {/* Right - Details Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <SectionCard title="Skills" icon={<User size={16} />}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </SectionCard>

          <SectionCard title="Languages" icon={<Code size={16} />}>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => <SkillBadge key={l}>{l}</SkillBadge>)}
            </div>
          </SectionCard>

          <SectionCard title="Software" icon={<Wrench size={16} />}>
            <div className="flex flex-wrap gap-2">
              {software.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </SectionCard>

          <SectionCard title="Certificates" icon={<Award size={16} />}>
            <div className="flex flex-wrap gap-2">
              {certificates.map((c) => <SkillBadge key={c}>{c}</SkillBadge>)}
            </div>
            <a
              href="https://drive.google.com/drive/folders/1EiWfN_RKm6xdpG-e56c8mFy9EwU0fjRW?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary underline mt-3 inline-block hover:text-primary/80 transition-colors"
            >
              See All →
            </a>
          </SectionCard>

          <div className="sm:col-span-2">
            <SectionCard title="Education" icon={<GraduationCap size={16} />}>
              <div className="grid sm:grid-cols-2 gap-4">
                {education.map((edu) => (
                  <div key={edu.title} className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <p className="font-medium text-foreground text-sm">{edu.title}</p>
                    <p className="text-xs text-primary/80 font-medium mt-1">{edu.period}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.place}</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
