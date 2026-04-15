import PageHero from "../components/PageHero";
import { blogs } from "../content";
import hero from "../assets/gallery3.jpg";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="CHOPS Fellowship Digest"
        description="Reflections, impact stories, and insights from members and experts."
        image={hero}
      />
      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-amber-300">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-600">{post.snippet}</p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-amber-300"
              >
                Read more
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
