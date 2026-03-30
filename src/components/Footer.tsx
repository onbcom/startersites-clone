"use client";

import Image from "next/image";
import { useState } from "react";

const CheckIcon = () => (
  <div style={{ width: 18, height: 18, flexShrink: 0 }}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.15)" />
      <path
        d="M5 9l3 3 5-5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const Divider = () => (
  <div
    style={{
      width: "100%",
      height: 1,
      backgroundColor: "rgba(255,255,255,0.15)",
      flexShrink: 0,
    }}
  />
);

const FEATURES = [
  "Instant access",
  "Responsive design",
  "No coding required",
] as const;

const NAV_LINKS = [
  { label: "Changelog", href: "#" },
  { label: "404", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter X", href: "#" },
  { label: "Dribbble", href: "#" },
] as const;

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{
        backgroundColor: "rgb(34, 34, 34)",
        width: "100%",
      }}
    >
      <div
        className="footer-container"
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "80px 60px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 60,
          boxSizing: "border-box",
        }}
      >
        {/* SECTION 1 — CTA heading + features */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h2
            className="footer-heading"
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: 76,
              fontWeight: 700,
              color: "rgb(255,255,255)",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            Customize and build a stunning website today.
          </h2>

          {/* Feature bullets */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {FEATURES.map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                <CheckIcon />
                <span
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "rgb(255,255,255)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* SECTION 2 — Contact + Newsletter */}
        <div
          className="footer-section2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* Left — contact */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(255,255,255)",
                margin: 0,
                letterSpacing: "-0.28px",
              }}
            >
              drop us a line
            </p>
            <p
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: "rgb(255,255,255)",
                margin: 0,
              }}
            >
              hello@flowgrid.com
            </p>
          </div>

          {/* Right — newsletter signup */}
          <div
            className="footer-newsletter"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 460,
              width: "100%",
            }}
          >
            <h3
              className="footer-newsletter-heading"
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                color: "rgb(255,255,255)",
                margin: 0,
              }}
            >
              Sign up for our newsletter:
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <li
                style={{
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: 16,
                  color: "rgb(181,181,181)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                • Be the first to access new template releases
              </li>
              <li
                style={{
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: 16,
                  color: "rgb(181,181,181)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                • Unlock special discounts
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 9999,
                  padding: "12px 20px",
                  color: "white",
                  fontSize: 16,
                  outline: "none",
                  fontFamily: "'Switzer', sans-serif",
                  minWidth: 0,
                }}
              />
              <button
                type="button"
                style={{
                  background: "rgb(4,72,244)",
                  color: "white",
                  border: "none",
                  borderRadius: 9999,
                  padding: "12px 24px",
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <Divider />

        {/* SECTION 3 — Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 46,
          }}
        >
          {/* Left — logo */}
          <Image
            src="/images/logo-dark.svg"
            width={140}
            height={30}
            alt="Flowgrid"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          {/* Right — nav links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 24,
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgb(255,255,255)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-section2 {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .footer-newsletter {
            max-width: 100% !important;
          }
          .footer-newsletter-heading {
            font-size: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-container {
            padding: 60px 20px 32px !important;
          }
          .footer-heading {
            font-size: 36px !important;
          }
          .footer-newsletter-heading {
            font-size: 36px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            height: auto !important;
            gap: 24px !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
