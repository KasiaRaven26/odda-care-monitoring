import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const PRIORITY_LIST_EMAIL = "hello@odda.care";

export default function PriorityList() {
  const [emailPrepared, setEmailPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const subject = encodeURIComponent("Join the Odda Priority List");
    const body = encodeURIComponent(
      [
        "Please add me to the Odda Priority List for the first 15 families and to the newsletter.",
        "",
        "Email: " + email,
      ].join("\n"),
    );

    setEmailPrepared(true);

    window.setTimeout(() => {
      window.location.href =
        "mailto:" +
        PRIORITY_LIST_EMAIL +
        "?subject=" +
        subject +
        "&body=" +
        body;
    }, 50);
  }

  return (
    <section
      aria-labelledby="priority-list-title"
      className="bg-white px-7 py-20 sm:px-14 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#315F4B]">
            Priority List
          </p>
          <h2
            id="priority-list-title"
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl"
          >
            Be one of the first 15 families to experience Odda.
          </h2>
          <p className="mt-5 text-base leading-7 text-black sm:text-lg sm:leading-8">
            Join our newsletter for exclusive early access. The first 15
            families on the list will be first in the queue when Odda becomes
            available.
          </p>
        </div>

        <div className="lg:pl-10">
          
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
            Join the Priority List
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-black sm:text-base">
            Leave your email for launch updates and your opportunity to be
            among the first families supported by Odda.
          </p>

          <form onSubmit={handleSubmit} className="mt-7">
            <label htmlFor="priority-email" className="text-sm font-semibold">
              Email address
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="priority-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-full border border-black/30 bg-white px-5 py-3.5 text-black outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-black/60 focus:border-black focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black bg-transparent px-6 py-3.5 font-semibold text-black transition-colors duration-300 hover:bg-white"
              >
                Join the list
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-black">
              We&apos;ll only use your email for Odda news and Priority List
              updates. You can unsubscribe at any time. Submitting opens a
              ready-to-send email to Odda.
            </p>

            {emailPrepared ? (
              <p role="status" className="mt-4 text-sm font-semibold text-black">
                Your email is ready — send it to complete your request.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
