import { motion } from "framer-motion";

export default function Contact() {
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
            ✉️ Contact
          </motion.h2>

          <motion.p variants={item} style={styles.lead}>
            Want to collaborate or hire me? Send a message and I’ll reply as soon as I can.
          </motion.p>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          style={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* FORM CARD */}
          <motion.div
            variants={card}
            style={styles.card}
            whileHover={{
              y: -6,
              boxShadow: "0 30px 75px rgba(59,130,246,0.18)",
              border: "1px solid rgba(139,92,246,0.35)",
            }}
          >
            <h3 style={styles.cardTitle}>Send a Message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! ✅ (Demo)");
              }}
              style={styles.form}
            >
              <div style={styles.row}>
                <div style={styles.field}>
                  <label style={styles.label}>Name</label>
                  <input style={styles.input} placeholder="Your name" required />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Email</label>
                  <input style={styles.input} placeholder="you@example.com" type="email" required />
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Subject</label>
                <input style={styles.input} placeholder="Project / Internship / Question" />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Message</label>
                <textarea style={styles.textarea} placeholder="Write your message..." rows="6" required />
              </div>

              <motion.button
                type="submit"
                style={styles.primaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            variants={card}
            style={styles.infoCard}
            whileHover={{
              y: -6,
              boxShadow: "0 30px 75px rgba(59,130,246,0.14)",
              border: "1px solid rgba(139,92,246,0.30)",
            }}
          >
            <h3 style={styles.cardTitle}>Contact Info</h3>

            <div style={styles.infoItem}>
              <p style={styles.infoLabel}>Email</p>
              <p style={styles.infoValue}>geethmaabeywickrama@gmail.com</p>
            </div>

            <div style={styles.infoItem}>
              <p style={styles.infoLabel}>Location</p>
              <p style={styles.infoValue}>Sri Lanka, Wattala</p>
            </div>

            <div style={styles.infoItem}>
              <p style={styles.infoLabel}>GitHub</p>
              <a
                href="https://github.com/geethmaN"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                github.com/geethmaN
              </a>
            </div>

            <div style={styles.infoItem}>
              <p style={styles.infoLabel}>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/geethma-nimsarani"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                linkedin.com/in/geethma-nimsarani
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 18px 120px",
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
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "start",
  },

  card: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(12px)",
  },

  infoCard: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(12px)",
    position: "sticky",
    top: 90,
  },

  cardTitle: { margin: 0, fontSize: 16, fontWeight: 900 },

  form: { marginTop: 14, display: "grid", gap: 12 },

  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },

  field: { display: "grid", gap: 8 },

  label: { fontSize: 12.5, color: "var(--muted)" },

  input: {
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--card)",
    color: "var(--text)",
    outline: "none",
  },

  textarea: {
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--card)",
    color: "var(--text)",
    outline: "none",
    resize: "vertical",
  },

  primaryBtn: {
    cursor: "pointer",
    padding: "12px 14px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    color: "#fff",
    fontWeight: 900,
    border: "1px solid var(--border)",
    boxShadow: "0 18px 45px rgba(59,130,246,0.18)",
    marginTop: 4,
  },

  infoItem: {
    marginTop: 14,
    padding: 12,
    borderRadius: 14,
    border: "1px solid var(--border)",
    background: "var(--card)",
  },
  infoLabel: { margin: 0, fontSize: 12, color: "var(--muted)" },
  infoValue: { marginTop: 8, fontSize: 13.5, fontWeight: 800 },

  link: {
    display: "inline-block",
    marginTop: 8,
    color: "rgba(96,165,250,1)",
    fontWeight: 800,
    textDecoration: "none",
  },
};
