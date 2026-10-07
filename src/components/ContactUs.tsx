interface ContactUsProps {
  heading: string | null;
  intro: string | null;
  email: string | null;
}

const hasText = (value: string | null): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export default function ContactUs({ heading, intro, email }: ContactUsProps) {
  if (!hasText(email)) return null;

  return (
    <section id="contact" className="scroll-reveal bg-[#101311] px-6 py-20 text-[#F6F7F4] md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-5xl">
            {hasText(heading) ? heading : 'Contact'}
          </h2>
          {hasText(intro) && <p className="mt-5 max-w-xl text-base leading-7 text-[#C2CAC3]">{intro}</p>}
          <a href={`mailto:${email}`} className="mt-6 inline-block font-semibold underline underline-offset-4">
            {email}
          </a>
        </div>

        <form
          action={`https://formsubmit.co/${encodeURIComponent(email)}`}
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_subject" value="New portfolio inquiry" />
          <input type="hidden" name="_template" value="table" />
          <label className="block text-sm font-medium" htmlFor="contact-name">
            Name *
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="mt-2 block w-full rounded-md border border-[#59615C] bg-[#171C19] px-4 py-3 text-base text-white placeholder:text-[#A2ABA5] focus:border-[#B8F36B] focus:outline-none focus:ring-2 focus:ring-[#B8F36B]/40"
            />
          </label>
          <label className="block text-sm font-medium" htmlFor="contact-email">
            Email *
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 block w-full rounded-md border border-[#59615C] bg-[#171C19] px-4 py-3 text-base text-white placeholder:text-[#A2ABA5] focus:border-[#B8F36B] focus:outline-none focus:ring-2 focus:ring-[#B8F36B]/40"
            />
          </label>
          <label className="block text-sm font-medium" htmlFor="contact-message">
            Message *
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              className="mt-2 block w-full resize-y rounded-md border border-[#59615C] bg-[#171C19] px-4 py-3 text-base text-white placeholder:text-[#A2ABA5] focus:border-[#B8F36B] focus:outline-none focus:ring-2 focus:ring-[#B8F36B]/40"
            />
          </label>
          <button
            type="submit"
            className="portfolio-cta rounded-md bg-[#B8F36B] px-5 py-3 text-sm font-semibold text-[#18210F] hover:bg-[#C9F88B]"
          >
            Send message
          </button>
          <p className="text-xs text-[#A2ABA5]">Messages are delivered through FormSubmit.</p>
        </form>
      </div>
    </section>
  );
}
