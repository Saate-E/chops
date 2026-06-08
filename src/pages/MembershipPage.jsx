import { useState } from "react";
import PageHero from "../components/PageHero";
import { supabase, supabaseError } from "../lib/supabaseClient";
import hero3 from "../assets/hero3.jpg";

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    rotaryClub: "",
    district: "",
    dob: "",
    email: "",
    location: "",
  });
  const [status, setStatus] = useState(supabaseError ?? "");
  const [loading, setLoading] = useState(false);
  const supabaseAvailable = Boolean(supabase && !supabaseError);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!supabaseAvailable) {
      setStatus(
        "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.",
      );
      return;
    }

    setStatus("");
    const { fullName, rotaryClub, district, dob, email, location } = formData;
    if (!fullName || !rotaryClub || !district || !dob || !email || !location) {
      setStatus("Please complete all fields before submitting.");
      return;
    }

    setLoading(true);

    const { data: existingMember, error: selectError } = await supabase
      .from("members")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      setStatus("Unable to verify membership status. Please try again.");
      setLoading(false);
      return;
    }

    if (existingMember) {
      setStatus(
        "This email is already registered. If you need help, contact the site administrator.",
      );
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase.from("members").insert([
      {
        full_name: fullName,
        rotary_club: rotaryClub,
        district,
        date_of_birth: dob,
        email,
        location,
      },
    ]);

    if (insertError) {
      setStatus("Unable to save your registration. Please try again later.");
      setLoading(false);
      return;
    }

    setStatus(
      "Your membership request is submitted. We have recorded your email and prevented duplicate signups.",
    );
    setFormData({
      fullName: "",
      rotaryClub: "",
      district: "",
      dob: "",
      email: "",
      location: "",
    });
    setLoading(false);
  };

  return (
    <>
      <PageHero
        title="Membership"
        description="Reconnect with fellow presidents and stay active in global service projects."
        image={hero3}
      />
      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Who can join?</h2>
            <p className="section-text">
              Membership in CHOPS is open to those who led their clubs during
              the Create Hope year.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Exclusive leadership network access</li>
              <li>Invitations to CHOPS events and reunions</li>
              <li>Participation in regional and global projects</li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-semibold text-amber-300">
              Membership Request
            </h3>
            <div className="mt-6 space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="Full name"
              />
              <input
                name="rotaryClub"
                value={formData.rotaryClub}
                onChange={handleChange}
                className="form-input"
                placeholder="Rotary Club"
              />
              <input
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-input"
                placeholder="District"
              />
              <input
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
                placeholder="Date of birth"
                type="date"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Email address"
                type="email"
              />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="Location"
              />
              {status ? (
                <p className="text-sm text-slate-700">{status}</p>
              ) : null}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-amber-400 px-4 py-3 font-semibold text-slate-900 disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
