import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
  template: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Framerstore made launching my first Framer template effortless! The layout is sleek, the CMS is intuitive, and I had my store up in minutes. Highly recommend!"',
    name: "Jake Thompson",
    handle: "@jakethompsonux",
    avatar: "/images/avatar-jake.jpg",
    template: "Haven Estate",
    date: "Feb 16, 2025",
  },
  {
    quote:
      '"I\'ve used several Framer templates before, but this one is a game-changer. Everything is optimized for conversions, and the design is stunning."',
    name: "Emily Carter",
    handle: "@emilycarter_design",
    avatar: "/images/avatar-emily.jpg",
    template: "Vellox",
    date: "Jan 22, 2025",
  },
  {
    quote:
      '"Framerstore is hands down the best way to launch a Framer template store. The UI is clean, and the workflow is seamless."',
    name: "Ryan Mitchell",
    handle: "@ryanmitchell_dev",
    avatar: "/images/avatar-ryan.jpg",
    template: "Designo",
    date: "Mar 5, 2025",
  },
  {
    quote:
      '"The perfect balance of aesthetics and functionality! I had my store live in under an hour, and it looks incredible on all devices."',
    name: "Sophia Williams",
    handle: "@sophiawilliams_ux",
    avatar: "/images/avatar-sophia.jpg",
    template: "AI Chatbot",
    date: "Feb 28, 2025",
  },
  {
    quote:
      '"As a designer, I appreciate how polished and flexible Framerstore is. It\'s exactly what I needed to showcase my templates professionally."',
    name: "Brandon Scott",
    handle: "@brandonscott_creates",
    avatar: "/images/avatar-brandon.jpg",
    template: "William Thompson",
    date: "Jan 10, 2025",
  },
  {
    quote:
      '"Framerstore turned what used to be a complicated process into something super easy. It\'s fast, responsive, and the templates sell themselves!"',
    name: "Olivia Reed",
    handle: "@oliviareed_studio",
    avatar: "/images/avatar-olivia.jpg",
    template: "Educore",
    date: "Mar 18, 2025",
  },
];

function StarRow() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src="/images/icon-star.svg"
          width={20}
          height={20}
          alt="★"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 20,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Stars */}
      <StarRow />

      {/* Quote */}
      <p
        style={{
          fontFamily: "'Switzer', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          color: "rgb(34,34,34)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {t.quote}
      </p>

      {/* Author row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image
          src={t.avatar}
          width={42}
          height={42}
          alt={t.name}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <p
            style={{
              fontFamily: "'Switzer', sans-serif",
              fontSize: 16,
              fontWeight: 400,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: "'Switzer', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(4,72,244)",
              margin: 0,
            }}
          >
            {t.handle}
          </p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            {t.template}
          </p>
          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "rgb(8,8,8)",
              margin: 0,
            }}
          >
            {`// ${t.date}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: "rgb(246,246,246)" }}>
      <div
        style={{
          width: 1440,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          gap: 60,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ width: 1320, maxWidth: "100%", height: 152 }}>
          <h2
            data-reveal
            className="testimonials-heading"
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            <span style={{ color: "rgb(8,8,8)" }}>We help </span>
            <span style={{ color: "rgb(4,72,244)" }}>creators</span>
            <span style={{ color: "rgb(8,8,8)" }}> quickly build websites</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: 20,
            columnGap: 20,
            width: 1320,
            maxWidth: "100%",
            height: 604,
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.handle} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            height: auto !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-heading {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
