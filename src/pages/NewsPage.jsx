import PageHero from '../components/PageHero'
import { updates } from '../content'

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        description="Stay updated on CHOPS activities and service momentum in 2025."
        image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
