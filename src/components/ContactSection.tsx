"use client";
import Image from "next/image";

interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

const contactItems: ContactItem[] = [
  { icon: "/images/icon-email.svg", label: "Email", value: "hello@flowgrid.com" },
  { icon: "/images/icon-location.svg", label: "Address", value: "3891 Richardson, California" },
  { icon: "/images/icon-phone.svg", label: "Phone", value: "(239) 555-0108" },
];

const inputStyle: React.CSSProperties = {
  background: "rgb(246,246,246)",
  borderRadius: 12,
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "'Switzer', sans-serif",
  color: "rgb(8,8,8)",
  border: "1px solid rgba(203,213,225,0.5)",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Onest', sans-serif",
  fontSize: 14,
  fontWeight: 500,
  color: "rgb(51,51,51)",
};

export default function ContactSection() {
  return (
    <section style={{ background: "rgb(246,246,246)" }} className="contact-section">
      {/* Outer container: 1440px wide, padding 80px 60px */}
      <div
        style={{
          width: 1440,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "row",
          gap: 60,
          boxSizing: "border-box",
        }}
        className="contact-container"
      >
        {/* Inner row matches 1320px content, height 749px */}
        <div
          style={{
            width: "100%",
            minHeight: 749,
            display: "flex",
            flexDirection: "row",
            gap: 60,
          }}
          className="contact-inner"
        >
          {/* LEFT COLUMN */}
          <div
            style={{ flex: "0 0 auto", width: 490 }}
            className="contact-left"
          >
            <h2
              data-reveal
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: 76,
                fontWeight: 700,
                color: "rgb(8,8,8)",
                lineHeight: 1.0,
                margin: "0 0 16px 0",
              }}
              className="contact-h2"
            >
              Contact
              <br />
              us
            </h2>

            <p
              style={{
                fontFamily: "'Switzer', sans-serif",
                fontSize: 16,
                fontWeight: 400,
                color: "rgb(112,112,112)",
                margin: "0 0 40px 0",
                lineHeight: 1.6,
              }}
            >
              Send us a message we love to hear from you
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  {/* Blue circle icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgb(4,72,244)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt=""
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Text block */}
                  <div>
                    <p
                      style={{
                        fontFamily: "'Switzer', sans-serif",
                        fontSize: 13,
                        color: "rgb(112,112,112)",
                        margin: 0,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Switzer', sans-serif",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "rgb(8,8,8)",
                        margin: 0,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — form card */}
          <div
            style={{
              flex: 1,
              background: "white",
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
            className="contact-form-card"
          >
            <h3
              style={{
                fontFamily: "'Onest', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                color: "rgb(8,8,8)",
                margin: 0,
              }}
            >
              Fill out the form
            </h3>

            <form
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  style={inputStyle}
                />
              </div>

              {/* Company */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "rgb(4,72,244)",
                  color: "white",
                  borderRadius: 9999,
                  padding: "14px 32px",
                  fontFamily: "'Switzer', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-inner {
            flex-direction: column !important;
          }
          .contact-left {
            width: 100% !important;
          }
          .contact-h2 {
            font-size: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-container {
            padding: 0 20px !important;
          }
          .contact-h2 {
            font-size: 36px !important;
          }
          .contact-form-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
