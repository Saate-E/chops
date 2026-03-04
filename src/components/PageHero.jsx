import { useEffect, useMemo, useState } from 'react'

export default function PageHero({ title, description, image, images, fullHeight = false }) {
  const slides = useMemo(() => images?.length ? images : [image], [image, images])
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [slides])

  return (
    <section className={`relative overflow-hidden border-b border-slate-200 ${fullHeight ? 'min-h-[100svh]' : ''}`}>
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={`${slide}-${index}`}
            src={slide}
            alt={title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/45" />
      </div>
      <div
        className={`relative mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          fullHeight ? 'min-h-[100svh] items-center py-24' : 'py-24'
        }`}
      >
        <div>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-100 sm:text-lg">{description}</p>
        {slides.length > 1 && (
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? 'w-8 bg-amber-300' : 'w-2.5 bg-white/70'
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
