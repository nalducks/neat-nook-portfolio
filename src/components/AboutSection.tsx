import { Badge } from "@/components/ui/badge";

const skills = ["Komunikasi", "Analisis", "Kolaborasi", "Kreativitas", "Penyelesaian Masalah"];
const languages = ["C ++", "Python", "CSS", "JavaScript", "HTML"];
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
  <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium rounded-lg">
    {children}
  </Badge>
);

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
        {/* Left - About text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Dengan latar belakang di bidang elektronik dan teknologi, saya memiliki keahlian dalam administrasi dan perawatan mesin. Saat ini, saya bekerja sebagai Administrator dan Maintenance Technician, seperti Customer Service, Data Entry, Inventory Management, Troubleshooting, Repairing, Assembly and Fabrication, yang menunjukkan kemampuan saya dalam pemecahan masalah.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
            Saya tertarik untuk mengembangkan karir di dunia teknologi digital. Saya memiliki keahlian dalam bahasa pemrograman seperti C++, Python, JavaScript, HTML, dan CSS, serta telah mengembangkan situs web portofolio pribadi.
          </p>
        </div>

        {/* Right - Skills cards */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Language Programming</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((l) => <SkillBadge key={l}>{l}</SkillBadge>)}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Software</h3>
            <div className="flex flex-wrap gap-2">
              {software.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Certificate</h3>
            <div className="flex flex-wrap gap-2">
              {certificates.map((c) => <SkillBadge key={c}>{c}</SkillBadge>)}
            </div>
            <a
              href="https://drive.google.com/drive/folders/1EiWfN_RKm6xdpG-e56c8mFy9EwU0fjRW?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-foreground underline mt-3 inline-block hover:text-foreground transition-colors"
            >
              See All →
            </a>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.title}>
                  <p className="font-medium text-foreground text-sm">{edu.title}</p>
                  <p className="text-xs text-muted-foreground">{edu.place}, {edu.period}</p>
                  <p className="text-xs text-muted-foreground mt-1">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
