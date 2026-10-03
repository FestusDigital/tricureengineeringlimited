import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/site";

export function Gallery({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active === null ? undefined : items[active];
  const move = (step: number) => setActive((current) => current === null ? null : (current + step + items.length) % items.length);
  useEffect(() => {
    if (active === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); };
  }, [active, items.length]);

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button key={item.src} className="gallery-item" onClick={() => setActive(index)} aria-label={`Open ${item.title} image`}>
            <img src={item.src} alt={item.alt} loading="lazy" /><span>{item.title}</span>
          </button>
        ))}
      </div>
      {activeItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <Button variant="ghost" size="icon" className="lightbox-close" aria-label="Close gallery" onClick={() => setActive(null)}><X /></Button>
          <Button variant="ghost" size="icon" className="lightbox-prev" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft /></Button>
          <figure><img src={activeItem.src} alt={activeItem.alt} /><figcaption>{activeItem.title}</figcaption></figure>
          <Button variant="ghost" size="icon" className="lightbox-next" aria-label="Next image" onClick={() => move(1)}><ChevronRight /></Button>
        </div>
      )}
    </>
  );
}