import PageHero from "../components/PageHero";
import { pillars } from "../content";
import hero3 from "../assets/hero3.jpg";

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        title="Programs & Initiatives"
        description="Our service work focuses on the Three Pillars of Hope."
        image={hero3}
      />
      <section className="section-shell">
        <h2 className="section-title">The Three Pillars of Hope</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-amber-300">
                {pillar.title}
              </h3>
              <p className="mt-3 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
