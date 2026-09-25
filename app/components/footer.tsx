import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-5 pt-16">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[36px] bg-[#F5F2EC] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="relative z-10">
          <div className="grid gap-12 border-b border-black/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Discover
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
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
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Odda
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
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
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Support
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
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

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Stay connected
              </h3>

              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#C9CCC5] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#BABEB5]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.7V2.2L14.5 2C11.3 2 10 3.9 10 6.5v2H7v4h3V22h4v-9.5h3.2l.5-4H14Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#C9CCC5] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#BABEB5]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.2 7.8H1.8V22h3.4V7.8ZM3.5 2A2 2 0 1 0 3.5 6a2 2 0 0 0 0-4ZM22 13.8c0-4.3-2.3-6.3-5.4-6.3a4.7 4.7 0 0 0-4.2 2.3v-2H9V22h3.4v-7c0-1.8.4-3.6 2.7-3.6 2.2 0 2.3 2.1 2.3 3.7V22H22v-8.2Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#C9CCC5] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#BABEB5]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-black">
                <Link to="/privacy" className="transition hover:text-black">
                  Privacy Policy
                </Link>

                <Link to="/terms" className="transition hover:text-black">
                  Terms & Conditions
                </Link>

                <Link to="/cookies" className="transition hover:text-black">
                  Cookie Preferences
                </Link>
              </div>

              <p className="mt-5 text-xs text-black">
                © Odda Care {year}. All rights reserved.
              </p>

              <div className="mt-5 flex max-w-md items-start gap-3">
                <span className="inline-flex shrink-0 items-center rounded-md border border-black/20 px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-black">
                  ICO
                </span>

                <p className="text-xs leading-5 text-black">
                  Odda Ltd is registered with the Information
                  Commissioner&apos;s Office. Registration number:{" "}
                  <span className="font-medium">ZC150677</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center self-start text-center lg:self-end">
  <img
    src="/images/odda-logo-transparent.png"
    alt="Odda"
    className="h-[68px] w-auto object-contain sm:h-[82px]"
    style={{ mixBlendMode: "multiply" }}
  />

  <p className="mt-2 text-sm font-medium text-black">
    Independent living, for longer.
  </p>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}