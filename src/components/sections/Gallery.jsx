const PHOTOS = [
  {
    src: "/gallery/award-ceremony-1.jpg",
    alt: "Azaan Services receiving a Diamond Partner award certificate",
    caption: "Recognized as a Diamond Partner",
  },
  {
    src: "/gallery/award-partners.jpg",
    alt: "Azaan Services team holding the Diamond Partner award",
    caption: "Award recognition, held by the team",
  },
  {
    src: "/gallery/team-celebration-1.jpg",
    alt: "The Azaan Services team celebrating together in the office",
    caption: "Life at Azaan Services",
  },
  {
    src: "/gallery/team-group.jpg",
    alt: "The Azaan Services team celebrating together in the office",
    caption: "Team behind every placement",
  },
  {
    src: "public/gallery/Diamond partner.jpeg",
    alt: "The full Azaan Services team in the office",
    caption: "Recognized as a Diamond Recruitment Partner by InterGlobe Technologies",
  },
  {
    src: "public/gallery/40 under 40.jpeg",
    alt: "The full Azaan Services team in the office",
    caption: "Certificate of Participation at the 40 Under 40 Leaders Initiative",
  },
];

// Real photos from the firm — award recognition and office/team moments —
// used to build trust and give visitors a sense of who they'd be working with.
export default function Gallery() {
  return (
    <section className="border-t border-ink/10 bg-ink/[0.02]">
      <div className="section">
        <p className="eyebrow">In the picture</p>
        <h2 className="mt-3 max-w-xl text-3xl font-medium text-ink">
          Moments from the Azaan Services team
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-card border border-ink/10 bg-paper shadow-card"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-56 w-full object-cover sm:h-48"
              />
              <figcaption className="px-4 py-3 text-xs text-ink-text/70">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
