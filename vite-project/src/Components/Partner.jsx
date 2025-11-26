import React from "react";
import "./Partner.css";

const BRANDS = [
  {
    name: "Amazon",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-sIPwNLfdPVJZEZj9YX3tH_q8r7oIVKdZg&s",
  },
  { name: "Netflix", src: "https://logo.clearbit.com/netflix.com" },
  {
    name: "Spotify",
    src: "https://www.pngall.com/wp-content/uploads/13/Spotify-Logo-PNG-HD-Image.png",
  },
  {
    name: "Zoom",
    src: "https://static.vecteezy.com/system/resources/previews/012/871/376/non_2x/zoom-logo-in-blue-colors-meetings-app-logotype-illustration-free-png.png",
  },
  {
    name: "Adobe",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
  },
  { name: "Notion", src: "https://logo.clearbit.com/notion.so" },
  { name: "Zapier", src: "https://logo.clearbit.com/zapier.com" },
];

export default function Partner() {
    return (
              <section className="partners" aria-label="brands">
          <div className="partners-inner">
            <div className="brand-list">
              {BRANDS.map((b) => (
                <div key={b.name} className="brand-item">
                  <img src={b.src} alt={`${b.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </section>

    );
}
