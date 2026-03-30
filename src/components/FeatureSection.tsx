"use client";

import Image from "next/image";
import { useState } from "react";

type DeviceTab = "Desktop" | "Tablet" | "Mobile";

const DEVICE_TABS: DeviceTab[] = ["Desktop", "Tablet", "Mobile"];

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<DeviceTab>("Desktop");

  return (
    <section id="feature" style={{ background: "rgb(246,246,246)" }}>
      {/* Container */}
      <div
        style={{
          width: "1440px",
          maxWidth: "100%",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
        className="feature-container"
      >
        {/* Header Row */}
        <div
          className="feature-header-row"
          style={{
            width: "1320px",
            maxWidth: "100%",
            height: "152px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Left: heading */}
          <h2
            data-reveal
            className="feature-heading"
            style={{
              fontFamily: "Onest, sans-serif",
              fontSize: "76px",
              fontWeight: 700,
              color: "rgb(8,8,8)",
              lineHeight: 1.0,
              margin: 0,
              padding: 0,
            }}
          >
            <span style={{ color: "rgb(8,8,8)" }}>Fully </span>
            <span style={{ color: "rgb(4,72,244)" }}>responsive</span>
            <span style={{ color: "rgb(8,8,8)" }}> and customizable</span>
          </h2>

          {/* Right: subtext */}
          <p
            style={{
              fontFamily: "Switzer, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "rgb(112,112,112)",
              maxWidth: "360px",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            No more website woes—just powerful solutions at your fingertips
          </p>
        </div>

        {/* Body */}
        <div
          style={{
            width: "1320px",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Top Row: 3 feature cards */}
          <div
            className="feature-top-row"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              height: "390px",
            }}
          >
            {/* Card 1: Built with global standards */}
            <div
              style={{
                flex: "1 1 0",
                background: "white",
                borderRadius: "30px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="/images/feature-icon-1.svg"
                alt=""
                width={60}
                height={60}
                style={{ borderRadius: "100px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "rgb(8,8,8)",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  Built with global standards
                </h3>
                <p
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(8,8,8)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Unlock brilliance—build your website the smart way.
                </p>
              </div>
            </div>

            {/* Card 2: Scale up 2x faster */}
            <div
              style={{
                flex: "1 1 0",
                background: "white",
                borderRadius: "30px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="/images/feature-icon-2.svg"
                alt=""
                width={60}
                height={60}
                style={{ borderRadius: "100px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "rgb(8,8,8)",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  Scale up 2x faster
                </h3>
                <p
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(8,8,8)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Unlock brilliance—build your website the smart way.
                </p>
                <div style={{ display: "flex", flexDirection: "row", gap: "4px", marginTop: "8px" }}>
                  <Image src="/images/icon-star.svg" alt="star" width={20} height={20} />
                  <Image src="/images/icon-star.svg" alt="star" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Card 3: Never leave Framer (dark) */}
            <div
              style={{
                flex: "1 1 0",
                background: "rgb(8,8,8)",
                borderRadius: "30px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="/images/feature-icon-3.svg"
                alt=""
                width={60}
                height={60}
                style={{ borderRadius: "100px", filter: "invert(1)" }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "rgb(255,255,255)",
                    margin: 0,
                    lineHeight: 1.1,
                  }}
                >
                  Never leave Framer
                </h3>
                <p
                  style={{
                    fontFamily: "Onest, sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(255,255,255)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Unlock brilliance — build
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Large Card */}
          <div
            style={{
              width: "1320px",
              maxWidth: "100%",
              background: "white",
              borderRadius: "30px",
              padding: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
              boxSizing: "border-box",
            }}
            className="feature-bottom-card"
          >
            {/* Left content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                flex: "1 1 auto",
                minWidth: 0,
              }}
            >
              <h3
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "rgb(8,8,8)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Browse from our quality templates
              </h3>
              <p
                style={{
                  fontFamily: "Onest, sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "rgb(8,8,8)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Unlock brilliance—build your website the smart way.
              </p>

              {/* Tab row */}
              <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                {DEVICE_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      fontFamily: "Onest, sans-serif",
                      fontSize: "22px",
                      fontWeight: 600,
                      background: activeTab === tab ? "rgb(8,8,8)" : "rgb(246,246,246)",
                      color: activeTab === tab ? "white" : "rgb(8,8,8)",
                      borderRadius: "12px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* CTA button */}
              <div>
                <a
                  href="#"
                  style={{
                    background: "rgb(4,72,244)",
                    color: "white",
                    borderRadius: "40px",
                    padding: "14px 28px",
                    fontFamily: "Switzer, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Browse Templates
                </a>
              </div>
            </div>

            {/* Right: mockup image */}
            <div style={{ flex: "0 0 auto" }}>
              <Image
                src="/images/feature-mockup-1.png"
                width={393}
                height={367}
                alt="Mockup"
                style={{ borderRadius: "16px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .feature-top-row {
            flex-direction: column !important;
            height: auto !important;
          }
          .feature-heading {
            font-size: 48px !important;
          }
          .feature-bottom-card {
            flex-direction: column !important;
          }
        }
        @media (max-width: 640px) {
          .feature-heading {
            font-size: 36px !important;
          }
          .feature-container {
            padding: 40px 20px !important;
          }
          .feature-header-row {
            height: auto !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
