import { useLocation } from "react-router";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const location = useLocation();
  const priorityListHref =
    location.pathname === "/" ? "#priority-list" : "/#priority-list";

  return (
    <header className="sticky top-0 z-50 border-b border-[#315F4B]/10 bg-[#FFFDF9]/95 font-['Montserrat'] backdrop-blur-md">
      <div className="mx-auto flex h-[73px] max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-7 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          aria-label="ODDA home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/odda-logo-transparent.png"
            alt="ODDA"
            className="h-12 w-auto mix-blend-multiply"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap px-3 py-3 text-sm font-semibold text-[#1D2A23] transition-colors duration-300 hover:text-[#315F4B] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
            >
              {link.label}

              <span
                aria-hidden="true"
                className="absolute bottom-1 left-3 right-3 h-[1.5px] origin-left scale-x-0 bg-[#315F4B] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Desktop action */}
        <div className="hidden shrink-0 items-center xl:flex">
          <a
            href={priorityListHref}
            className="whitespace-nowrap rounded-full bg-[#A8B59F] px-5 py-3 text-sm font-semibold text-[#1D2A23] transition-colors hover:bg-[#C9D3C3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B]"
          >
            Join the priority list
          </a>
        </div>

        {/* Mobile and tablet navigation */}
        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none rounded-full bg-[#EEE9DF] px-5 py-2.5 text-sm font-semibold text-[#1D2A23] transition-colors hover:bg-[#E8ECE4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B]">
            Menu
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full mt-3 flex max-h-[calc(100vh-100px)] w-72 flex-col overflow-y-auto rounded-3xl border border-black/10 bg-[#F6F1E7] p-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 font-semibold text-black transition-colors hover:bg-[#E1E6DC] hover:text-[#315F4B]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={priorityListHref}
              className="mt-2 rounded-2xl bg-[#A8B59F] px-4 py-3 text-center font-semibold text-[#1D2A23] transition-colors hover:bg-[#C9D3C3]"
            >
              Join the priority list
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
