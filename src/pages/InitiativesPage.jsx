import PageHero from '../components/PageHero'
import { pillars } from '../content'

export default function InitiativesPage() {
  return (
    <>
      <PageHero
        title="Programs & Initiatives"
        description="Our service work focuses on the Three Pillars of Hope."
        image="https://images.unsplash.com/photo-1469571486292-b53601020f18?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-shell">
        <h2 className="section-title">The Three Pillars of Hope</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-300">{pillar.title}</h3>
              <p className="mt-3 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
