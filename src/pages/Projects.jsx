import { motion } from "framer-motion";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Diet Plan & Health Checkup",
      desc: "A health-focused application to manage diet planning and basic health checkup tracking.",
      tags: ["Web App", "UI/UX", "CRUD"],
      github: "https://github.com/geethmaN/IWT-Final-project",
    },
    {
      title: "Employee Management System (CRUD)",
      desc: "A CRUD-based system for managing employee records with create, update, delete, and search features.",
      tags: ["CRUD", "Database", "Web App"],
      github: "https://github.com/geethmaN/employee-manegement",
    },
    {
      title: "Book-Store",
      desc: "A bookstore management application to handle inventory, book listings, and basic sales workflow.",
      tags: ["Web App", "Database", "CRUD"],
      github: "https://github.com/geethmaN/book-store",
    },
    {
      title: "Pharmacy Management System",
      desc: "A management system to handle medicines, stock, and pharmacy operations with clean UI.",
      tags: ["Management System", "Database", "CRUD"],
      github: "https://github.com/geethmaN/Pharmacy_Managment_System",
    },
    {
      title: "Cattle Management System (Research Project)",
      desc: "Research-based system for cattle management including monitoring, analysis, and smart decision-making features.",
      tags: ["Research", "IoT", "Machine Learning"],
      github: "https://github.com/geethmaN/Cattle_Managment_System_Research",
    },
    {
      title: "Boot-Lite Store",
      desc: "A simple full-stack project with JavaScript and MySQL, showcasing CRUD and clean UI.",
      tags: ["JavaScript", "MySQL", "HTML/CSS"],
      github: "https://github.com/geethmaN/Boot-Lite-store",
    },
    {
      title: "Intern Management System (SQA)",
      desc: "Testing-focused project using Cypress (and learning Selenium) to ensure product quality.",
      tags: ["Cypress", "Testing", "QA"],
      github: "https://github.com/geethmaN/Intern-Management-System-SQA-",
    },
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio built with React and smooth scroll navigation.",
      tags: ["React", "UI/UX", "Responsive"],
      github: "https://github.com/geethmaN/Geethma-Abeywickrama-Portfolio",
    },
   {
      title: "Nanasa Educational App",
      desc: "A Kotlin-based Android educational app designed to support interactive learning with a user-friendly interface and organized content flow.",
      tags: ["Kotlin", "Android Studio", "Material Design"],
      github: "https://github.com/geethmaN/nanasa_educational_app",
    },

  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 variants={item} style={styles.title}>
            💼 Projects
          </motion.h2>

          <motion.p variants={item} style={styles.lead}>
            A selection of projects showcasing my skills in full-stack development, UI/UX design,
            and software quality assurance.
          </motion.p>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          style={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              style={styles.card}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 75px rgba(59,130,246,0.22)",
                border: "1px solid rgba(139,92,246,0.45)",
              }}
            >
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.desc}</p>

              <div style={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              {p.github && p.github !== "#" && (
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.githubBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View on GitHub
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 18px",
    background:
      "radial-gradient(900px 360px at 10% 10%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(760px 320px at 90% 20%, rgba(59,130,246,0.16), transparent 55%), var(--bg)",
    color: "var(--text)",
  },
  container: { maxWidth: 1100, margin: "0 auto" },

  title: {
    fontSize: 42,
    fontWeight: 900,
    letterSpacing: "-0.6px",
    margin: 0,
    color: "var(--text)",
  },
  lead: {
    marginTop: 12,
    maxWidth: 780,
    color: "var(--muted)",
    lineHeight: 1.75,
    fontSize: 16,
  },

  grid: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 18,
  },

  card: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    color: "var(--text)",
  },

  cardTitle: { fontSize: 16, fontWeight: 900, margin: 0, color: "var(--text)" },
  cardDesc: {
    marginTop: 10,
    color: "var(--muted)",
    lineHeight: 1.6,
  },

  tags: { marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 },
  tag: {
    fontSize: 12.2,
    padding: "7px 10px",
    borderRadius: 999,
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  },

  githubBtn: {
    display: "inline-block",
    marginTop: 14,
    padding: "10px 14px",
    borderRadius: 12,
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    color: "#fff",
    fontWeight: 800,
    fontSize: 13.5,
    textDecoration: "none",
  },
};
