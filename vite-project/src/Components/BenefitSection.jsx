import React from "react";
import "./BenefitSection.css";

export default function BenefitSection() {
  const CARDS = [
    {
      title: "1. Flexible learning",
      body: "Learn at your own pace and fit coursework into your schedule.",
    },
    {
      title: "2. Expert Instruction",
      body: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      title: "3. Diverse Course Offerings",
      body: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      title: "4. Updated Curriculum",
      body: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      title: "5. Practical Projects & Assignments",
      body: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      title: "6. Interactive Learning Environment",
      body: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="benefits-inner container">
        <header className="benefits-header">
          <div className="benefits-heading-row">
            <h2 id="benefits-heading">Benefits</h2>
            <div className="benefits-action">
              <button className="btn view-all" aria-label="View all benefits">
                View all
              </button>
            </div>
          </div>
          <p className="benefits-lead">
            Our platform provides the ultimate flexibility, allowing you to
            learn at your own pace. More importantly, you leave the course with
            a professionally critiqued portfolio and access to our dedicated
            career services team, maximizing your chances of landing your first
            developer role.
          </p>
        </header>

        <div className="benefits-grid" role="list">
          {CARDS.map((c, i) => (
            <article key={i} className="benefit-card" role="listitem">
              <div className="card-media" aria-hidden="true" />
              <h3 className="card-title">{c.title}</h3>
              <p className="card-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
