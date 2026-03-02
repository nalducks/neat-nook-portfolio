const experiences = [
  {
    company: "PT PERKAKAS SUMBER KARYA",
    position: "Maintenance Technician and Administration",
    duration: "January 2023 - Present",
    tasks: [
      "Melakukan perawatan mekanikal dan elektrikal pada mesin seperti las inverter, kompresor, dan jet cleaner.",
      "Menangani penggantian suku cadang dan penyediaan spare part.",
      "Menangani data administrasi, termasuk analisis kerusakan dan pembuatan estimasi biaya.",
      "Mengelola laporan keuangan harian dan arsip data pelanggan.",
    ],
  },
  {
    company: "PT SEMESTA GEMILANG KARYATAMA",
    position: "Maintenance Technician",
    duration: "July 2021 - January 2023",
    tasks: [
      "Menyiapkan jadwal perawatan mesin industri dan melaporkan kebutuhan penggantian suku cadang.",
      "Merakit mesin dan panel kontrol, termasuk panel pengujian motor 3 fasa.",
      "Melakukan pengelasan pada mesin produksi untuk kebutuhan desain tambahan.",
    ],
  },
  {
    company: "PPPPTK BOE MALANG",
    position: "Internship",
    duration: "October 2019 - December 2019",
    tasks: [
      "Membantu persiapan peralatan pelatihan, pembuatan laporan harian dan akhir magang.",
      "Mengembangkan program lampu lalu lintas menggunakan Arduino Uno.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        My Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
            <p className="text-sm text-accent-foreground font-medium mt-1">{exp.position}</p>
            <p className="text-xs text-muted-foreground mt-1 mb-4">{exp.duration}</p>
            <ul className="space-y-2">
              {exp.tasks.map((task, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent-foreground mt-1">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
