import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems } from "../content";
import { AtSign } from "lucide-react";
import { TbBrandTiktokFilled, TbBrandFacebookFilled } from "react-icons/tb";
import Logo from "../assets/logo.png";

export default function SiteLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location]);

  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="sticky inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-25 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/">
            <img
              src={Logo}
              alt="CHOPS International"
              className="w-20 lg:w-35 object-fill"
            />
          </NavLink>
          <button
            className="rounded-md border border-slate-300 p-2 lg:hidden"
            onClick={() => setMobileNavOpen((state) => !state)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="hidden items-center gap-6 text-sm lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-amber-500 ${isActive ? "text-amber-500" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {mobileNavOpen && (
          <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-2 py-1.5 ${isActive ? "bg-amber-100" : "hover:bg-slate-100"}`
                  }
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="text-lg font-semibold text-amber-600">
              CHOPS International
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Independent fellowship of Rotary leaders carrying forward the
              Create Hope mission through ongoing service.
            </p>
          </div>
          <div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Rotary Branding Disclaimer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600">Connect with Us:</h4>
            <div className="mt-3 flex gap-4">
              <a
                href="#"
                className="text-slate-600 hover:text-amber-600 transition"
              >
                <TbBrandFacebookFilled className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-amber-600 transition"
              >
                <TbBrandTiktokFilled className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-amber-600 transition"
              >
                <AtSign className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
