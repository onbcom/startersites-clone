"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "1",
    question: "How long does it take to set up the chatbot?",
    answer:
      "Setup typically takes just a few minutes. Simply install the widget, configure your preferences, and you're ready to go.",
  },
  {
    id: "2",
    question: "Can the chatbot integrate with my existing tools?",
    answer:
      "Yes, our chatbot integrates with most popular tools including CRMs, helpdesks, and marketing platforms.",
  },
  {
    id: "3",
    question: "Is the chatbot customizable for my brand?",
    answer:
      "Absolutely. You can customize colors, messaging, and behavior to match your brand identity.",
  },
  {
    id: "4",
    question: "How does the chatbot handle multilingual support?",
    answer:
      "Our chatbot supports multiple languages and can detect and respond in your visitor's preferred language.",
  },
  {
    id: "5",
    question: "What happens if the chatbot can't answer a question?",
    answer:
      "If the chatbot can't answer, it seamlessly escalates to a human agent or collects contact information for follow-up.",
  },
  {
    id: "6",
    question: "Is there a limit to how many chats the chatbot can handle?",
    answer:
      "No hard limit — our infrastructure scales automatically to handle any volume of simultaneous conversations.",
  },
  {
    id: "7",
    question: "How secure is the chatbot?",
    answer:
      "We use enterprise-grade encryption and comply with GDPR and other data protection standards.",
  },
];

function FaqAccordionItem({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(203,213,225,0.5)",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
            fontSize: 16,
            fontWeight: 500,
            color: "rgb(8,8,8)",
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            fontSize: 20,
            color: "rgb(8,8,8)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
            marginLeft: 16,
            display: "inline-block",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            paddingTop: 12,
            fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
            fontSize: 15,
            color: "rgb(112,112,112)",
            lineHeight: 1.6,
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      style={{ backgroundColor: "#F6F6F6", padding: "80px 0" }}
      className="faq-section"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "row",
          gap: 80,
          alignItems: "flex-start",
        }}
        className="faq-container"
      >
        {/* Left: heading + subtext */}
        <div style={{ minWidth: 300 }} className="faq-heading">
          <h2
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#080808",
              margin: 0,
            }}
            className="faq-h2"
          >
            Answers
            <br />
            to
            <br />
            common
            <br />
            questions
            <br />
            asked
          </h2>
          <p
            style={{
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: 15,
              color: "#707070",
              marginTop: 16,
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            If you have any other questions or need more information, feel free
            to reach out directly.
          </p>
        </div>

        {/* Right: accordion list */}
        <div style={{ flex: 1 }}>
          {faqs.map((faq) => (
            <FaqAccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .faq-container {
            flex-direction: column !important;
            padding: 0 32px !important;
            gap: 40px !important;
          }
          .faq-heading {
            min-width: unset !important;
          }
          .faq-h2 {
            font-size: 56px !important;
          }
        }
        @media (max-width: 640px) {
          .faq-container {
            padding: 0 20px !important;
          }
          .faq-h2 {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
