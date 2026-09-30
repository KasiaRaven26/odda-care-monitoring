import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useFetcher } from "react-router";
import type { PriorityActionData } from "../routes/home";

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#315F4B]/30 bg-white px-4 py-3.5 text-base text-[#1D2A23] outline-none transition-[border-color,box-shadow] placeholder:text-[#617067] focus:border-[#315F4B] focus:shadow-[0_0_0_3px_rgba(49,95,75,0.12)]";

export default function PriorityList() {
  const fetcher = useFetcher<PriorityActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = fetcher.state !== "idle";

  useEffect(() => {
    if (fetcher.data?.ok) formRef.current?.reset();
  }, [fetcher.data]);

  return (
    <section id="priority-list" aria-labelledby="priority-list-title" className="scroll-mt-24 bg-[#A8B59F] px-6 py-20 sm:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div className="max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#315F4B]">Priority list</p>
          <h2 id="priority-list-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Be among the first to hear about ODDA.</h2>
          <p className="mt-6 text-base leading-8 text-[#34443B] sm:text-lg">Join our priority list for launch news, availability updates and occasional news about ODDA.</p>
        </div>

        <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-[0_18px_48px_rgba(39,57,45,0.10)] sm:p-8">
          {fetcher.data?.ok ? (
            <div role="status" aria-live="polite" className="flex min-h-[250px] flex-col items-start justify-center">
              <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-[#315F4B]" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">You’re on the list.</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#526158]">{fetcher.data.message}</p>
            </div>
          ) : (
            <fetcher.Form ref={formRef} method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Email address <span aria-hidden="true" className="text-[#8A3D2E]">*</span>
                  <input type="email" name="email" required autoComplete="email" aria-describedby={fetcher.data?.errors?.email ? "priority-email-error" : undefined} aria-invalid={Boolean(fetcher.data?.errors?.email)} placeholder="you@example.com" className={fieldClass} />
                  {fetcher.data?.errors?.email ? <span id="priority-email-error" className="mt-2 block text-xs font-medium text-[#8A3D2E]">{fetcher.data.errors.email}</span> : null}
                </label>

                <label className="block text-sm font-semibold">
                  First name <span className="font-normal text-[#617067]">(optional)</span>
                  <input type="text" name="firstName" autoComplete="given-name" maxLength={80} aria-describedby={fetcher.data?.errors?.firstName ? "priority-name-error" : undefined} aria-invalid={Boolean(fetcher.data?.errors?.firstName)} placeholder="Your first name" className={fieldClass} />
                  {fetcher.data?.errors?.firstName ? <span id="priority-name-error" className="mt-2 block text-xs font-medium text-[#8A3D2E]">{fetcher.data.errors.firstName}</span> : null}
                </label>
              </div>

              <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#A8B59F] px-6 py-3 text-sm font-semibold text-[#1D2A23] shadow-[0_4px_14px_rgba(49,95,75,0.08)] transition-[background-color,box-shadow] hover:bg-[#C9D3C3] hover:shadow-[0_8px_20px_rgba(49,95,75,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B] disabled:cursor-wait disabled:opacity-65 disabled:shadow-none">
                {isSubmitting ? "Joining…" : "Join the priority list"}
                {!isSubmitting ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
              </button>

              {fetcher.data && !fetcher.data.ok ? (
                <p role="alert" className="mt-4 border-l-2 border-[#8A3D2E] pl-3 text-sm leading-6 text-[#713225]">
                  {fetcher.data.message}{" "}
                  {fetcher.data.message.includes("hello@odda.care") ? <a href="mailto:hello@odda.care" className="font-semibold underline underline-offset-2">Email ODDA</a> : null}
                </p>
              ) : null}

              <p className="mt-5 text-xs leading-5 text-[#526158]">We’ll only use your details for ODDA updates. You can unsubscribe at any time. See our <Link to="/privacy" className="font-semibold underline decoration-[#315F4B]/40 underline-offset-2 hover:text-[#315F4B]">privacy policy</Link>.</p>
            </fetcher.Form>
          )}
        </div>
      </div>
    </section>
  );
}
