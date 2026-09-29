const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-6 py-3 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          aria-label="Odda Care home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/odda-logo-transparent.png"
            alt="Odda Care"
            className="h-16 w-auto mix-blend-multiply lg:h-[77px]"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap px-3 py-3 text-[15px] font-semibold text-black transition-colors duration-300 hover:text-[#315F4B] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
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
            href="/contact"
            className="whitespace-nowrap rounded-full bg-[#E8DFD0] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[#56614F] hover:text-white"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile and tablet navigation */}
        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-black px-5 py-3 font-semibold text-black transition-colors hover:bg-[#E8ECE4]">
            Menu
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full mt-3 flex max-h-[calc(100vh-110px)] w-64 flex-col overflow-y-auto rounded-3xl border border-black/10 bg-[#F6F1E7] p-3 shadow-xl"
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
              href="/contact"
              className="mt-2 rounded-2xl bg-[#E8DFD0] px-4 py-3 text-center font-medium text-black transition-colors hover:bg-[#56614F] hover:text-white"
            >
              Get in touch
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
