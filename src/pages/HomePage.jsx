import { useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaGlobeAfrica,
  FaMapMarkedAlt,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { digest, gallery, pillars, projects, updates } from "../content";
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import green from "../assets/green 1.jpeg";
import green2 from "../assets/mental.jpg";
import counterBg from "../assets/green 2.jpeg";

const constructions = [
  {
    title: "Hope-Centered Leadership Network",
    text: "A structured fellowship for 2023-2024 presidents to keep collaborating across districts.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cross-Club Humanitarian Projects",
    text: "Joint initiatives that connect service teams and scale impact in underserved communities.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mental Health Action Campaigns",
    text: "Programs reducing stigma through education, dialogue, and practical community support.",
    image: green2,
  },
  {
    title: "Green Schools Initiatives",
    text: "Promoting environmental awareness and sustainability through youth education and community programs.",
    image: green,
  },
];

const features = [
  {
    title: "Legacy in Action",
    text: "Carry the Create Hope vision into long-term, trackable community outcomes.",
  },
  {
    title: "Regional Collaboration",
    text: "Share proven playbooks across clubs and districts for better project execution.",
  },
  {
    title: "Member-Led Innovation",
    text: "Convert leadership experience into practical service models for current needs.",
  },
  {
    title: "Global Fellowship",
    text: "Stay connected with peers across regions through reunions and shared initiatives.",
  },
];

const stats = [
  { value: 214, label: "Members", icon: FaUsers },
  { value: 214, label: "Rotary Clubs", icon: FaBuilding },
  { value: 11, label: "Districts", icon: FaNetworkWired },
  { value: 46, label: "Cities / Location", icon: FaMapMarkedAlt },
  { value: 6, label: "Countries", icon: FaGlobeAfrica },
];

const testimonials = [
  {
    name: "Create Hope District Govenor",
    quote:
      "CHOPS gave us a practical platform to keep serving together after our terms ended. The network is active and impactful.",
  },
  {
    name: "Create Hope Club President",
    quote:
      "Our mental health collaboration reached more families because CHOPS connected us to members with the right expertise.",
  },
  {
    name: "CHOPS District Coordinator",
    quote:
      "The reunion model is not only social. It directly generates projects, partnerships, and measurable service outcomes.",
  },
];

function AnimatedCounter({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    const duration = 1600;
    const startTime = performance.now();
    let animationFrame;

    const updateCount = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value]);

  return count.toLocaleString();
}

export default function HomePage() {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;

    if (!counterElement || hasStartedCounting) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(counterElement);

    return () => observer.disconnect();
  }, [hasStartedCounting]);

  return (
    <>
      <PageHero
        title="CHOPS International Fellowship"
        description="We are Rotary leaders who served as Club Presidents during the 2023-2024 (Create Hope in the World)"
        fullHeight
        images={[hero1, hero2, hero3]}
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Get Started</p>
            <h2 className="section-title">
              A permanent network of People of Action
            </h2>
            <p className="section-text">
              CHOPS International is an elite fellowship of Rotary leaders who
              continue the legacy of service through collaboration, leadership,
              and humanitarian work.
            </p>
            <p className="section-text">
              Even after leadership transitions, we remain committed to
              sustaining Create Hope outcomes globally.
            </p>
          </div>
          <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-sm h-80">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Membership"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center p-6 sm:p-8">
              <h3 className="text-3xl font-semibold text-white">
                Ready to Connect?
              </h3>
              <p className="mt-3 text-white/90 max-w-xs">
                Discover membership benefits and join our global network.
              </p>
              <div className="mt-8">
                <Link
                  to="/membership"
                  className="inline-block rounded-md bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-500 transition"
                >
                  Explore Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-100">
        <p className="section-kicker">Constructions</p>
        <h2 className="section-title">Core CHOPS structures</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {constructions.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover md:col-span-2"
                />
                <div className="p-6 md:col-span-3">
                  <h3 className="text-lg font-semibold text-amber-500">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div
          ref={counterRef}
          className="relative overflow-hidden rounded-2xl bg-slate-900 px-5 py-14 text-center shadow-sm sm:px-8 lg:px-12"
        >
          <img
            src={counterBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-white/65"></div>
          <div className="relative">
            <p className="section-kicker text-left">Counter</p>
            <h2 className="section-title text-left">
              Our growing CHOPS network
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white px-4 py-7 shadow-lg shadow-slate-900/10"
                  >
                    <Icon
                      className="mx-auto mb-5 text-4xl text-amber-600"
                      aria-hidden="true"
                    />
                    <p className="text-4xl font-bold text-amber-600">
                      <AnimatedCounter
                        value={stat.value}
                        start={hasStartedCounting}
                      />
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-700">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">
          How CHOPS serves members and communities
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-amber-500">
                {pillar.title}
              </h3>
              <p className="mt-3 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-slate-100">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80"
            alt="CHOPS collaboration"
            className="h-80 w-full rounded-2xl object-cover shadow-sm lg:h-[28rem]"
          />
          <div>
            <p className="section-kicker">Alt Services</p>
            <h2 className="section-title">
              Service momentum beyond one Rotary year
            </h2>
            <p className="section-text">
              CHOPS bridges fellowship and project execution, collaborating with
              clubs to continue high-value service with strong peer support and
              shared frameworks.
            </p>
            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-amber-500">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Gallery</p>
        <h2 className="section-title">CHOPS Moments</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {gallery.slice(0, 3).map((item) => (
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/gallery"
            className="inline-block font-semibold text-slate-900 hover:text-amber-500"
          >
            See More ......
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Features</p>
        <h2 className="section-title">Fellowship strengths</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-amber-500">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell bg-slate-100">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Recent CHOPS project moments</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((item) => (
            <figure
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
              />
              <figcaption className="p-4 text-sm text-slate-700">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title">What members are saying</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-600">&quot;{item.quote}&quot;</p>
              <p className="mt-4 font-semibold text-amber-500">{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell bg-slate-100">
        <p className="section-kicker">Recent Digest Posts</p>
        <h2 className="section-title">CHOPS Fellowship Digest highlights</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {digest.slice(0, 3).map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-amber-500">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-600">{post.snippet}</p>
              <a
                href={post.link}
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-amber-500"
              >
                Read more
              </a>
            </article>
          ))}
          <div className="mt-6 text-left">
            <Link
              to="/digest"
              className="inline-block font-semibold text-slate-900 hover:text-amber-500"
            >
              See More ......
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Live Updates</p>
        <h2 className="section-title">Current focus areas</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
              <Link
                to="/news"
                className="mt-4 inline-block text-sm font-semibold text-amber-500"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
