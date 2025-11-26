import React, { useState } from "react";
import "./Courses.css";
const COURSES = [
  {
    id: 1,
    title: "Fullstack JavaScript Bootcamp",
    duration: "16 weeks",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    id: 2,
    title: "Generative AI & Prompt Engineering",
    duration: "6 weeks",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  },
  {
    id: 3,
    title: "Advanced React & State Management",
    duration: "8 weeks",
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
  },
  {
    id: 4,
    title: "AWS Certified Cloud Practitioner",
    duration: "10 weeks",
    img: "https://media.istockphoto.com/id/2184123695/photo/man-and-robot-handshake-ai-document-management-system-hologram-hud.jpg?s=2048x2048&w=is&k=20&c=AyK5eEAc5Z8ajv375Q_edqANd1dRnS0qyMS6eMPR5RY=",
  },
  {
    id: 5,
    title: "Python for Data Science & ML",
    duration: "12 weeks",
    img: "https://images.pexels.com/photos/12899151/pexels-photo-12899151.jpeg",
  },
  {
    id: 6,
    title: "Modern UI/UX Design Principles",
    duration: "7 weeks",
    img: "https://picsum.photos/seed/uxdesign/560/360",
  },
  {
    id: 7,
    title: "Node.js & Express.js API Development",
    duration: "5 weeks",
    img: "https://picsum.photos/seed/nodejsapi/560/360",
  },
  {
    id: 8,
    title: "Kubernetes & Docker for DevOps",
    duration: "9 weeks",
    img: "https://media.istockphoto.com/id/2123151540/photo/businessman-holding-devops-on-global-technology-network-automation-collaboration-continuous.jpg?s=2048x2048&w=is&k=20&c=lU30XE8wpeUQfhTcViRIAmRlcnq8Q2sz_1F4rGwCPf4=",
  },
  {
    id: 9,
    title: "Cybersecurity Fundamentals & CISSP Prep",
    duration: "14 weeks",
    img: "https://media.istockphoto.com/id/2123151540/photo/businessman-holding-devops-on-global-technology-network-automation-collaboration-continuous.jpg?s=2048x2048&w=is&k=20&c=lU30XE8wpeUQfhTcViRIAmRlcnq8Q2sz_1F4rGwCPf4=",
  },
  {
    id: 10,
    title: "Web3 & Blockchain Basics",
    duration: "4 weeks",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
  },
  {
    id: 11,
    title: "SQL & Database Administration",
    duration: "7 weeks",
    img: "https://media.istockphoto.com/id/1800292591/photo/sql-structured-query-language-technology-concept-icon-virtual-screen.jpg?s=2048x2048&w=is&k=20&c=FD8bL52rUINmp9o2QTTHzCH6DI3brCagRent89xY5Es=",
  },
  {
    id: 12,
    title: "Next.js & Server-Side Rendering (SSR)",
    duration: "6 weeks",
    img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
  },
];
export default function Courses() {
  const [page, setPage] = useState(1);
  const perPage = 3;
  const total = COURSES.length;
  const totalPages = Math.ceil(total / perPage);

  const start = (page - 1) * perPage;
  const current = COURSES.slice(start, start + perPage);

  return (
    <section className="courses" aria-labelledby="courses-heading">
      <div className="courses-inner container">
        <div className="courses-head">
          <h1 id="courses-heading">Live Classes + Placement Guidance</h1>
          <p className="courses-lead">
            Skill bridge offer offers one of the industry’s leading Project
            Based Career Programs that promises Placement Guidance on completing
            the program.
          </p>
        </div>

        <div className="courses-grid" aria-live="polite">
          {current.map((c) => (
            <article key={c.id} className="course-card">
              <div className="course-media">
                <img src={c.img} alt={c.title} />
                <div className="course-meta">
                  <span className="course-duration">{c.duration}</span>
                </div>
              </div>

              <div className="course-body">
                <h3 className="course-title">{c.title}</h3>
                <div className="course-actions">
                  <button className="btn outline">View syllabus</button>
                  <button className="btn primary">Know more</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav className="pagination" aria-label="Courses pagination">
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Previous page"
          >
            ‹
          </button>
          <div className="pages">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  className={`page-number ${
                    page === pageNumber ? "active" : ""
                  }`}
                  onClick={() => setPage(pageNumber)}
                  aria-current={page === pageNumber ? "page" : undefined}
                  aria-label={`Go to page ${pageNumber}`}
                />
              );
            })}
          </div>
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            ›
          </button>
        </nav>
      </div>
    </section>
  );
}
