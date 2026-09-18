import { useEffect, useRef } from "react";

const translateMap = {
  up: (d) => `translateY(${d})`,
  down: (d) => `translateY(-${d})`,
  left: (d) => `translateX(-${d})`,
  right: (d) => `translateX(${d})`,
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = "32px",
  duration = "0.7s",
  threshold = 0.12,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("sr-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <Tag
      ref={ref}
      className={`sr-base ${className}`}
      style={{
        "--sr-transform": translateMap[direction](distance),
        "--sr-duration": duration,
      }}
    >
      {children}
    </Tag>
  );
}
