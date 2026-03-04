import PageHero from '../components/PageHero'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Reach our fellowship coordinators for collaboration, chapter details, and project inquiries."
        image="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Connect with a CHOPS chapter</h2>
            <p className="section-text">
              Use this page to ask about partnerships, locate a chapter, or inquire about current humanitarian
              initiatives.
            </p>
            <div className="mt-6 space-y-2 text-slate-600">
              <p>Email: connect@chopsfellowship.org</p>
              <p>Phone: +1 (000) 555-2026</p>
              <p>Address: Rotary Leadership Hub, International District Network</p>
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              <input className="form-input" placeholder="Name" />
              <input className="form-input" placeholder="Email" type="email" />
              <textarea className="form-input min-h-32" placeholder="Message" />
              <button type="button" className="w-full rounded-md bg-amber-400 px-4 py-3 font-semibold text-slate-900">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
