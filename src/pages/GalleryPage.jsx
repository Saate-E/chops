import PageHero from "../components/PageHero";
import { gallery } from "../content";
import hero from "../assets/gallery17.jpg";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery & Media"
        description="Memories from the Create Hope year and CHOPS reunions."
        image={hero}
      />
      <section className="section-shell">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
