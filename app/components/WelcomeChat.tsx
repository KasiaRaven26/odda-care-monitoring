import { useEffect, useState } from "react";
import "./app.css";

const storageKey = "odda-welcome-seen";

export default function WelcomeChat() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey)) {
      setReady(true);
      return;
    }

    const timer = window.setTimeout(() => {
      window.localStorage.setItem(storageKey, "1");
      setReady(true);
      setOpen(true);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80] w-[calc(100vw-2.5rem)] max-w-[370px] font-['Montserrat'] text-black">
      {open ? (
        <section
          aria-label="Odda welcome chat"
          className="overflow-hidden rounded-[24px] border border-black/10 bg-[#F8F6F1] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <div className="flex items-center gap-3">
  <img
    src="/images/odda-logo-transparent.png"
    alt="Odda Care"
    className="h-11 w-auto object-contain mix-blend-multiply"
  />

  <p className="text-xs text-black">
    Here to help you get started
  </p>
</div>

            <button
              type="button"
              aria-label="Close welcome chat"
              onClick={() => setOpen(false)}
              className="p-2 text-xl leading-none transition-opacity hover:opacity-60"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 px-5 py-5">
            <p className="max-w-[290px] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 shadow-sm">
             Welcome to Odda. How can we help?
            </p>

            <div className="flex flex-col items-start gap-2">
              <a
                href="/book-assessment"
                className="inline-flex items-center gap-3 rounded-full bg- bg-[#DCE8D8] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-[#315F4B]"
              >
                Book a free assessment
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/faq"
                className="rounded-full border border-black/20 px-5 py-3 text-sm transition-colors hover:bg-white"
              >
                Learn more about Odda
              </a>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Odda chat"
          className="odda-chat-launcher group ml-auto flex items-center gap-3 rounded-full bg-[#F2ECE3] px-5 py-3 text-sm font-semibold text-[#24342D] shadow-[0_8px_24px_rgba(34,40,36,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8F4ED] hover:shadow-[0_12px_28px_rgba(34,40,36,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B]"
        >
          <span className="flex h-10 w-12 shrink-0 items-center justify-center">
            <img
              src="/images/odda-logo-transparent.png"
              alt=""
              className="h-10 w-auto object-contain"
            />
          </span>

          <span>Chat with Odda</span>

          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M5 15 15 5M7 5h8v8"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
