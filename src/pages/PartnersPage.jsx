import PageHero from '../components/PageHero'

const partners = ['Rotary Clubs', 'Community NGOs', 'Youth Networks', 'Health Advocates']

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners"
        description="Our impact is amplified through collaboration across clubs and organizations."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-shell">
        <h2 className="section-title">Turning hope into action</h2>
        <p className="section-text max-w-4xl">
          CHOPS collaborates with Rotary Clubs and local organizations to co-design initiatives, share resources, and
          scale service outcomes in communities that need support most.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner} className="rounded-xl border border-slate-200 bg-white p-5 text-center text-slate-700 shadow-sm">
              {partner}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
