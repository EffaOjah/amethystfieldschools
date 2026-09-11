import { useState, useEffect, useRef } from 'react';

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export default function Statistics() {
  const stats = [
    { number: 900, suffix: '+', label: 'Students Admitted' },
    { number: 100, suffix: '%', label: 'Pass Rate' },
    { number: 50, suffix: '+', label: 'Expert Staff' },
    { number: 20, suffix: '+', label: 'Subjects' },
    { number: 15, suffix: '+', label: 'Student Clubs' },
  ];

  return (
    <section className="py-16 bg-white px-4 md:px-8 border-b border-zinc-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center text-center gap-y-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="w-1/2 md:w-auto px-6 group cursor-default">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
                <CountUp end={stat.number} />
                <span className="text-2xl md:text-3xl align-top text-accent">{stat.suffix}</span>
              </h3>
              <p className="text-secondary text-xs md:text-sm font-black tracking-[0.2em] uppercase">
                {stat.label}
              </p>
              <div className="w-8 h-1 bg-accent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

