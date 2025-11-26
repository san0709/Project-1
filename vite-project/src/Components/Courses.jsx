import React, { useState } from "react";
import "./Courses.css";

const COURSES = [
  {
    id: 1,
    title: "Intro to UI Design",
    duration: "8 weeks",
    img: "https://picsum.photos/seed/uidesign/560/360",
  },
  {
    id: 2,
    title: "Fullstack Web Dev",
    duration: "12 weeks",
    img: "https://picsum.photos/seed/fullstack/560/360",
  },
  {
    id: 3,
    title: "React & Vite Masterclass",
    duration: "6 weeks",
    img: "https://picsum.photos/seed/react/560/360",
  },
  {
    id: 4,
    title: "Data Structures in JS",
    duration: "5 weeks",
    img: "https://picsum.photos/seed/dsa/560/360",
  },
  {
    id: 5,
    title: "Design Systems",
    duration: "4 weeks",
    img: "https://picsum.photos/seed/designsystems/560/360",
  },
  {
    id: 6,
    title: "Portfolio Workshop",
    duration: "3 weeks",
    img: "https://picsum.photos/seed/portfolio/560/360",
  },
  {
    id: 7,
    title: "Career Launchpad",
    duration: "10 weeks",
    img: "https://picsum.photos/seed/career/560/360",
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
          >
            Prev
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
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
          <button
            className="page-btn"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
}
