import { Link } from "react-router";

const footerLinkClass =
  "w-fit underline decoration-transparent decoration-1 underline-offset-4 transition-[color,text-decoration-color] duration-300 ease-out hover:text-[#315F4B] hover:decoration-[#315F4B]/60 focus-visible:text-[#315F4B] focus-visible:decoration-[#315F4B]/60";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-4 pb-5 pt-16">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[36px] bg-[#F5F2EC] px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="relative z-10">
          <div className="grid gap-12 border-b border-black/10 pb-14 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Discover
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
                <Link to="/how-it-works" className={footerLinkClass}>
                  How it works
                </Link>

                <Link to="/technology" className={footerLinkClass}>
                  Technology
                </Link>

                <Link to="/pricing" className={footerLinkClass}>
                  Pricing
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Odda
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
                <Link to="/about" className={footerLinkClass}>
                  About us
                </Link>

                <Link to="/faq" className={footerLinkClass}>
                  FAQ
                </Link>

                <Link to="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-black">
                Support
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-black">
                <Link to="/privacy" className={footerLinkClass}>
                  Privacy policy
                </Link>

                <Link to="/terms" className={footerLinkClass}>
                  Terms & conditions
                </Link>

                <Link to="/cookies" className={footerLinkClass}>
                  Cookie policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-black">
                <Link to="/privacy" className={footerLinkClass}>
                  Privacy Policy
                </Link>

                <Link to="/terms" className={footerLinkClass}>
                  Terms & Conditions
                </Link>

                <Link to="/cookies" className={footerLinkClass}>
                  Cookie Policy
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
