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
  backgroundColor: "rgb(246,246,246)",
  borderRadius: 12,
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
  color: "rgb(8,8,8)",
  border: "1px solid rgba(203,213,225,0.5)",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
};

export default function ContactSection() {
  return (
    <section
      style={{ backgroundColor: "#F6F6F6", padding: "80px 0" }}
      className="contact-section"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "row",
          gap: 80,
        }}
        className="contact-container"
      >
        {/* Left: heading + contact details */}
        <div
          style={{ width: "40%", flexShrink: 0 }}
          className="contact-left"
        >
          <h2
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#080808",
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
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: 18,
              color: "#707070",
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
                style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "center" }}
              >
                {/* Blue circle icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#0448F4",
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
                {/* Text */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                      fontSize: 13,
                      color: "#707070",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
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

        {/* Right: form card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 40,
            flex: 1,
          }}
          className="contact-form-card"
        >
          <h3
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: 24,
              fontWeight: 700,
              color: "rgb(8,8,8)",
              margin: "0 0 24px 0",
            }}
          >
            Fill out the form
          </h3>

          <form
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              style={inputStyle}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={inputStyle}
              autoComplete="email"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              style={inputStyle}
              autoComplete="organization"
            />
            <textarea
              name="message"
              placeholder="Message"
              style={{
                ...inputStyle,
                minHeight: 120,
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(4,72,244)",
                color: "white",
                borderRadius: 9999,
                padding: "14px 32px",
                fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
                fontSize: 16,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-container {
            flex-direction: column !important;
            padding: 0 32px !important;
            gap: 48px !important;
          }
          .contact-left {
            width: 100% !important;
          }
          .contact-h2 {
            font-size: 56px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-container {
            padding: 0 20px !important;
          }
          .contact-h2 {
            font-size: 40px !important;
          }
          .contact-form-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
