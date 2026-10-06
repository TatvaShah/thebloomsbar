import Link from "next/link";
import { brand } from "@/content/brand";
import { CopyDm } from "@/components/chrome";

export default function HomePage() {
  const hero = brand.gallery[0];

  return (
    <>
      <section className="mx-auto grid min-h-[var(--hero-min)] max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
        <div>
          <p className="kicker">{brand.eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-[0.95] md:text-7xl">{brand.headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{brand.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CopyDm />
            <Link href="/gallery" className="btn btn-line">
              See the bouquets
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            Orders only through Instagram.{" "}
            <Link href="/build" className="underline">
              Or build a note first.
            </Link>
          </p>
        </div>
        <figure className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
          <img src={hero.image} alt={hero.title} className="photo absolute inset-0" />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-full bg-bg/80 px-4 py-2 text-xs backdrop-blur">
            {hero.note}
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {brand.stats.map((stat) => (
            <div key={stat.label} className="border-line px-4 py-8 md:border-l md:px-6 first:border-l-0">
              <p className="serif text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="kicker">The work</p>
        <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Styles people ask for</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {brand.gallery.map((item) => (
            <a key={item.title} href={item.href ?? "/gallery"} className="panel overflow-hidden">
              <img src={item.image} alt="" className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="band bg-bg-2">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl">Occasions</h2>
            <Link href="/occasions" className="nav-link">
              All occasions
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {brand.occasions.map((item) => (
              <article key={item.name} className="panel overflow-hidden">
                <img src={item.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-2xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-4xl">How ordering works</h2>
        <p className="mt-3 max-w-2xl text-muted">There is no checkout on this site. Every order is a conversation on Instagram.</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Find a bouquet", "Browse the gallery, or screenshot one you already love from the feed."],
            ["02", `DM ${brand.handle}`, "Orders happen only in Instagram messages. A starter note is copied for you."],
            ["03", "Share the details", "Occasion, colours, the date, and whether you want pickup or delivery."],
            ["04", "Confirm in the chat", brand.policies[0]],
          ].map(([n, t, d]) => (
            <li key={n} className="panel p-5">
              <p className="kicker">{n}</p>
              <h3 className="mt-3 text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <CopyDm label="DM to order" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[1fr_1.1fr] md:px-6">
        <div>
          <p className="kicker">Paper</p>
          <h2 className="mt-3 text-4xl">Wraps they actually use</h2>
          <ul className="mt-6 space-y-4">
            {brand.wraps.map((wrap) => (
              <li key={wrap.id} className="border-b border-line pb-4">
                <p className="text-lg">{wrap.name}</p>
                <p className="text-sm text-muted">{wrap.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
        <img src={brand.gallery[1]?.image ?? hero.image} alt="" className="h-[460px] w-full rounded-[2rem] object-cover" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-4xl">Before you message</h2>
        <div className="mt-6 grid gap-3">
          {brand.faqs.slice(0, 4).map((faq) => (
            <details key={faq.q} className="panel p-5">
              <summary className="cursor-pointer text-lg">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
        <Link href="/faq" className="mt-6 inline-block nav-link">
          Read the full FAQ
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="panel grid gap-6 p-8 md:grid-cols-[1.4fr_0.6fr] md:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl">{brand.quote.text}</h2>
            <p className="mt-4 text-sm text-muted">{brand.quote.by}</p>
          </div>
          <CopyDm />
        </div>
      </section>
    </>
  );
}
