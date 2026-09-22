import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import SensorInsights from "../components/SensorInsights";
import Navbar from "../components/Navbar";

const slides = [
  {
    src: "/images/odda-kitchen-routine.png",
    alt: "Starsza kobieta przygotowująca herbatę w swojej kuchni",
    title: "Independence at home",
  },
  {
    src: "/images/odda-son-work-dashboard.png",
    alt: "Dorosły syn sprawdzający na telefonie dashboard Odda Care",
    title: "Reassurance wherever you are",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Odda Care" },
    {
      name: "description",
      content: "Intelligent care at home.",
    },
  ];
}

export default function Home() {
  const technologyRef = useRef<HTMLElement>(null);
  const [technologyVisible, setTechnologyVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const section = technologyRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTechnologyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#929F88] font-['Montserrat'] text-[#3C4738]">
      <Navbar />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        {/* Hero text */}
        <div>
          <h1 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-3xl lg:text-5xl">
            Independent living,
            <br />
            for longer.
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white">
            A network of discreet home sensors that quietly track daily
            routines and lets your family know if something&apos;s not right.
          </p>

          <p className="mt-6 max-w-xl text-base font-semibold leading-7 tracking-[0.01em] text-white">
            No cameras. No microphones. Nothing to wear.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#technology"
              className="rounded-full border-2 border-white bg-transparent px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5F6F59]"
            >
              See how Odda works
            </a>

            <a
  href="#families"
  className="group inline-flex items-center gap-3 rounded-full bg-[#E8DFD0] px-7 py-4 font-semibold text-black transition-colors duration-300 hover:bg-[#F3ECE1]"
>
  <span>Let&apos;s talk</span>

  <svg
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
  >
    <path
      d="M4 10h11M11 6l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>
          </div>
        </div>

        {/* Hero carousel */}
        <div
          role="region"
          aria-label="Odda Care stories"
          aria-roledescription="carousel"
          className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-xl shadow-[#3C4738]/15"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              aria-hidden={index !== currentSlide}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover brightness-[0.82]"
              />
            </div>
          ))}
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

<div className="absolute bottom-10 left-6 z-10 sm:left-8">
  <p className="max-w-sm text-xl font-semibold leading-tight text-white sm:text-2xl">
    {slides[currentSlide].title}
  </p>
</div>
          <div className="absolute bottom-10 left-6 sm:left-8">
            <p className="max-w-sm text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-2xl">
              {slides[currentSlide].title}
            </p>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
                className={`h-2 rounded-full border-0 transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 bg-[#F6E8D0]"
                    : "w-2 bg-[#F6E8D0]/60 hover:bg-[#F6E8D0]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <SensorInsights />
    </main>
  );
}