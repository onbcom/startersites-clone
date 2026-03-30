"use client";

import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Templates", href: "#templates" },
  { label: "Features", href: "#feature" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="none">
      <path
        d="M232.49,215.51l-82.79-82.79a70.07,70.07,0,1,0-17,17l82.79,82.79a12,12,0,0,0,17-17ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
        fill="rgb(51,51,51)"
      />
    </svg>
  );
}

function KbdIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" fill="white" stroke="rgb(200,200,200)" />
      <text x="12" y="16" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="rgb(112,112,112)">⌘K</text>
    </svg>
  );
}

function BuyButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="https://omakasedesign.lemonsqueezy.com/buy/0437a845-6187-4027-883d-2881ff526c6c"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgb(4,72,244)",
        height: "54px",
        borderRadius: "40px",
        padding: "16px 20px 14px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        textDecoration: "none",
        boxSizing: "border-box",
        cursor: "pointer",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {/* Slide-up text wrapper */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          transition: "transform 0.3s ease",
          transform: hovered ? "translateY(-38.4px)" : "translateY(0)",
        }}
      >
        <p style={{
          fontFamily: "Switzer, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: "rgb(255,255,255)",
          margin: 0,
          lineHeight: "22.4px",
          whiteSpace: "nowrap",
        }}>Buy Template</p>
        <p style={{
          fontFamily: "Switzer, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: "rgb(255,255,255)",
          margin: 0,
          lineHeight: "22.4px",
          whiteSpace: "nowrap",
        }}>Buy Template</p>
      </div>
    </a>
  );
}

export default function Navbar() {
  return (
    <>
      <nav style={{
        background: "transparent",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "8px 60px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}>
        {/* White pill container */}
        <div style={{
          background: "rgb(255,255,255)",
          width: "100%",
          maxWidth: "1320px",
          height: "86px",
          borderRadius: "100px",
          padding: "8px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}>
          {/* Left: dark pill with logo + nav links */}
          <div style={{
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
          }}>
            {/* Logo */}
            <div style={{ width: "140px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Image src="/images/logo-dark.svg" alt="FlowGrid" width={140} height={30} priority />
            </div>

            {/* Nav links — hover changes background to blue, no text slide */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    padding: "8px 10px",
                    borderRadius: "40px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "38.4px",
                    textDecoration: "none",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <p style={{
                    fontFamily: "Switzer, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgb(255,255,255)",
                    letterSpacing: "-0.16px",
                    margin: 0,
                    lineHeight: "22.4px",
                    whiteSpace: "nowrap",
                  }}>{link.label}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right: search bar + buy button */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
            {/* Search bar */}
            <div style={{
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
            }}>
              <button style={{ background: "none", border: "none", display: "flex", alignItems: "center", cursor: "pointer", padding: 0, flexShrink: 0 }} aria-label="Search">
                <SearchIcon />
              </button>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: "14px", fontWeight: 500, color: "rgb(112,112,112)", margin: 0, flex: 1, paddingLeft: "8px" }}>
                Search...
              </p>
              <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <KbdIcon />
              </div>
            </div>

            <BuyButton />
          </div>
        </div>
      </nav>

      <style>{`
        .nav-link:hover {
          background-color: rgb(4, 72, 244) !important;
        }
        @media (max-width: 1024px) {
          .nav-links-row { display: none !important; }
        }
      `}</style>
    </>
  );
}
