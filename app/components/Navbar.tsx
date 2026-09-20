type DropdownMenuProps = {
  label: string;
  href: string;
  items: string[];
};

function DesktopDropdown({
  label,
  href,
  items,
}: DropdownMenuProps) {
  return (
    <div className="group relative">
      <a
        href={href}
        className="flex items-center gap-1.5 rounded-full px-4 py-3 text-base font-semibold text-black transition-colors duration-200 hover:bg-black/5"
      >
        {label}

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="rounded-[20px] border border-black/10 bg-white/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="block w-full rounded-[14px] px-4 py-3 text-left text-sm font-medium text-black transition-colors hover:bg-[#E1E6DC]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
 <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-3 lg:px-12">
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

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          <DesktopDropdown
            label="How it works"
            href="/how-it-works"
            items={["Overview", "Daily insights", "Installation"]}
          />

         <DesktopDropdown
  label="About"
  href="/about"
  items={["Our story", "Our approach", "Contact"]}
/>

          <DesktopDropdown
            label="Technology"
            href="/technology"
            items={["Odda Hub", "Sensors", "Privacy and security"]}
          />

          <a
            href="/pricing"
            className="rounded-full px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-black/5"
          >
            Pricing
          </a>

          <a
            href="/faq"
            className="rounded-full px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-black/5"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="/login"
            aria-label="Odda Hub"
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9CCC5] text-white transition-colors hover:bg-[#CFC3B3]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4.5 21c.8-4 3.3-6 7.5-6s6.7 2 7.5 6" />
            </svg>

            <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
              Odda Hub
            </span>
          </a>

          <a
            href="/#contact"
            className="rounded-full bg-[#E8DFD0] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[#56614F]"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu */}
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-black px-5 py-3 font-semibold text-black">
            Menu
          </summary>

          <nav className="absolute right-0 top-full mt-3 flex w-56 flex-col rounded-3xl border border-black/10 bg-[#F6F1E7] p-3 shadow-xl">
            <a
              href="/#how-it-works"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              How it works
            </a>

            <a
              href="/#about"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              About
            </a>

            <a
              href="/technology"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              Technology
            </a>

            <a
              href="/pricing"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              Pricing
            </a>

            <a
              href="/faq"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              FAQ
            </a>

            <a
              href="/login"
              className="rounded-2xl px-4 py-3 font-semibold text-black hover:bg-[#E1E6DC]"
            >
              Odda Hub
            </a>

            <a
              href="/#contact"
              className="mt-2 rounded-2xl bg-[#66735E] px-4 py-3 text-center font-semibold text-white"
            >
              Get in touch
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}