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
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center font-display">
        Experience
      </h2>
      <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-12" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="glass rounded-2xl p-6 md:p-8 gradient-border group hover:glow-box transition-shadow duration-500"
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground font-display">{exp.company}</h3>
                <p className="text-sm text-primary font-medium mt-1">{exp.position}</p>
              </div>
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">{exp.duration}</span>
            </div>
            <ul className="space-y-2">
              {exp.tasks.map((task, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-0.5">▹</span>
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
