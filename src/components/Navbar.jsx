import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navHeight = navRef.current?.offsetHeight || 64;
    const y = el.getBoundingClientRect().top + window.scrollY - (navHeight + 16);
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section observer */
  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = getThemeStyles(isDark, scrolled);

  return (
    <header ref={navRef} style={t.header}>
      <nav style={t.nav}>
        <div style={t.inner}>
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} style={t.logo}>
            Geethma<span style={t.dot}>.</span>
          </button>

          {/* Desktop menu */}
          <div style={t.desktop} className="__nav_desktop">
            {SECTIONS.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  ...t.link,
                  ...(active === s.id ? t.linkActive : {}),
                }}
              >
                <span style={{ position: "relative" }}>
                  {s.label}

                  {/* underline animation */}
                  <motion.span
                    initial={false}
                    animate={{
                      width: active === s.id ? "100%" : "0%",
                      opacity: active === s.id ? 1 : 0,
                    }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={t.underline}
                  />
                </span>
              </motion.button>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={t.themeBtn}
              title="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </motion.button>
          </div>

          {/* Mobile button */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            style={t.mobileBtn}
            className="__nav_mobile_btn"
          >
            {open ? "✕" : "☰"}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={t.mobileWrap}
            >
              <div style={t.mobileMenu}>
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    style={{
                      ...t.mobileLink,
                      ...(active === s.id ? t.mobileActive : {}),
                    }}
                  >
                    {s.label}
                  </button>
                ))}

                <button onClick={toggleTheme} style={t.mobileLink}>
                  {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

/* ================= STYLES ================= */

function getThemeStyles(isDark, scrolled) {
  return {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 999,
    },

    nav: {
      background: isDark
        ? "rgba(10,10,18,0.75)"
        : "rgba(255,255,255,0.75)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border)",
      boxShadow: scrolled
        ? isDark
          ? "0 14px 40px rgba(0,0,0,0.35)"
          : "0 14px 40px rgba(0,0,0,0.12)"
        : "none",
    },

    inner: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 18px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    logo: {
      border: "none",
      background: "transparent",
      color: "var(--text)",
      fontSize: 18,
      fontWeight: 900,
      cursor: "pointer",
    },

    dot: { color: "#3b82f6" },

    desktop: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },

    link: {
      border: "none",
      background: "transparent",
      color: "var(--text)",
      padding: "10px 14px",
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 800,
      cursor: "pointer",
      opacity: 0.85,
    },

  
    linkActive: { opacity: 1 , color: "#3b82f6", fontWeight: 700 },

    underline: {
      position: "absolute",
      left: 0,
      bottom: -6,
      height: 2,
      width: 0,
      borderRadius: 999,
      background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
    },

    themeBtn: {
      width: 40,
      height: 40,
      borderRadius: 14,
      border: "1px solid var(--border)",
      background: "var(--card)",
      cursor: "pointer",
      display: "grid",
      placeItems: "center",
      marginLeft: 6,
    },

    mobileBtn: {
      display: "none",
      width: 42,
      height: 42,
      borderRadius: 14,
      border: "1px solid var(--border)",
      background: "var(--card)",
      cursor: "pointer",
      fontSize: 18,
    },

    mobileWrap: {
      overflow: "hidden",
      borderTop: "1px solid var(--border)",
    },

    mobileMenu: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "14px 18px",
      display: "grid",
      gap: 8,
    },

    mobileLink: {
      border: "1px solid var(--border)",
      background: "var(--card)",
      color: "var(--text)",
      padding: "12px",
      borderRadius: 14,
      fontWeight: 800,
      cursor: "pointer",
      textAlign: "left",
    },

    mobileActive: {
      border: "1px solid rgba(59,130,246,0.4)",
      background: isDark
        ? "rgba(59,130,246,0.18)"
        : "rgba(59,130,246,0.12)",
    },
  };
}

/* ========= RESPONSIVE ========= */
if (typeof window !== "undefined") {
  const id = "__navbar_pretty__";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @media (max-width: 768px) {
        .__nav_desktop { display: none !important; }
        .__nav_mobile_btn { display: inline-grid !important; }
      }
    `;
    document.head.appendChild(style);
  }
}
