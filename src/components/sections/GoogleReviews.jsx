const GOOGLE_REVIEWS_URL = "https://share.google/lMxF89q7c8A8Oexqa";

const reviews = [
  {
    name: "Mohit Chhabra",
    meta: "1 review",
    time: "3 years ago",
    text: `"Azaan services" One of the best consultancy I have ever seen in my life.

I know this interview wasn’t easy but you made it very simple and easy for me.

Arhaan has deep understanding and knowledge of his craft and did a great job communicating with me through the interview process.

I’m so thrilled that you managed it very well and helped me alot and motivated me in my difficult time.

A special thanks to Azaan services.`,
  },

  {
    name: "Ashish Rathore",
    meta: "2 reviews",
    time: "Edited 4 years ago",
    text: `It was a very great experience. Azaan services were very helpful and they really do motivate me not only for the current job but for my career as well. One of the best consultancy that I ever came across.

They are so supportive especially "ARHAAN KHAN" from Azaan services he'll put his 100% to help me during the interview, guided me well, motivated me and the encouragement is the one which made me get this interview cracked.

I would recommend it to my friends to contact Azaan Services in future to get the right job.

Good work Azaan Services. 😊`,
  },

  {
    name: "Nikhil Jha",
    meta: "3 reviews",
    time: "2 years ago",
    text: `I had an awesome experience with Azaan consultancy services regarding my job in CWT. He didn't just helped me with scheduling my interview but he was connected with me throughout the whole process which took around 1 month to complete.

I recommend all the job seekers to get in touch with the Azaan services team to get placed in a good reputed company.

Further, I once again thank him that he provided me with such a great opportunity so that I can grow in my career.`,
  },

  {
    name: "Bharti Rawat",
    meta: "Local Guide · 9 reviews · 1 photo",
    time: "2 years ago",
    text: `Great experience with Arhan and Azaan team. Arhan was available for every followups and respond to each and every call.

He build confidence and manages everything so confidently. Thankyou Arhan for coming upfront and helping candidates like me.`,
  },

  {
    name: "Mohd Arif",
    meta: "1 review",
    time: "Edited 4 years ago",
    text: `In total 8 years of experience I never seen the consultancy like Azaan services. One of the best consultancy to find the job.

Arhan Khan is excellent. The way he is motivate, encourage support you in every single step very nicely and politely. He puts all the efforts.

I am very glad to share my experience with Azaan services is great. And will recommend to my friends with Azaan services for dream job.

Thanks Arhan bhai. 🌟🌟🌟🌟🌟`,
  },
];

function Star() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.9l-5.18 2.54.99-5.77L1.62 7.59l5.79-.84L10 1.5z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.35 12.23c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.26z"
      />
      <path
        fill="#34A853"
        d="M12 21.67c2.63 0 4.84-.87 6.45-2.37l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.67z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 13.74A5.86 5.86 0 0 1 6.23 12c0-.61.1-1.2.31-1.74V7.73H3.3A9.7 9.7 0 0 0 2.25 12c0 1.56.37 3.03 1.05 4.27l3.24-2.53z"
      />
      <path
        fill="#EA4335"
        d="M12 6.23c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.3 14.63 2.33 12 2.33a9.74 9.74 0 0 0-8.7 5.4l3.24 2.53C7.31 7.95 9.46 6.23 12 6.23z"
      />
    </svg>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-6 shadow-card">
      
      {/* Reviewer */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          
          {/* Initial Avatar */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f766e] text-lg font-medium text-white">
            {review.name.charAt(0)}
          </div>

          <div>
            <h3 className="font-medium text-ink">
              {review.name}
            </h3>

            <p className="mt-0.5 text-xs text-ink-text/55">
              {review.meta}
            </p>
          </div>
        </div>

        <GoogleIcon />
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-1">
        <div className="flex text-[#fbbc04]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>

        <span className="ml-2 text-xs text-ink-text/55">
          {review.time}
        </span>
      </div>

      {/* Review */}
      <p className="mt-5 whitespace-pre-line text-sm leading-7 text-ink-text/75">
        {review.text}
      </p>
    </article>
  );
}

export default function GoogleReviews() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="section">

        {/* Header */}
        <div className="flex flex-col gap-6 rounded-card border border-ink/10 bg-ink/[0.02] p-7 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="eyebrow">
              Reviews
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink">
              What clients and candidates say about Azaan Services
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-1 text-[#fbbc04]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} />
                ))}
              </div>

              <span className="text-sm font-medium text-ink">
                4.8
              </span>

              <span className="text-sm text-ink-text/60">
                319 Google reviews
              </span>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            View all Google Reviews
          </a>
        </div>

        {/* Review Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.name}-${review.time}`}
              review={review}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brass-dark hover:underline"
          >
            Read more reviews on Google
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}