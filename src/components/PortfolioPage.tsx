import Image from 'next/image';
import type { PortfolioData, PortfolioLink, PortfolioPost, PortfolioProject } from '@/types/portfolio';

interface PortfolioPageProps {
  data: PortfolioData;
}

const hasText = (value: string | null | undefined): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isProject = (project: PortfolioProject | null): project is PortfolioProject =>
  project !== null && hasText(project.title);

const isPost = (post: PortfolioPost | null): post is PortfolioPost =>
  post !== null && hasText(post.title);

const isCompleteLink = (
  link: PortfolioLink | null,
): link is PortfolioLink & { label: string; url: string } =>
  link !== null && hasText(link.label) && hasText(link.url);

export default function PortfolioPage({ data }: PortfolioPageProps) {
  const projects = (data.projects.items ?? []).filter(isProject);
  const posts = (data.blog.posts ?? []).filter(isPost);
  const services = (data.services.items ?? []).filter(
    (service) => hasText(service?.title) || hasText(service?.description),
  );
  const testimonials = (data.testimonials.items ?? []).filter(
    (item) => item !== null && hasText(item.quote) && hasText(item.author_name),
  );
  const contactLinks = (data.contact.links ?? []).filter(isCompleteLink);
  const hasContact =
    hasText(data.contact.heading) ||
    hasText(data.contact.intro) ||
    hasText(data.contact.email) ||
    contactLinks.length > 0;
  const aboutHasContent =
    hasText(data.about.heading) || hasText(data.about.body) || hasText(data.about.image);
  const primaryCta = data.hero.primary_cta;
  const secondaryCta = data.hero.secondary_cta;
  const copyrightName = data.footer.copyright_name ?? data.site.name;

  const navigation = [
    projects.length > 0 ? { label: 'Work', href: '#work' } : null,
    { label: 'Blog', href: '#blog' },
    services.length > 0 ? { label: 'Services', href: '#services' } : null,
    aboutHasContent ? { label: 'About', href: '#about' } : null,
    hasContact ? { label: 'Contact', href: '#contact' } : null,
  ].filter((item) => item !== null);

  return (
    <main className="min-h-screen bg-[#F6F7F4] text-[#101311]">
      <header className="border-b border-[#DFE4DE]">
        <div className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-6 px-6">
          <a href="#top" className="shrink-0 text-lg font-bold">
            {hasText(data.site.name) ? data.site.name : 'Portfolio'}
          </a>
          {navigation.length > 0 && (
            <nav aria-label="Main navigation" className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-[#59615C]">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-[#101311]">
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="max-w-4xl">
          {hasText(data.hero.eyebrow) && (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#59615C]">
              {data.hero.eyebrow}
            </p>
          )}
          {hasText(data.hero.headline) && (
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              {data.hero.headline}
            </h1>
          )}
          {hasText(data.hero.intro) && (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#59615C]">{data.hero.intro}</p>
          )}
          {(hasText(primaryCta?.label) && hasText(primaryCta.url)) ||
          (hasText(secondaryCta?.label) && hasText(secondaryCta.url)) ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {hasText(primaryCta?.label) && hasText(primaryCta.url) && (
                <a href={primaryCta.url} className="rounded-md bg-[#101311] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#343B35]">
                  {primaryCta.label}
                </a>
              )}
              {hasText(secondaryCta?.label) && hasText(secondaryCta.url) && (
                <a href={secondaryCta.url} className="rounded-md border border-[#BFC7BF] px-5 py-3 text-sm font-semibold transition-colors hover:bg-white">
                  {secondaryCta.label}
                </a>
              )}
            </div>
          ) : null}
        </div>
      </section>

      {projects.length > 0 && (
        <section id="work" className="border-t border-[#DFE4DE] bg-white px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#59615C]">Portfolio</p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  {hasText(data.projects.heading) ? data.projects.heading : 'Selected work'}
                </h2>
              </div>
              <p className="text-sm text-[#59615C]">{String(projects.length).padStart(2, '0')} projects</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => {
                const tools = (project.tools ?? []).filter(hasText);
                const card = (
                  <article className="group h-full overflow-hidden rounded-md border border-[#DFE4DE] bg-[#F6F7F4] transition-colors hover:border-[#9AA69B]">
                    {hasText(project.image) && (
                      <div className="aspect-[16/9] overflow-hidden bg-[#E6EAE5]">
                        <Image
                          src={project.image}
                          alt={hasText(project.image_alt) ? project.image_alt : project.title ?? 'Project preview'}
                          width={1200}
                          height={675}
                          unoptimized
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-7">
                      <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wide text-[#59615C]">
                        {hasText(project.category) && <span>{project.category}</span>}
                        {hasText(project.year) && <span>{project.year}</span>}
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      {hasText(project.description) && (
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#59615C]">{project.description}</p>
                      )}
                      {hasText(project.role) && <p className="mt-4 text-sm">Role: {project.role}</p>}
                      {tools.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                          {tools.map((tool) => (
                            <li key={tool} className="rounded-sm bg-white px-2.5 py-1 text-xs text-[#39413B]">{tool}</li>
                          ))}
                        </ul>
                      )}
                      {hasText(project.url) && <span className="mt-6 inline-block text-sm font-semibold">View project <span aria-hidden="true">↗</span></span>}
                    </div>
                  </article>
                );

                return hasText(project.url) ? (
                  <a key={project.id} href={project.url} target="_blank" rel="noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  <div key={project.id} className="h-full">{card}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section id="blog" className="border-t border-[#DFE4DE] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#59615C]">Writing</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {hasText(data.blog.heading) ? data.blog.heading : 'Notes & articles'}
            </h2>
            {hasText(data.blog.intro) && <p className="mt-4 leading-7 text-[#59615C]">{data.blog.intro}</p>}
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-md border border-[#DFE4DE] bg-white">
                  {hasText(post.image) && (
                    <Image
                      src={post.image}
                      alt={hasText(post.image_alt) ? post.image_alt : ''}
                      width={800}
                      height={450}
                      unoptimized
                      className="aspect-[16/9] w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-wide text-[#59615C]">
                      {hasText(post.category) && <span>{post.category}</span>}
                      {hasText(post.published_at) && <time dateTime={post.published_at}>{post.published_at}</time>}
                    </div>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    {hasText(post.excerpt) && <p className="mt-3 text-sm leading-6 text-[#59615C]">{post.excerpt}</p>}
                    {hasText(post.url) && (
                      <a href={post.url} className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">
                        Read article
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            hasText(data.blog.empty_message) && (
              <p className="border-y border-[#DFE4DE] py-6 text-sm text-[#59615C]">{data.blog.empty_message}</p>
            )
          )}
        </div>
      </section>

      {services.length > 0 && (
        <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {hasText(data.services.heading) ? data.services.heading : 'Services'}
          </h2>
          <ul className="mt-8 divide-y divide-[#DFE4DE] border-y border-[#DFE4DE]">
            {services.map((service, index) => (
              <li key={`${service?.title ?? 'service'}-${index}`} className="grid gap-2 py-5 sm:grid-cols-[minmax(180px,0.7fr)_1.3fr] sm:gap-8">
                {hasText(service?.title) && <h3 className="font-semibold">{service.title}</h3>}
                {hasText(service?.description) && <p className="text-sm leading-6 text-[#59615C]">{service.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {aboutHasContent && (
        <section id="about" className="border-t border-[#DFE4DE] bg-[#E9EDE7] px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            {hasText(data.about.image) && (
                <Image
                  src={data.about.image}
                  alt={hasText(data.about.image_alt) ? data.about.image_alt : ''}
                  width={250}
                  height={200}
                  unoptimized
                  className=" rounded-md object-cover"
                />
            )}
               <div>
                  <h2 className="mt-8 text-3xl font-semibold sm:text-4xl">
                  {hasText(data.about.heading) ? data.about.heading : 'About'}
                  </h2>
                  {hasText(data.about.body) && <p className="max-w-2xl whitespace-pre-line text-lg leading-8 text-[#39413B]">{data.about.body}</p>}
               </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          {hasText(data.testimonials.heading) && <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">{data.testimonials.heading}</h2>}
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <figure key={`${item?.author_name ?? 'testimonial'}-${index}`} className="border-l-2 border-[#B8F36B] pl-6">
                <blockquote className="text-lg leading-8">“{item?.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-[#59615C]">
                  <span className="font-semibold text-[#101311]">{item?.author_name}</span>
                  {hasText(item?.author_title) && <span> · {item.author_title}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {hasContact && (
        <section id="contact" className="bg-[#101311] px-6 py-20 text-[#F6F7F4] md:py-24">
          <div className="mx-auto max-w-6xl">
            {hasText(data.contact.heading) && <h2 className="max-w-3xl text-3xl font-semibold sm:text-5xl">{data.contact.heading}</h2>}
            {hasText(data.contact.intro) && <p className="mt-5 max-w-2xl text-base leading-7 text-[#C2CAC3]">{data.contact.intro}</p>}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {hasText(data.contact.email) && (
                <a href={`mailto:${data.contact.email}`} className="font-semibold underline underline-offset-4">{data.contact.email}</a>
              )}
              {contactLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasText(copyrightName) && (
        <footer className="border-t border-[#DFE4DE] px-6 py-6 text-sm text-[#59615C]">
          <div className="mx-auto max-w-6xl">© {new Date().getFullYear()} {copyrightName}</div>
        </footer>
      )}
    </main>
  );
}