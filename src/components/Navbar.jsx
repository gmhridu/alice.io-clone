import { DotLottiePlayer } from "@dotlottie/react-player";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Products",
    dropdown: [
      { label: "AI Moderation", href: "/products/ai-moderation" },
      { label: "Trust & Safety", href: "/products/trust-safety" },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "Gaming", href: "/solutions/gaming" },
      { label: "Social Media", href: "/solutions/social-media" },
    ],
  },
  {
    label: "Intelligence",
    href: "/intelligence",
  },
  {
    label: "Where We Operate",
    dropdown: [
      { label: "North America", href: "/operate/north-america" },
      { label: "Europe", href: "/operate/europe" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="nav_component z-100">
      <div className="nav_container flex items-center justify-between w-nav-brand w--current">
        {/* Logo */}
        <Link to="/" className="nav_brand">
          <div className="flex items-center justify-center">
            <img src="/logo/logo icon.svg" alt="logo icon" className="size-10"/>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} className="relative nav_menu w-nav-menu">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center text-sm gap-2"
                  >
                    {item.label}
                    <div className="icon-small w-embed">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        {" "}
                        <path
                          d="M1.74707 5.55885L8 10.4412L14.2527 5.55885"
                          stroke="currentColor"
                          stroke-width="0.5"
                        ></path>{" "}
                      </svg>{" "}
                    </div>
                  </button>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md p-3 min-w-[200px]">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          to={d.href}
                          className="block px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link to="#" className="hidden sm:inline-block">
          <button className="button cursor-pointer">Get a Demo</button>
        </Link>

        {/* Mobile Button (ONLY MOBILE) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="19"
            viewBox="0 0 32 19"
            fill="none"
          >
            {" "}
            <path
              d="M1 3H31M1 9.5H31M1 16H31"
              stroke="currentColor"
              strokeWidth="2"
            />{" "}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white p-4">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label}>
                  <button
                    className="w-full text-left py-2"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                  </button>

                  {openDropdown === item.label && (
                    <div className="ml-4">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          to={d.href}
                          className="block py-1 text-sm"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.label} to={item.href} className="block py-2">
                {item.label}
              </Link>
            );
          })}

          <Link to="/demo" className="block mt-4 button">
            Get a Demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
