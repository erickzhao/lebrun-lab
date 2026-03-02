/**
 * Auto-playing image carousel with DaisyUI styling.
 *
 * React island for auto-play timers and transition state.
 */
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [next]);

  if (slides.length === 0) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-4">
      <section className="relative h-[400px] w-full overflow-hidden rounded-box bg-black">
        {slides.map((slide, i) => (
          <a
            key={slide.slug}
            href={`/research/${slide.slug}/`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={slide.headerImage} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-12 left-8 right-8 text-2xl font-bold text-white drop-shadow-lg md:text-4xl">
              {slide.title}
            </span>
          </a>
        ))}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="btn btn-circle btn-ghost absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="btn btn-circle btn-ghost absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60"
              aria-label="Next slide"
            >
              <ChevronRight className="size-6" />
            </button>
          </>
        )}
      </section>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 py-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`btn btn-xs btn-circle ${i === current ? 'btn-primary' : 'btn-ghost'}`}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
