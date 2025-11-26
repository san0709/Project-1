import React from "react";
import "./Testimonial.css";

const TESTIMONIALS = [
  {
    name: "Amita Rao",
    role: "Frontend Engineer",
    companies: ["InnoTech", "BrightCloud"],
    avatar: "https://i.pravatar.cc/140?img=12",
    quote:
      "This course changed how I approach product problems — hands-on projects and the mentorship really helped land my first role.",
  },
  {
    name: "Miguel Alvarez",
    role: "UX Designer",
    companies: ["Wave Labs"],
    avatar: "https://i.pravatar.cc/140?img=32",
    quote:
      "Excellent pacing, practical feedback and a curriculum that matched what companies were hiring for. The portfolio reviews were invaluable.",
  },
  {
    name: "Sara Chen",
    role: "Data Engineer",
    companies: ["NovaWorks", "Skyline"],
    avatar: "https://i.pravatar.cc/140?img=48",
    quote:
      "The instructors were industry-focused and approachable. The mock interviews helped me feel confident and prepared.",
  },
  {
    name: "Olu James",
    role: "Full‑Stack Developer",
    companies: ["Parcelly"],
    avatar: "https://i.pravatar.cc/140?img=8",
    quote:
      "Project-based learning plus career support made all the difference. I shipped a real web-app and had interviews within weeks.",
  },
  {
    name: "Jack Wilson",
    role: "Front-End Specialist (React)",
    companies: ["FinTech Global", "Alpha Web"],
    avatar: "https://i.pravatar.cc/140?img=12",
    quote:
      "The advanced React modules were fantastic. I learned how to handle complex state and now build features faster than my senior colleagues!",
  },
  {
    name: "Inez Novak",
    role: "Data & Cloud Engineer",
    companies: ["CloudCo Solutions"],
    avatar: "https://i.pravatar.cc/140?img=16",
    quote:
      "Moving from legacy systems to AWS&Kubernetes was seamless thanks to the course. It directly led to my promotion and a massive pay bump.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-inner container">
        <header className="testimonials-header">
          <p className="testimonials-tag">Journey of our leaders</p>
          <h2 id="testimonials-heading">Learner Stories</h2>
          <p className="testimonials-lead">
            Real learners, real outcomes — short notes from graduates who built
            real projects and accelerated their careers.
          </p>
        </header>

        <ul className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="testimonial-item">
              <article className="testimonial-card">
                <div className="testimonial-head">
                  <img
                    src={t.avatar}
                    alt={`Avatar of ${t.name}`}
                    className="testimonial-avatar"
                    width={64}
                    height={64}
                  />
                  <div className="testimonial-meta">
                    <h3 className="testimonial-name">{t.name}</h3>
                    <p className="testimonial-role">{t.role}</p>
                    <div className="testimonial-companies" aria-hidden="true">
                      {t.companies.map((c) => (
                        <span key={c} className="company-badge">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="testimonial-quote">“{t.quote}”</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
