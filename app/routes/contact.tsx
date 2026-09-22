import type { FormEvent } from "react";
import Navbar from "../components/Navbar";

const CONTACT_EMAIL = "WPISZ_TUTAJ_EMAIL";

export function meta() {
  return [
    { title: "Contact | Odda Care" },
    {
      name: "description",
      content:
        "Contact Odda Care to ask a question or arrange a free consultation.",
    },
  ];
}

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const supportFor = String(formData.get("supportFor") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`New Odda enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Support for: ${supportFor}

Message:
${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      {/* Contact introduction */}
      <section className="px-5 pb-14 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black">
            GET IN TOUCH
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-black sm:text-5xl lg:text-4xl">
            Let’s talk about what support could look like.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black">
            Whether you have a question, want to understand how Odda works<br></br> or
            would like to arrange a free consultation, we’re here to help.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[36px] bg-white shadow-[0_24px_70px_rgba(41,50,38,0.10)] lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left panel */}
          <div className="bg-[#929F88] px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
              START A CONVERSATION
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              Tell us what would be helpful.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/90">
              You don’t need to know exactly what you need. <br></br>Tell us a little
              about your situation and we can <br></br>take it from there.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Ask a question about Odda",
                "Arrange a free consultation",
                "Talk through support at home",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        d="M5 10.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-white/20 pt-8">
              <p className="text-sm leading-7 text-white">
                Prefer to email directly?
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-block font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-black">
                    Your name
                  </span>

                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-3 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#56614F]"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-black">
                    Email address
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-3 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#56614F]"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-semibold text-black">
                  Phone number{" "}
                  <span className="font-normal text-black/50">(optional)</span>
                </span>

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="mt-3 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#56614F]"
                  placeholder="Your phone number"
                />
                           </label>

              <label className="mt-6 block">
                <span className="text-sm font-semibold text-black">
                  Who are you looking for support for?
                </span>

                <select
                  name="supportFor"
                  required
                  defaultValue=""
                  className="mt-3 w-full rounded-[14px] border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition-colors focus:border-[#56614F]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="A parent or family member">
                    A parent or family member
                  </option>

                  <option value="Myself">Myself</option>

                  <option value="Someone I care for">
                    Someone I care for
                  </option>

                  <option value="Professional enquiry">
                    Professional enquiry
                  </option>

                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="mt-6 block">
                <span className="text-sm font-semibold text-black">
                  How can we help?
                </span>

                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-3 w-full resize-none rounded-[18px] border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#56614F]"
                  placeholder="Tell us a little about your situation or what you would like to know."
                />
              </label>

              <button
                type="submit"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#56614F] px-7 py-4 font-medium text-white transition-colors duration-300 hover:bg-[#3F493A]"
              >
                <span>Send enquiry</span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path
                    d="M4 10h11M11 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}