import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-5 pt-16 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[36px] bg-[#F5F2EC] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
        {/* Złoty element dekoracyjny */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[270px] -right-[210px] h-[540px] w-[540px] rounded-full border-[72px] border-[#D5A827]/85"
        />

        <div className="relative z-10">
          <div className="grid gap-12 border-b border-black/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em]">
                Discover
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black/65">
                <a href="/#how-it-works" className="transition hover:text-black">
                  How it works
                </a>

                <a href="/#technology" className="transition hover:text-black">
                  Technology
                </a>

                <a href="/#pricing" className="transition hover:text-black">
                  Pricing
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em]">
                Odda
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black/65">
                <a href="/#about" className="transition hover:text-black">
                  About us
                </a>

                <Link to="/faq" className="transition hover:text-black">
                  FAQ
                </Link>

                <a href="/#contact" className="transition hover:text-black">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em]">
                Support
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black/65">
                <Link to="/privacy" className="transition hover:text-black">
                  Privacy policy
                </Link>

                <Link to="/terms" className="transition hover:text-black">
                  Terms & conditions
                </Link>

                <Link to="/cookies" className="transition hover:text-black">
                  Cookie policy
                </Link>
              </div>
            </div>

            <div className="max-w-xs">
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                Stay connected
              </p>

              <p className="mt-5 text-[15px] leading-7 text-black/60">
                Simple technology and meaningful insight for greater peace of
                mind.
              </p>

              <a
                href="/#contact"
                className="mt-6 inline-flex rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-black"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start gap-9 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <img
                src="/images/odda-logo.jpeg"
                alt="Odda"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-black/55">
                <Link to="/privacy" className="hover:text-black">
                  Privacy Policy
                </Link>

                <Link to="/terms" className="hover:text-black">
                  Terms & Conditions
                </Link>

                <Link to="/cookies" className="hover:text-black">
                  Cookie Preferences
                </Link>
              </div>

              <p className="mt-5 text-xs text-black/50">
                © Odda Care {year}. All rights reserved.
              </p>
            </div>

            <div className="flex gap-3 lg:mr-32">
              {["f", "in", "ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-11 min-w-11 items-center justify-center rounded-full bg-[#D5A827] px-3 text-xs font-bold text-black transition hover:bg-[#D5A827]/45"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}