import PageHero from "../components/PageHero";
import { digest } from "../content";
import hero from "../assets/gallery3.jpg";
import { Link } from "react-router-dom";

export default function DigestPage() {
  return (
    <>
      <PageHero
        title="CHOPS Fellowship Digest"
        description="Reflections, impact stories, and insights from members and experts."
        image={hero}
      />
      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {digest.map((post) => (
            <article key={post.title} className=" p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-300">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-600">{post.snippet}</p>
              <Link
                to={post.link}
                className="mt-4 inline-block text-sm font-semibold text-amber-500"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
