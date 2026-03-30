"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Templates", href: "#templates" },
  { label: "Features", href: "#features" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "relative",
        width: "100%",
        height: "86px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 0",
        backgroundColor: "transparent",
        zIndex: 10,
      }}
    >
      {/* Inner container */}
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 60px",
        }}
      >
        {/* Left: Logo */}
        <Link href="/" aria-label="FlowGrid home">
          <Image
            src="/images/logo-light.svg"
            alt="FlowGrid"
            width={119}
            height={25}
            priority
          />
        </Link>

        {/* Center: Nav links — hidden on mobile */}
        <div className="hidden md:flex" style={{ gap: "0px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "Switzer, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgb(8, 8, 8)",
                padding: "8px 10px",
                borderRadius: "40px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Search bar + Buy Template — hidden on mobile */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "12px" }}>
          {/* Search bar */}
          <div
            style={{
              backgroundColor: "rgb(246, 246, 246)",
              width: "250px",
              height: "54px",
              borderRadius: "9999px",
              padding: "14px 20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "Switzer, sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "#707070",
                width: "100%",
              }}
            />
            {/* Magnifying glass icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#707070"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Buy Template button with text-slide hover animation */}
          <BuyButton />
        </div>

        {/* Mobile: Hamburger icon */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "rgb(8, 8, 8)",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "rgb(8, 8, 8)",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "rgb(8, 8, 8)",
              borderRadius: "2px",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "86px",
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderTop: "1px solid rgba(203, 213, 225, 0.5)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            zIndex: 20,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "Switzer, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "rgb(8, 8, 8)",
                padding: "10px 0",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: "8px" }}>
            <BuyButton fullWidth />
          </div>
        </div>
      )}
    </nav>
  );
}

function BuyButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      href="#buy"
      style={{
        backgroundColor: "rgb(4, 72, 244)",
        color: "white",
        fontFamily: "Switzer, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "-0.16px",
        lineHeight: "22.4px",
        padding: "16px 20px 14px",
        height: "54px",
        minWidth: fullWidth ? "100%" : "136px",
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        textDecoration: "none",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        const spans = (e.currentTarget as HTMLAnchorElement).querySelectorAll<HTMLSpanElement>("span");
        spans.forEach((span) => {
          span.style.transform = "translateY(-100%)";
        });
      }}
      onMouseLeave={(e) => {
        const spans = (e.currentTarget as HTMLAnchorElement).querySelectorAll<HTMLSpanElement>("span");
        spans.forEach((span) => {
          span.style.transform = "translateY(0)";
        });
      }}
    >
      {/* First span: visible at rest */}
      <span
        style={{
          display: "block",
          transform: "translateY(0)",
          transition: "transform 0.25s ease",
          position: "absolute",
          whiteSpace: "nowrap",
        }}
      >
        Buy Template
      </span>
      {/* Second span: slides up from below on hover */}
      <span
        style={{
          display: "block",
          transform: "translateY(100%)",
          transition: "transform 0.25s ease",
          position: "absolute",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        Buy Template
      </span>
      {/* Spacer to preserve button width */}
      <span style={{ visibility: "hidden", whiteSpace: "nowrap" }} aria-hidden="true">
        Buy Template
      </span>
    </a>
  );
}
