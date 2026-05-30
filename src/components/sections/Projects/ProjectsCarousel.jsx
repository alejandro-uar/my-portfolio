import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProjectCard from "./ProjectCard"

const ProjectsCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative px-0 md:px-14">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex -ml-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_55%] lg:flex-[0_0_45%] pl-4 min-w-0"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-deep-800/80 backdrop-blur border border-border-500 text-slate-300 hover:bg-surface-700 hover:border-brand-cyan/50 hover:text-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-deep-800/80 backdrop-blur border border-border-500 text-slate-300 hover:bg-surface-700 hover:border-brand-cyan/50 hover:text-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "bg-brand-cyan w-6 h-2"
                : "bg-border-500 hover:bg-border-400 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsCarousel
