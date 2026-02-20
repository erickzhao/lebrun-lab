/**
 * Auto-playing image carousel — rendered as a React island (`client:load`).
 *
 * Displays research topic images in a full-width hero banner that
 * automatically cycles through slides with a fade transition. Users can
 * also navigate manually with left/right arrow buttons.
 *
 * This replaces the old Bulma-carousel library with a lightweight,
 * dependency-free implementation using CSS transitions and a `setInterval`.
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  headerImage: string;
  title: string;
  slug: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => { clearInterval(timer); };
  }, [next]);

  if (slides.length === 0) return null;

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <a
          key={slide.slug}
          href={`/research/${slide.slug}/`}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.headerImage}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          {/* Dark gradient overlay at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute bottom-8 left-8 right-8 text-2xl font-bold font-heading text-white drop-shadow-lg md:text-4xl">
            {slide.title}
          </span>
        </a>
      ))}

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
            aria-label="Next slide"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}
    </section>
  );
}
