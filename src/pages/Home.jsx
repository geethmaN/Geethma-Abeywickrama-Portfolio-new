import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profileImg from "../assets/images/geethma.jpg";

/* ✅ Brand SVG Icons */
const SocialIcon = ({ type }) => {
  const icons = {
    github: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48s1.34 2.98 2.98 2.98A2.98 2.98 0 004.98 3.5zM2.4 21.5h5.16V9H2.4v12.5zM9.7 9h4.94v1.7h.07c.69-1.3 2.37-2.67 4.88-2.67 5.22 0 6.19 3.44 6.19 7.9v5.57h-5.16v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.02H9.7V9z" />
      </svg>
    ),
    whatsapp: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0012 .5C5.7.5.5 5.7.5 12c0 2.1.6 4.2 1.7 6l-1.8 5.5 5.7-1.8c1.7.9 3.6 1.4 5.5 1.4 6.3 0 11.5-5.2 11.5-11.5 0-3.1-1.2-6-3.3-8.1z" />
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.4C0 23.4.6 24 1.3 24h11.5v-9.3H9.7V11h3.1V8.4c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.4.1 2.7.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8V11h3.6l-.5 3.7h-3.1V24h6.1c.7 0 1.3-.6 1.3-1.3V1.3C24 .6 23.4 0 22.7 0z" />
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM18.3 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
      </svg>
    ),
  };

  return <span style={{ display: "grid", placeItems: "center" }}>{icons[type]}</span>;
};

export default function Home() {
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
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/geethmaN", icon: "github", hoverColor: "#000000", glow: "rgba(0,0,0,0.55)" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/geethma-nimsarani", icon: "linkedin", hoverColor: "#0A66C2", glow: "rgba(10,102,194,0.45)" },
    { name: "WhatsApp", href: "https://wa.me/94773763973", icon: "whatsapp", hoverColor: "#25D366", glow: "rgba(37,211,102,0.40)" },
    { name: "Facebook", href: "https://www.facebook.com/geethma.abeywickrama.3?mibextid=kFxxJD", icon: "facebook", hoverColor: "#1877F2", glow: "rgba(24,119,242,0.42)" },
    { name: "Instagram", href: "https://www.instagram.com/_geethma.abeywickrama_?igsh=MTQwcnM2MTlta3g4dw==", icon: "instagram", hoverColor: "#E1306C", glow: "rgba(225,48,108,0.40)" },
  ];

  /* ---------- 3D tilt + parallax setup ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useTransform(my, [-40, 40], [10, -10]);
  const rotateY = useTransform(mx, [-40, 40], [-10, 10]);

  const rX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.6 });
  const rY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.6 });

  // image parallax (small move)
  const imgX = useSpring(useTransform(mx, [-40, 40], [-10, 10]), {
    stiffness: 160,
    damping: 18,
    mass: 0.5,
  });
  const imgY = useSpring(useTransform(my, [-40, 40], [-10, 10]), {
    stiffness: 160,
    damping: 18,
    mass: 0.5,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    // clamp for safety
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    mx.set(clamp(px, -40, 40));
    my.set(clamp(py, -40, 40));
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            style={styles.left}
          >
            <motion.div variants={item} style={styles.badge}>
              ✨ IT Graduate • Software Developer • UI/UX • QA
            </motion.div>

            <motion.h1 variants={item} style={styles.title}>
              👋 Hi, I’m <span style={styles.highlight}>Geethma</span> Abeywickrama
            </motion.h1>

            <motion.p variants={item} style={styles.lead}>
              I am a SLIIT graduate (2025) with a BSc (Hons) in Information Technology, and I’m
              motivated to contribute my technical and design expertise to build high-quality digital solutions.
            </motion.p>

            <motion.div variants={item} style={styles.btnRow}>
              <motion.button
                style={styles.primaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("projects")}
              >
                View Projects
              </motion.button>

              <motion.button
                style={styles.secondaryBtn}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              style={styles.stats}
            >
              {[
                { num: "10+", text: "Projects / Practice" },
                { num: "UI/UX", text: "Figma • Clean Design" },
                { num: "SQA", text: "Cypress • Selenium" },
              ].map((s) => (
                <motion.div key={s.num} variants={card} style={styles.statCard}>
                  <p style={styles.statNum}>{s.num}</p>
                  <p style={styles.statText}>{s.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Connect card */}
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              style={styles.connectCard}
            >
              <h4 style={{ margin: 0, fontWeight: 900 }}>🌐 Connect with me</h4>

              <div style={styles.socialRow}>
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.06,
                      color: s.hoverColor,
                      borderColor: s.hoverColor,
                      boxShadow: `0 18px 45px ${s.glow}`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={styles.socialBtn}
                    title={s.name}
                    aria-label={s.name}
                  >
                    <SocialIcon type={s.icon} />
                  </motion.a>
                ))}
              </div>

              <p style={styles.socialHint}>Hover an icon to see where it goes ✨</p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            style={styles.right}
          >
            {/* perspective wrapper */}
            <div style={styles.perspective}>
              <motion.div
                variants={card}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{
                  ...styles.profileCard,
                  rotateX: rX,
                  rotateY: rY,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 30px 75px rgba(59,130,246,0.22)",
                  border: "1px solid rgba(139,92,246,0.45)",
                }}
                // subtle float always
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              >
                <div style={styles.avatarWrap}>
                  <div style={styles.avatarSquare}>
                    <motion.div style={{ ...styles.avatarInner, x: imgX, y: imgY }}>
                      <img
                        src={profileImg}
                        alt="Geethma Abeywickrama"
                        style={styles.avatarImage}
                      />
                    </motion.div>
                  </div>
                </div>

                <h3 style={styles.cardTitle}>Full Stack Developer</h3>
                <p style={styles.cardSub}>React • JavaScript • UI/UX • Testing</p>

                <div style={styles.pills}>
                  {["React", "UI/UX", "Cypress", "GitHub"].map((p) => (
                    <span key={p} style={styles.pill}>
                      {p}
                    </span>
                  ))}
                </div>

                {/* CV */}
                <motion.a
                  href="/cv/Geethma Nimsarani CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={styles.cvBtn}
                >
                  ⬇️ Download CV
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "center",
  },

  left: {},

  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid var(--border)",
    background: "var(--card)",
    color: "var(--text)",
    fontSize: 13.5,
    marginBottom: 14,
  },

  title: {
    margin: 0,
    fontSize: 46,
    fontWeight: 900,
    letterSpacing: "-0.8px",
    lineHeight: 1.08,
  },
  highlight: {
    background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  lead: {
    marginTop: 12,
    maxWidth: 650,
    color: "var(--muted)",
    lineHeight: 1.75,
    fontSize: 16,
  },

  btnRow: { display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" },
  primaryBtn: {
    cursor: "pointer",
    padding: "12px 16px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    color: "#fff",
    fontWeight: 900,
    border: "1px solid var(--border)",
    boxShadow: "0 18px 45px rgba(59,130,246,0.18)",
  },
  secondaryBtn: {
    cursor: "pointer",
    padding: "12px 16px",
    borderRadius: 14,
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    color: "var(--text)",
    fontWeight: 800,
    border: "1px solid var(--border)",
  },

  stats: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  statCard: {
    padding: "14px 14px",
    borderRadius: 16,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(10px)",
  },
  statNum: { margin: 0, fontSize: 18, fontWeight: 900 },
  statText: { marginTop: 6, fontSize: 13.5, color: "var(--muted)" },

  socialHint: { marginTop: 10, fontSize: 12.5, color: "var(--muted)" },

  right: { display: "grid", placeItems: "center" },

  perspective: {
    perspective: 900,
    width: "100%",
    display: "grid",
    placeItems: "center",
  },

  profileCard: {
    width: "100%",
    maxWidth: 380,
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    color: "var(--text)",
    willChange: "transform",
  },

  avatarWrap: { display: "flex", justifyContent: "center", marginBottom: 16 },
  avatarSquare: {
    width: 240,
    height: 290,
    borderRadius: 24,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    boxShadow: "0 22px 55px rgba(139,92,246,0.28)",
    transform: "translateZ(0px)",
  },
  avatarInner: {
    width: "98%",
    height: "98%",
    borderRadius: 20,
    overflow: "hidden",
    background: "#000",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 70%",
    borderRadius: 18,
    transform: "translateZ(20px)",
  },

  cardTitle: { margin: 0, fontSize: 16, fontWeight: 900 },
  cardSub: { marginTop: 8, color: "var(--muted)", fontSize: 13.5 },

  pills: {
    marginTop: 14,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  pill: {
    fontSize: 12.2,
    padding: "7px 10px",
    borderRadius: 999,
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  },

  connectCard: {
    marginTop: 40,
    padding: 18,
    borderRadius: 18,
    border: "1px solid var(--border)",
    background: "var(--card)",
    backdropFilter: "blur(10px)",
    textAlign: "center",
  },

  socialRow: {
    marginTop: 14,
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    transition: "color 0.2s, border-color 0.2s",
    textDecoration: "none",
  },

  cvBtn: {
    marginTop: 16,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "12px 14px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    color: "#fff",
    background: "linear-gradient(135deg, #22c55e, #3b82f6)",
    border: "1px solid var(--border)",
    boxShadow: "0 18px 45px rgba(34,197,94,0.20)",
  },
};
