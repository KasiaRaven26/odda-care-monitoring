import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const CONTACT_EMAIL = "hello@odda.care";

const contactReasons = [
  "Ask a question about Odda",
  "Talk through support at home",
  "Understand whether Odda is the right fit",
];

const fieldClass =
  "mt-3 w-full rounded-[14px] border border-black/15 bg-[#F8F6F1] px-4 py-3.5 text-black outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-black/40 focus:border-[#315F4B] focus:shadow-[0_0_0_3px_rgba(49,95,75,0.08)]";

export function meta() {
  return [
    { title: "Contact | Odda Care" },
    {
      name: "description",
      content:
        "Talk directly with Aggie at Odda Care, ask a question or arrange a free home assessment.",
    },
  ];
}

export default function Contact() {
  const [emailPrepared, setEmailPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const supportFor = String(formData.get("supportFor") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent("New Odda enquiry from " + name);
    const body = encodeURIComponent(
      [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Support for: " + supportFor,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    setEmailPrepared(true);

    window.setTimeout(() => {
      window.location.href =
        "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
    }, 50);
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] font-['Montserrat'] text-black">
      <Navbar />

      {/* Introduction */}
      <section className="px-7 pb-14 pt-16 sm:px-14 lg:pb-18 lg:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#315F4B]">
            Get in touch
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-[54px]">
            Let&apos;s talk about what would help.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 sm:text-lg">
            Whether you have a question or want to talk through support at
            home, you&apos;ll speak directly with Aggie — with no pressure and no
            obligation.
          </p>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-7 sm:px-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-20">
          <aside className="rounded-[30px] bg-[#DDE5D9] px-7 py-9 sm:px-10 sm:py-11">
            <div className="flex items-center gap-4">
              <img
                src="/images/Aggie-arden.jpg"
                alt="Aggie Arden, founder of Odda"
                className="block h-14 w-14 min-w-14 shrink-0 rounded-full object-cover object-top ring-2 ring-white [clip-path:circle(50%_at_50%_50%)]"
                style={{ borderRadius: "9999px" }}
              />
              <div>
                <p className="font-semibold">Aggie Arden</p>
                <p className="mt-1 text-sm">Founder of Odda</p>
              </div>
            </div>

            <h2 className="mt-9 text-3xl font-semibold leading-[1.12] tracking-[-0.04em]">
              Tell me a little about your situation.
            </h2>

            <p className="mt-5 text-base leading-7">
              You don&apos;t need to know exactly what you need. Start wherever
              feels easiest, and I can take it from there.
            </p>

            <ul className="mt-8 space-y-4">
              {contactReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-px w-5 shrink-0 bg-[#315F4B]"
                  />
                  <span className="text-sm font-medium leading-6 sm:text-base">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-black/15 pt-7">
              <p className="text-sm">Prefer to email directly?</p>
              <a
                href={"mailto:" + CONTACT_EMAIL}
                className="mt-2 inline-flex border-b border-black/35 pb-0.5 font-semibold transition-colors duration-300 hover:border-[#315F4B] hover:text-[#315F4B]"
              >
                {CONTACT_EMAIL}
              </a>

              <p className="mt-7 text-sm leading-6">
                Ready to choose a time instead?
              </p>
              <Link
                to="/book-assessment"
                className="mt-2 inline-flex border-b border-black/35 pb-0.5 font-semibold transition-colors duration-300 hover:border-[#315F4B] hover:text-[#315F4B]"
              >
                Book a free assessment
              </Link>
            </div>
          </aside>

          <div className="lg:pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Send a message
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              How can I help?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7">
              Fill in the details below and your email app will open with the
              message ready for you to review and send.
            </p>

            <form onSubmit={handleSubmit} className="mt-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-semibold">
                  Phone number{" "}
                  <span className="font-normal text-black/55">(optional)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="Your phone number"
                />
              </label>

              <label className="mt-6 block">
                <span className="text-sm font-semibold">
                  Who are you looking for support for?
                </span>
                <select
                  name="supportFor"
                  required
                  defaultValue=""
                  className={fieldClass}
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
                <span className="text-sm font-semibold">Your message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={[fieldClass, "resize-none rounded-[18px]"].join(" ")}
                  placeholder="Tell me a little about your situation or what you would like to know."
                />
              </label>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#315F4B]/20 bg-[#DDE5D9] px-6 py-3.5 font-semibold text-black transition-colors duration-300 hover:border-[#315F4B]/40 hover:bg-[#CBD7C7]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M4 6.5h16v11H4z" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                  Open email
                </button>

                <p className="max-w-sm text-xs leading-5">
                  Your details will only be used to respond to your enquiry.{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold underline decoration-black/30 underline-offset-2 transition-colors hover:text-[#315F4B]"
                  >
                    Privacy policy
                  </Link>
                </p>
              </div>

              {emailPrepared && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-6 border-l-2 border-[#315F4B] pl-4 text-sm leading-6"
                >
                  Your email app should open with the message ready to send. If
                  it does not, email us directly at{" "}
                  <a
                    href={"mailto:" + CONTACT_EMAIL}
                    className="font-semibold underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
