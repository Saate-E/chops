import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you requested does not exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-amber-400 px-5 py-3 font-semibold text-slate-900">
        Back to Home
      </Link>
    </section>
  )
}
