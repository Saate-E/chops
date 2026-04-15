import PageHero from "../components/PageHero";
import hero from "../assets/gallery2.jpg";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CHOPS International"
        description="A fellowship of Rotary leaders bound by the presidential theme Create Hope in the World."
        image={hero}
      />
      <section className="section-shell">
        <h2 className="section-title">
          Our mission continues beyond one Rotary year
        </h2>
        <p className="section-text">
          CHOPS International stands as a permanent network of leaders who
          served in 2023-2024 and remain committed to global recovery through
          practical local action.
        </p>
        <p className="section-text">
          We continue the vision championed by RI President Gordon McInally by
          extending hope into long-term projects and sustained partnerships.
        </p>
      </section>
    </>
  );
}
