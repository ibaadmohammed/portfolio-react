import { useMemo } from "react";
import { profile, skills, internship, featured, projects, achievements, education } from "./data";

function Links({ live, code }) {
  const ok = (u) => u && u !== "#";
  return (
    <div className="links">
      {ok(live) && <a href={live} target="_blank" rel="noreferrer">Live site</a>}
      {ok(code) && <a href={code} target="_blank" rel="noreferrer">Source code</a>}
    </div>
  );
}

function Heatmap() {
  const cols = 14, rows = 8;
  const cells = useMemo(() => {
    const spots = [[3, 2, 1], [10, 5, 0.9], [6, 6, 0.6]];
    const out = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let v = 0;
        spots.forEach(([x, y, s]) => {
          v = Math.max(v, s * Math.max(0, 1 - Math.hypot(c - x, r - y) / 4));
        });
        v = Math.min(1, v + ((c * 7 + r * 13) % 5) / 40);
        out.push(v);
      }
    }
    return out;
  }, []);
  const level = (v) => (v > 0.75 ? 4 : v > 0.5 ? 3 : v > 0.3 ? 2 : v > 0.12 ? 1 : 0);
  return (
    <figure className="heat-wrap">
      <div className="heat" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }} role="img" aria-label="Sample danger-zone heatmap">
        {cells.map((v, i) => (
          <span key={i} className={`l${level(v)}`} title={`${Math.round(v * 40)} sample complaints`} />
        ))}
      </div>
      <figcaption>Sample heatmap for illustration, not real data.</figcaption>
    </figure>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">Mohtashim</a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="where">{profile.role}, {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="cta">
            <a className="btn primary" href="#work">See my work</a>
            <a className="btn" href={profile.resume} download>Download resume</a>
          </div>
        </section>

        <section id="work" className="wrap">
          <h2>Selected work</h2>
          <article className="feature">
            <div>
              <h3>{featured.name}</h3>
              <p className="stack">{featured.stack.join(", ")}</p>
              <p>{featured.blurb}</p>
              <ul>{featured.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <Links live={featured.live} code={featured.code} />
            </div>
            <Heatmap />
          </article>

          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="stack">{p.stack.join(", ")}</p>
                <p>{p.blurb}</p>
                <Links live={p.live} code={p.code} />
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.map((i) => <span key={i} className="chip">{i}</span>)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="background" className="wrap two">
          <div>
            <h2>Experience</h2>
            <h3>{internship.title}</h3>
            <p className="stack">{internship.org}</p>
            <p className="when">{internship.when}</p>
            <p>{internship.text}</p>

            <h2 className="gap">Achievements</h2>
            <ul className="plain">
              {achievements.map((a) => (
                <li key={a.title}><strong>{a.title}.</strong> {a.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <ul className="plain">
              {education.map((e) => (
                <li key={e.school}>
                  <strong>{e.school}</strong>
                  <span>{e.detail}</span>
                  <span className="when">{e.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Let's work together</h2>
          <p>I'm looking for internships and entry-level roles where I can build real products.</p>
          <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="meta">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
