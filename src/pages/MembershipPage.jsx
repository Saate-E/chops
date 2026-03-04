import PageHero from '../components/PageHero'

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        description="Reconnect with fellow presidents and stay active in global service projects."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Who can join?</h2>
            <p className="section-text">
              Membership in CHOPS is open to those who led their clubs during the Create Hope year.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Exclusive leadership network access</li>
              <li>Invitations to CHOPS events and reunions</li>
              <li>Participation in regional and global projects</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-amber-300">Membership Request</h3>
            <div className="mt-6 space-y-4">
              <input className="form-input" placeholder="Full name" />
              <input className="form-input" placeholder="Email address" type="email" />
              <input className="form-input" placeholder="Rotary club (2023-2024)" />
              <textarea className="form-input min-h-28" placeholder="How would you like to contribute?" />
              <button type="button" className="w-full rounded-md bg-amber-400 px-4 py-3 font-semibold text-slate-900">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
