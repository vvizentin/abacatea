import { useState, useEffect } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      {
        /* Top 20% visible, ignore bottom 65% — fires when section enters upper portion */
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    for (const id of sectionIds) {
      const cleanId = id.replace("#", "");
      const el = document.getElementById(cleanId);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
