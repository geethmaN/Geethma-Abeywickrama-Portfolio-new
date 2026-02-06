import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";

export default function About() {
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

  const chips = [
    "React",
    "JavaScript",
    "Spring Boot",
    "Python",
    "UI/UX",
    "Cypress",
    "Selenium",
    "IoT",
    "Machine Learning",
    "Bubble.io",
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2 variants={item} style={styles.title}>
            👩‍💻 About Me
          </motion.h2>

          <motion.p variants={item} style={styles.lead}>
            I’m Geethma Abeywickrama — a Software Developer focused on building modern
            web experiences, full-stack applications, and smart solutions powered
            by real-time data.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div style={styles.grid}>
          {/* LEFT */}
          <motion.div
            style={styles.left}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={card} style={styles.panel}>
              <h3 style={styles.panelTitle}>My Story</h3>

              <p style={styles.text}>
                Hello! I’m Geethma Abeywickrama, a passionate Software Developer.
                I specialize in building responsive websites, full-stack web
                applications, and smart solutions using real-time data.
              </p>

              <p style={styles.text}>
                I have hands-on experience in Python, JavaScript, HTML/CSS,
                React.js, Spring Boot, and IoT systems. During my professional
                internship at Adventa Holdings Pvt, I worked on real-world projects
                involving UI development using Bubble.io, Agile workflows, and
                client-focused solutions.
              </p>

              <p style={styles.text}>
                My research focuses on applying Machine Learning and IoT for
                predictive analytics, automated monitoring, and intelligent
                decision-making. I’m also learning Selenium and Cypress to
                strengthen my skills in automated testing.
              </p>
            </motion.div>

            <motion.div variants={card} style={styles.panel}>
              <h3 style={styles.panelTitle}>Highlights</h3>

              <div style={styles.timeline}>
                <div style={styles.tItem}>
                  <div style={styles.dot} />
                  <div>
                    <p style={styles.tTitle}>Internship • Adventa Holdings Pvt</p>
                    <p style={styles.tText}>UI development • Bubble.io • Agile/Scrum</p>
                  </div>
                </div>

                <div style={styles.tItem}>
                  <div style={styles.dot} />
                  <div>
                    <p style={styles.tTitle}>Research • ML + IoT</p>
                    <p style={styles.tText}>
                      Predictive analytics • Monitoring • Decision-making
                    </p>
                  </div>
                </div>

                <div style={styles.tItem}>
                  <div style={styles.dot} />
                  <div>
                    <p style={styles.tTitle}>Testing Focus</p>
                    <p style={styles.tText}>Selenium • Cypress • Test case writing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.aside
            style={styles.right}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={card}
              style={styles.profileCard}
              whileHover={{
                y: -8,
                boxShadow: "0 30px 75px rgba(59,130,246,0.18)",
                border: "1px solid rgba(139,92,246,0.35)",
              }}
            >
              {/* Avatar */}
              <div style={styles.avatarWrap}>
                <div style={styles.avatarCircle}>
                  <div style={styles.avatarInner}>
                    <img
                      src={profileImg}
                      alt="Geethma Abeywickrama"
                      style={styles.avatarImage}
                    />
                  </div>
                </div>
              </div>

              <h3 style={styles.name}>Geethma Abeywickrama</h3>
              <p style={styles.role}>Software Developer • UI/UX • Full Stack</p>

              <div style={styles.divider} />

              <div style={styles.quickGrid}>
                <div style={styles.quickItem}>
                  <p style={styles.quickLabel}>Location</p>
                  <p style={styles.quickValue}>Sri Lanka</p>
                </div>
                <div style={styles.quickItem}>
                  <p style={styles.quickLabel}>Open to</p>
                  <p style={styles.quickValue}>Internships</p>
                </div>
                <div style={styles.quickItem}>
                  <p style={styles.quickLabel}>Focus</p>
                  <p style={styles.quickValue}>React + QA</p>
                </div>
                <div style={styles.quickItem}>
                  <p style={styles.quickLabel}>Strength</p>
                  <p style={styles.quickValue}>Fast Learner</p>
                </div>
              </div>

              <div style={styles.chips}>
                {chips.map((c) => (
                  <span key={c} style={styles.chip}>
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>
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
    gridTemplateColumns: "1.35fr 0.65fr",
    gap: 18,
  },
  left: { display: "grid", gap: 16 },
  right: { position: "sticky", top: 90 },

  panel: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(10px)",
  },
  panelTitle: { fontSize: 16, fontWeight: 900 },

  text: {
    marginTop: 12,
    color: "var(--muted)",
    lineHeight: 1.8,
    fontSize: 15.6,
  },

  timeline: { marginTop: 14, display: "grid", gap: 14 },
  tItem: { display: "grid", gridTemplateColumns: "16px 1fr", gap: 10 },
  dot: {
    width: 10,
    height: 10,
    marginTop: 6,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
  },
  tTitle: { fontWeight: 900, fontSize: 13.8 },
  tText: { color: "var(--muted)", fontSize: 13.5 },

  profileCard: {
    padding: 18,
    borderRadius: 20,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(12px)",
    color: "var(--text)",
  },

  avatarWrap: { display: "flex", justifyContent: "center", marginBottom: 12 },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
  },
  avatarInner: {
    width: "92%",
    height: "92%",
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 5%",
    borderRadius: "50%",
  },

  name: { marginTop: 10, fontSize: 16, fontWeight: 900 },
  role: { color: "var(--muted)", fontSize: 13.5 },

  divider: { height: 1, background: "var(--border)", margin: "14px 0" },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
  },
  quickItem: {
    padding: 10,
    borderRadius: 14,
    background: "var(--card)",
    border: "1px solid var(--border)",
  },
  quickLabel: { fontSize: 11.5, color: "var(--muted)" },
  quickValue: { fontWeight: 800, fontSize: 13.5 },

  chips: { marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 },
  chip: {
    fontSize: 12.2,
    padding: "7px 10px",
    borderRadius: 999,
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  },
};
