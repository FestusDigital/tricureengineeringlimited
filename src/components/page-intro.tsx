export function PageIntro({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image: string; alt: string }) {
  return (
    <section className="page-intro">
      <img src={image} alt={alt} fetchPriority="high" />
      <div className="page-intro-shade" />
      <div className="shell page-intro-content"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>
    </section>
  );
}