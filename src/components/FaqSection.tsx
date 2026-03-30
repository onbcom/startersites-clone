"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "How long does it take to set up the chatbot?",
    a: "Setting up is quick and easy. Most users can get started within minutes by following our simple onboarding process.",
  },
  {
    q: "Can the chatbot integrate with my existing tools?",
    a: "Yes! Our templates integrate seamlessly with popular tools and platforms including CRMs, email providers, and more.",
  },
  {
    q: "Is the chatbot customizable for my brand?",
    a: "Absolutely. You can customize colors, fonts, copy, and all visual elements to match your brand perfectly.",
  },
  {
    q: "How does the chatbot handle multilingual support?",
    a: "The templates support multiple languages and can be adapted for international audiences easily.",
  },
  {
    q: "What happens if the chatbot can't answer a question?",
    a: "You can configure fallback responses and human handoff options to ensure visitors always get the help they need.",
  },
  {
    q: "Is there a limit to how many chats the chatbot can handle?",
    a: "No limits — the templates are built for scale and can handle unlimited conversations.",
  },
  {
    q: "How secure is the chatbot?",
    a: "Security is a top priority. All templates follow industry best practices and data is handled with care.",
  },
];

const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);

interface AccordionColumnProps {
  items: FaqItem[];
  idOffset: number;
}

function AccordionColumn({ items, idOffset }: AccordionColumnProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={idOffset + i}
            style={{
              background: "white",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {/* Trigger row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 18,
                height: 66,
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  fontFamily: "'Onest', sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "rgb(8,8,8)",
                  margin: 0,
                }}
              >
                {item.q}
              </p>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: 30,
                  height: 30,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginLeft: 12,
                  padding: 0,
                  fontSize: 20,
                  color: "rgb(8,8,8)",
                  lineHeight: 1,
                }}
                aria-label={isOpen ? "Collapse answer" : "Expand answer"}
              >
                {isOpen ? "−" : "+"}
              </button>
            </div>

            {/* Answer — max-height transition */}
            <div
              style={{
                maxHeight: isOpen ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div style={{ padding: "0 18px 18px 18px" }}>
                <p
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "rgb(112,112,112)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" style={{ background: "rgb(246,246,246)" }}>
      <style>{`
        .faq-container {
          width: 1440px;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          gap: 60px;
          box-sizing: border-box;
        }
        .faq-header-row {
          width: 1320px;
          height: 152px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        }
        .faq-h2 {
          font-family: 'Onest', sans-serif;
          font-size: 76px;
          font-weight: 700;
          line-height: 1.0;
          margin: 0;
          color: rgb(8,8,8);
        }
        .faq-grid {
          display: grid;
          grid-template-columns: 650px 650px;
          gap: 20px;
          width: 1320px;
        }
        @media (max-width: 1024px) {
          .faq-container {
            width: 100% !important;
            padding: 80px 32px !important;
          }
          .faq-header-row {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .faq-h2 {
            font-size: 48px !important;
          }
          .faq-grid {
            grid-template-columns: 1fr !important;
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .faq-container {
            padding: 60px 20px !important;
          }
          .faq-h2 {
            font-size: 36px !important;
          }
        }
      `}</style>

      <div className="faq-container">
        {/* Header row */}
        <div className="faq-header-row">
          <h2 data-reveal className="faq-h2">
            <span>Answers to common </span>
            <span style={{ color: "rgb(4,72,244)" }}>questions</span>
            <span> asked</span>
          </h2>

          <p
            style={{
              fontFamily: "'Switzer', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "rgb(112,112,112)",
              maxWidth: 360,
              alignSelf: "flex-end",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            If you have any other questions or need more information, feel free
            to reach out directly.
          </p>
        </div>

        {/* Accordion grid */}
        <div className="faq-grid">
          <AccordionColumn items={leftFaqs} idOffset={0} />
          <AccordionColumn items={rightFaqs} idOffset={4} />
        </div>
      </div>
    </section>
  );
}
