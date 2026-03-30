import Image from "next/image";

interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  templateName: string;
  date: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jake Thompson",
    handle: "@jakethompsonux",
    quote:
      "Framerstore made launching my first Framer template effortless! The layout is sleek, the CMS is intuitive, and I had my store up in minutes. Highly recommend!",
    templateName: "Haven Estate",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-jake.jpg",
  },
  {
    name: "Emily Carter",
    handle: "@emilycdesigns",
    quote:
      "I've used several Framer templates before, but this one is a game-changer. Everything is optimized for selling templates effortlessly!",
    templateName: "Educore",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-emily.jpg",
  },
  {
    name: "Ryan Mitchell",
    handle: "@ryanmitchellux",
    quote:
      "Framerstore is hands down the best way to launch a Framer template store. The UI is clean, and the CMS is perfectly structured. 10/10!",
    templateName: "Bento Portfolio",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-ryan.jpg",
  },
  {
    name: "Sophia Williams",
    handle: "@sophiawdesigns",
    quote:
      "The perfect balance of aesthetics and functionality! I had my store live in under an hour, and it looks stunning!",
    templateName: "Designo",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-sophia.jpg",
  },
  {
    name: "Brandon Scott",
    handle: "@brandonscottui",
    quote:
      "As a designer, I appreciate how polished and flexible Framerstore is. It's exactly what I needed to start selling templates professionally!",
    templateName: "Vellox",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-brandon.jpg",
  },
  {
    name: "Olivia Reed",
    handle: "@oliviareedux",
    quote:
      "Framerstore turned what used to be a complicated process into something super easy. It's fast, responsive, and built for success!",
    templateName: "AI Chatbot",
    date: "Feb 16, 2025",
    avatar: "/images/avatar-olivia.jpg",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Header row: avatar + name/handle + stars */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src={t.avatar}
          width={40}
          height={40}
          alt={t.name}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: 15,
              fontWeight: 600,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
              fontSize: 13,
              color: "rgb(112,112,112)",
              margin: 0,
            }}
          >
            {t.handle}
          </p>
        </div>
        <div style={{ color: "rgb(4,72,244)", fontSize: 13 }}>★★★★★</div>
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
          fontSize: 15,
          color: "rgb(51,51,51)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Footer: template + date */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
            fontSize: 13,
            fontWeight: 500,
            color: "rgb(8,8,8)",
            margin: 0,
          }}
        >
          {t.templateName}
        </p>
        <p
          style={{
            fontFamily: "var(--font-switzer, 'Switzer', sans-serif)",
            fontSize: 12,
            color: "rgb(112,112,112)",
            margin: 0,
          }}
        >
          // {t.date}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      style={{ backgroundColor: "#F6F6F6", padding: "80px 0" }}
      className="testimonials-section"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 60px",
          display: "flex",
          flexDirection: "row",
          gap: 60,
          alignItems: "flex-start",
        }}
        className="testimonials-container"
      >
        {/* Left: heading */}
        <div style={{ minWidth: 300 }} className="testimonials-heading">
          <h2
            style={{
              fontFamily: "var(--font-onest, 'Onest', sans-serif)",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#080808",
              margin: 0,
            }}
            className="testimonials-h2"
          >
            We
            <br />
            help
            <br />
            creators
            <br />
            quickly
            <br />
            build
            <br />
            websites
          </h2>
        </div>

        {/* Right: 3-column grid of cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            flex: 1,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.handle} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-container {
            flex-direction: column !important;
            padding: 0 32px !important;
          }
          .testimonials-heading {
            min-width: unset !important;
          }
          .testimonials-h2 {
            font-size: 56px !important;
          }
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-container {
            padding: 0 20px !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-h2 {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
