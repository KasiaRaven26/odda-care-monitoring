import {
  ArrowRight,
  CalendarDays,
  CameraOff,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DoorOpen,
  MicOff,
  TrendingUp,
  Watch,
} from "lucide-react";
import { Link, data } from "react-router";
import { useRef, useState } from "react";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import PriorityList from "../components/PriorityList";
import WelcomeChat from "../components/WelcomeChat";

export type PriorityActionData = {
  ok: boolean;
  message: string;
  errors?: { email?: string; firstName?: string };
};

const journeySteps = [
  {
    number: "01",
    title: "Discreet sensors at home",
    description:
      "We position and test a small hub and sensors around the home, then show your family how to use Odda View.",
  },
  {
    number: "02",
    title: "Understanding everyday routines",
    description:
      "The sensors notice simple household activity, such as movement, doors opening and familiar appliance use, and learn what is usual.",
  },
  {
    number: "03",
    title: "Updates in Odda View",
    description:
      "Everyday signals become clear updates and longer-term patterns, helping approved family members know when it may be useful to check in.",
  },
];

const viewFeatures = [
  {
    icon: Clock3,
    title: "Today at a glance",
    description: "See familiar activity and the current home status in one clear view.",
  },
  {
    icon: DoorOpen,
    title: "Changes in routine",
    description: "Notice meaningful differences without having to interpret raw sensor data.",
  },
  {
    icon: TrendingUp,
    title: "Patterns over time",
    description: "Review weekly routines and monthly reports for a broader picture.",
  },
];

const viewSlides = [
  {
    image: "/images/desktop3-transparent.png",
    alt: "Odda View desktop dashboard showing today’s activity, weekly routine and home environment",
    caption: "A clear overview of activity and familiar routines.",
    imageClass: "h-full w-full object-contain px-5 py-8 sm:px-8 sm:py-10",
  },
  {
    image: "/images/odda-view-home.png",
    alt: "Odda View home screen showing that everything looks normal",
    caption: "See the current home status at a glance.",
    imageClass: "h-full w-full object-contain px-8 py-6 sm:px-14 sm:py-8",
  },
  {
    image: "/images/odda-monthly-report.png",
    alt: "Odda View monthly report showing a steady activity pattern",
    caption: "Understand familiar patterns over time.",
    imageClass: "h-full w-full object-contain px-8 py-6 sm:px-14 sm:py-8",
  },
];

const scenarios = [
  {
    image: "/images/scenario-sarah-and-mum.png",
    imageAlt: "An older woman speaking with her family on the phone at home",
    need: "Living further away",
    title: "Sarah & her mum – reassurance from a distance",
    story:
      "Sarah lives two hours away from her mum, who enjoys living independently. They speak regularly, but Sarah sometimes wonders how things are between calls. ODDA could help her understand everyday patterns and decide when to check in.",
  },
  {
    image: "/images/scenario-david.png",
    imageAlt: "An older man watering a houseplant in his living room",
    need: "Privacy and independence",
    title: "David – independence with privacy",
    story:
      "David wants to stay in his own home and values his privacy. His daughter would like a little more reassurance, but cameras do not feel right for either of them. ODDA could offer a discreet way to understand daily routines without recording audio or video.",
  },
  {
    image: "/images/scenario-emma-and-dad.png",
    imageAlt: "A woman checking her phone while working at home with her family nearby",
    need: "Balancing family and work",
    title: "Emma & her dad – staying connected around work",
    story:
      "Emma balances work, children and supporting her dad, who lives alone. She cannot always call during the day. ODDA could give her another way to stay informed about his routine and help her decide when a conversation or visit might be useful.",
  },
];

const homeFaqs = [
  {
    question: "Who is ODDA for?",
    answer:
      "ODDA is designed for older adults who live alone and want to remain independent, and for the family members who would value a clearer picture of everyday routines.",
  },
  {
    question: "Does ODDA use cameras or microphones?",
    answer:
      "No. ODDA uses discreet sensors that notice simple household activity. They do not record images, video or conversations.",
  },
  {
    question: "What needs to be installed?",
    answer:
      "A small ODDA Hub and a considered set of sensors are positioned around the home. We install and test the equipment during a home visit and explain Odda View before we leave.",
  },
  {
    question: "What can my family see in Odda View?",
    answer:
      "Approved family members can see the current home status, recent activity, changes in routine and longer-term patterns. Information is presented clearly rather than as technical sensor logs.",
  },
  {
    question: "How can I find out when ODDA is available?",
    answer:
      "Join the priority list for launch news, availability updates and occasional news about ODDA. We will only email you about ODDA, and you can unsubscribe at any time.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ODDA | Independent living. Everyday reassurance." },
    {
      name: "description",
      content:
        "ODDA uses discreet home sensors and Odda View to help families understand a loved one’s daily routine — without cameras, microphones or wearables.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const firstName = String(formData.get("firstName") || "").trim();
  const errors: PriorityActionData["errors"] = {};
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (firstName.length > 80) {
    errors.firstName = "First name must be 80 characters or fewer.";
  }

  if (Object.keys(errors).length > 0) {
    return data<PriorityActionData>(
      { ok: false, message: "Check the details below and try again.", errors },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.ODDA_PRIORITY_LIST_WEBHOOK_URL;
  if (!webhookUrl) {
    return data<PriorityActionData>(
      {
        ok: false,
        message:
          "Online sign-up is not connected yet. Please email hello@odda-tec.co.uk and we’ll add you to the priority list.",
      },
      { status: 503 },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ODDA_PRIORITY_LIST_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.ODDA_PRIORITY_LIST_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        email,
        firstName: firstName || undefined,
        source: "odda-homepage-priority-list",
        consentedAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Priority list webhook returned ${response.status}`);
    }

    return {
      ok: true,
      message:
        "Thank you — you’re on the priority list. We’ll be in touch with ODDA news and availability updates.",
    } satisfies PriorityActionData;
  } catch (error) {
    console.error("Priority list submission failed", error);
    return data<PriorityActionData>(
      {
        ok: false,
        message:
          "We couldn’t add you just now. Please try again, or email hello@odda-tec.co.uk.",
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}

const primaryButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#A8B59F] px-6 py-3 text-sm font-semibold text-[#1D2A23] shadow-[0_4px_14px_rgba(49,95,75,0.08)] transition-[background-color,box-shadow] hover:bg-[#C9D3C3] hover:shadow-[0_8px_20px_rgba(49,95,75,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B]";
const textLink =
  "group inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold transition-colors hover:border-[#315F4B] hover:text-[#315F4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F4B]";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [viewSlide, setViewSlide] = useState(0);
  const viewTouchStart = useRef<number | null>(null);

  const showPreviousViewSlide = () => {
    setViewSlide((current) => (current - 1 + viewSlides.length) % viewSlides.length);
  };

  const showNextViewSlide = () => {
    setViewSlide((current) => (current + 1) % viewSlides.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F6F1] font-['Montserrat'] text-[#1D2A23]">
      <Navbar />

      <section aria-labelledby="home-title" className="bg-[#F8F6F1]">
        <div className="mx-auto grid min-h-[calc(100svh-82px)] max-w-[1440px] lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 lg:py-20 xl:px-24">
            <div className="max-w-[650px]">
              <p className="!text-xs font-semibold uppercase tracking-[0.24em] !text-[#315F4B]">
                Discreet support for independent living
              </p>
              <h1 id="home-title" className="mt-5 text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-[4.2rem]">
                Independent living. Everyday reassurance.
              </h1>
              <p className="mt-7 max-w-[610px] text-base leading-8 text-[#34443B] sm:text-lg">
                ODDA uses discreet home sensors to help families understand their loved one’s daily routine, with updates in Odda View. No cameras, microphones or wearables.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#priority-list" className={primaryButton}>
                  Join the priority list
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a href="#how-it-works" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#EEE9DF] px-6 py-3 text-sm font-semibold text-[#1D2A23] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315F4B]">
                  See how it works
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#315F4B]/15 pt-6 text-sm font-medium text-black">
                <span className="inline-flex items-center gap-2"><CameraOff aria-hidden="true" className="h-4 w-4" />No cameras</span>
                <span className="inline-flex items-center gap-2"><MicOff aria-hidden="true" className="h-4 w-4" />No microphones</span>
                <span className="inline-flex items-center gap-2"><Watch aria-hidden="true" className="h-4 w-4" />Nothing to wear</span>
              </div>
            </div>
          </div>

          <figure className="relative min-h-[430px] overflow-hidden bg-[#D8D2C7] lg:min-h-[650px]">
            <img src="/images/odda-kitchen-routine.png" alt="An older woman making tea independently in her kitchen, with a discreet sensor on the wall" className="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-[54%_center]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-6 right-6 max-w-sm text-sm font-medium leading-6 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.65)] sm:bottom-8 sm:left-8">
              Quiet technology designed to fit around everyday life at home.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-24 bg-white px-6 py-20 sm:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">How ODDA works</p>
            <h2 id="how-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Simple signals. A clearer picture.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#46564D] sm:text-lg">
              ODDA works quietly in the background, turning everyday activity into information your family can understand.
            </p>
          </div>

          <ol className="mt-14 grid border-y border-[#315F4B]/15 lg:grid-cols-3">
            {journeySteps.map((step, index) => (
              <li key={step.number} className={`py-8 lg:px-9 lg:py-10 ${index > 0 ? "border-t border-[#315F4B]/15 lg:border-l lg:border-t-0" : ""}`}>
                <span className="text-sm font-semibold tracking-[0.18em] text-[#315F4B]">{step.number}</span>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em]">{step.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#526158]">{step.description}</p>
              </li>
            ))}
          </ol>

          <Link to="/how-it-works" className={`${textLink} mt-9`}>
            Explore how it works <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section aria-labelledby="view-title" className="bg-white px-6 py-20 sm:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Odda View app previews"
            className="overflow-hidden rounded-[32px] border border-[#315F4B]/10 bg-white shadow-[0_24px_60px_rgba(42,65,52,0.10)]"
            onTouchStart={(event) => {
              viewTouchStart.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (viewTouchStart.current === null) return;
              const distance = viewTouchStart.current - event.changedTouches[0].clientX;
              if (Math.abs(distance) > 45) {
                distance > 0 ? showNextViewSlide() : showPreviousViewSlide();
              }
              viewTouchStart.current = null;
            }}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${viewSlide * 100}%)` }}
              >
                {viewSlides.map((slide, index) => (
                  <figure
                    key={slide.image}
                    aria-hidden={viewSlide !== index}
                    className="w-full shrink-0"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-white">
                      <img src={slide.image} alt={slide.alt} loading="lazy" className={slide.imageClass} />
                    </div>
                    <figcaption className="border-t border-[#315F4B]/10 px-6 py-4 text-center text-sm leading-6 text-black">
                      {slide.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#315F4B]/10 px-5 py-4">
              <button
                type="button"
                onClick={showPreviousViewSlide}
                aria-label="Show previous Odda View preview"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#315F4B]/20 bg-white text-[#315F4B] transition-colors hover:bg-[#EEE9DF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2" aria-label={`Slide ${viewSlide + 1} of ${viewSlides.length}`}>
                {viewSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => setViewSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={viewSlide === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${viewSlide === index ? "w-7 bg-[#315F4B]" : "w-2.5 bg-[#315F4B]/25 hover:bg-[#315F4B]/45"}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextViewSlide}
                aria-label="Show next Odda View preview"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#315F4B]/20 bg-white text-[#315F4B] transition-colors hover:bg-[#EEE9DF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F4B]"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">Odda View</p>
            <h2 id="view-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">See how their day is unfolding.</h2>
            <p className="mt-6 text-base leading-8 text-[#46564D]">Odda View makes home activity easy to understand, so your family can see what looks familiar and notice when something changes.</p>
            <div className="mt-7 border-t border-[#315F4B]/20">
              {viewFeatures.map(({ icon: Icon, title, description }) => (
                <article key={title} className="grid grid-cols-[36px_1fr] gap-4 border-b border-[#315F4B]/20 py-5">
                  <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-[#315F4B]" strokeWidth={1.6} />
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#526158]">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PriorityList />

      <section aria-labelledby="stories-title" className="bg-[#F8F6F1] px-6 py-20 sm:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">Who ODDA could help</p>
            <h2 id="stories-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Different lives. A shared need for reassurance.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {scenarios.map(({ image, imageAlt, need, title, story }) => (
              <article key={title} className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#315F4B]/12 bg-white transition-[box-shadow,border-color] duration-500 ease-out hover:border-[#315F4B]/25 hover:shadow-[0_18px_45px_rgba(49,95,75,0.12)]">
                <figure className="aspect-[4/3] overflow-hidden bg-[#EEE9DF]">
                  <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                </figure>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#315F4B]">{need}</span>
                  <h3 className="mt-4 text-xl font-semibold leading-[1.3] tracking-[-0.025em]">{title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#526158]">{story}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="technology-title" className="bg-white px-6 py-20 sm:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <figure className="w-full max-w-[520px] justify-self-center overflow-hidden rounded-[32px] bg-[#8D9B82] lg:justify-self-start">
            <img src="/images/odda-kit-product.png" alt="The ODDA Hub and discreet home sensors" loading="lazy" className="aspect-square w-full object-cover" />
          </figure>
          <div>
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">Technology & privacy</p>
            <h2 id="technology-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Thoughtful technology. Respect for privacy.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#46564D]">A small hub and discreet sensors notice simple signals such as movement, door activity and familiar appliance use. ODDA builds a useful picture of routine without turning the home into a place that feels watched.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              <li className="flex items-center gap-2 rounded-full bg-[#F3F0E9] px-4 py-3 text-sm font-semibold"><CameraOff aria-hidden="true" className="h-4 w-4 text-[#315F4B]" />No cameras</li>
              <li className="flex items-center gap-2 rounded-full bg-[#F3F0E9] px-4 py-3 text-sm font-semibold"><MicOff aria-hidden="true" className="h-4 w-4 text-[#315F4B]" />No microphones</li>
              <li className="flex items-center gap-2 rounded-full bg-[#F3F0E9] px-4 py-3 text-sm font-semibold"><Watch aria-hidden="true" className="h-4 w-4 text-[#315F4B]" />No wearables</li>
            </ul>
            <Link to="/technology" className={`${textLink} mt-9`}>Explore the technology <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-title" className="bg-[#EEE9DF] px-6 py-20 text-[#1D2A23] sm:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 sm:grid-cols-[220px_1fr] sm:items-center lg:gap-20">
          <figure className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[28px] border border-[#315F4B]/10 bg-white shadow-[0_18px_45px_rgba(49,95,75,0.10)] sm:mx-0">
            <img src="/images/Aggie-arden.jpg" alt="Aggie Arden, founder of ODDA" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </figure>
          <div>
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">About ODDA</p>
            <h2 id="about-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">Built on real care experience.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#46564D] sm:text-lg">Founder Aggie Arden spent over ten years working in care, including dementia, Parkinson’s, person-centred and end-of-life care. ODDA grew from seeing how much families can worry about the hours between calls and visits.</p>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 border-b border-black/30 pb-1 text-sm font-semibold text-black transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F4B]">Meet the founder <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-title" className="bg-[#F8F6F1] px-6 py-16 sm:px-12 lg:py-20">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-8 rounded-[30px] border border-[#315F4B]/15 bg-white px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-14">
          <div className="max-w-2xl">
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">Clear pricing</p>
            <h2 id="pricing-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Understand the costs.</h2>
            <p className="mt-4 text-base leading-7 text-[#526158]">See how the weekly subscription, professional installation and refundable equipment deposit fit together, with no complicated packages.</p>
          </div>
          <Link to="/pricing" className={`${primaryButton} shrink-0 self-start lg:self-auto`}>View pricing <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-white px-6 py-20 sm:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="!text-xs font-semibold uppercase tracking-[0.22em] !text-[#315F4B]">Frequently asked questions</p>
            <h2 id="faq-title" className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em]">A few useful answers.</h2>
            <Link to="/faq" className={`${textLink} mt-7`}>Visit the full FAQ <ChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="border-t border-[#315F4B]/20">
            {homeFaqs.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `home-faq-answer-${index}`;

              return (
              <div key={item.question} className="border-b border-[#315F4B]/20">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F4B]"
                >
                  {item.question}
                  <span aria-hidden="true" className="relative h-5 w-5 shrink-0"><span className="absolute left-0 top-1/2 h-px w-5 bg-current" /><span className={`absolute left-1/2 top-0 h-5 w-px bg-current transition-[transform,opacity] duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} /></span>
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-8 text-[15px] leading-7 text-[#526158]">{item.answer}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="final-cta-title" className="bg-[#F8F6F1] px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-[1240px] rounded-[34px] bg-[#A8B59F] px-7 py-14 text-center sm:px-12 lg:py-16">
          <CalendarDays aria-hidden="true" className="mx-auto h-7 w-7 text-[#315F4B]" strokeWidth={1.5} />
          <h2 id="final-cta-title" className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Stay informed about ODDA.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#34443B]">Join the priority list for launch news and availability updates.</p>
          <a href="#priority-list" className={`${primaryButton} mt-7 !bg-[#DDE5D9] hover:!bg-[#EEF2EB]`}>Join the priority list <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
      </section>

      <WelcomeChat />
    </main>
  );
}
