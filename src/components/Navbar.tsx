"use client";

import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Templates", href: "#templates" },
  { label: "Features", href: "#feature" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const styles: Record<string, React.CSSProperties> = {
  nav: {
    background: "transparent",
    width: "1440px",
    height: "102px",
    overflow: "hidden",
    padding: "8px 0",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  outerDiv: {
    background: "transparent",
    width: "1440px",
    height: "86px",
    padding: "0 60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  whitePill: {
    background: "rgb(255,255,255)",
    width: "1320px",
    maxWidth: "1320px",
    height: "86px",
    borderRadius: "100px",
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  },
  darkPill: {
    background: "rgb(8,8,8)",
    height: "70px",
    borderRadius: "100px",
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
    boxSizing: "border-box",
  },
  logoContainer: {
    width: "140px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  navLinksWrapper: {
    height: "54px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  navLinkAnchor: {
    padding: "8px 10px",
    borderRadius: "40px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "38.4px",
    textDecoration: "none",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  navLinkInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "16px",
    overflow: "visible",
    transition: "transform 0.3s ease",
  },
  navLinkText: {
    fontFamily: "Switzer, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "rgb(255,255,255)",
    letterSpacing: "-0.16px",
    margin: 0,
    lineHeight: "22.4px",
    whiteSpace: "nowrap",
  },
  buyButtonBase: {
    background: "rgb(4,72,244)",
    width: "136px",
    height: "54px",
    borderRadius: "40px",
    padding: "16px 20px 14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "16px",
    overflow: "hidden",
    textDecoration: "none",
    boxSizing: "border-box",
    cursor: "pointer",
    flexShrink: 0,
  },
  buyButtonInner: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    transition: "transform 0.3s ease",
  },
  buyButtonText: {
    fontFamily: "Switzer, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    color: "rgb(255,255,255)",
    margin: 0,
    lineHeight: "22.4px",
    whiteSpace: "nowrap",
  },
  searchBar: {
    background: "rgb(246,246,246)",
    width: "250px",
    height: "70px",
    borderRadius: "50px",
    padding: "14px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    flexShrink: 0,
  },
  searchButton: {
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0,
  },
  searchText: {
    fontFamily: "'Onest', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: "rgb(112,112,112)",
    margin: 0,
    flex: 1,
    paddingLeft: "8px",
  },
  kbdWrapper: {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  rightGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
};

interface NavLinkProps {
  label: string;
  href: string;
}

function NavLink({ label, href }: NavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={styles.navLinkAnchor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.navLinkInner,
          transform: hovered ? "translateY(calc(-50% - 8px))" : "translateY(0)",
        }}
      >
        <p style={styles.navLinkText}>{label}</p>
        <p style={styles.navLinkText}>{label}</p>
      </div>
    </a>
  );
}

function BuyButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://omakasedesign.lemonsqueezy.com/buy/0437a845-6187-4027-883d-2881ff526c6c"
      style={styles.buyButtonBase}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.buyButtonInner,
          transform: hovered ? "translateY(calc(-50% - 8px))" : "translateY(0)",
        }}
      >
        <p style={styles.buyButtonText}>Buy Template</p>
        <p style={styles.buyButtonText}>Buy Template</p>
      </div>
    </a>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        d="M232.49,215.51l-82.79-82.79a70.07,70.07,0,1,0-17,17l82.79,82.79a12,12,0,0,0,17-17ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
        fill="rgb(51,51,51)"
      />
    </svg>
  );
}

function KbdIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="5.5"
        fill="white"
        stroke="rgb(200,200,200)"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="rgb(112,112,112)"
      >
        ⌘K
      </text>
    </svg>
  );
}

export default function Navbar() {
  return (
    <>
      {/* Desktop nav (≥1025px) */}
      <nav style={styles.nav}>
        <div style={styles.outerDiv}>
          <div style={styles.whitePill}>
            {/* Left: dark pill with logo + nav links */}
            <div style={styles.darkPill}>
              {/* Logo */}
              <div style={styles.logoContainer}>
                <Image
                  src="/images/logo-dark.svg"
                  alt="Logo"
                  width={140}
                  height={30}
                  priority
                />
              </div>

              {/* Nav links */}
              <div style={styles.navLinksWrapper}>
                {navLinks.map((link) => (
                  <NavLink key={link.href} label={link.label} href={link.href} />
                ))}
              </div>
            </div>

            {/* Right: search bar + buy button */}
            <div style={styles.rightGroup}>
              {/* Search bar */}
              <div style={styles.searchBar}>
                <button style={styles.searchButton} aria-label="Search">
                  <SearchIcon />
                </button>
                <p style={styles.searchText}>Search...</p>
                <div style={styles.kbdWrapper}>
                  <KbdIcon />
                </div>
              </div>

              {/* Buy Template button */}
              <BuyButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          nav[data-navbar] {
            width: 100% !important;
          }
          nav[data-navbar] > div {
            width: 100% !important;
            padding: 0 16px !important;
          }
          nav[data-navbar] .white-pill {
            width: 100% !important;
            max-width: 100% !important;
          }
          nav[data-navbar] .nav-links-wrapper {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          nav[data-navbar] .search-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
