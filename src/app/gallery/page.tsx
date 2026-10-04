import type { Metadata } from "next";
import { brand } from "@/content/brand";
import { CopyDm } from "@/components/chrome";

export const metadata: Metadata = { title: "Bouquets" };

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="kicker">Bouquets</p>
      <h1 className="mt-3 max-w-3xl text-5xl">The arrangements, in plain language</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Photographs here set the mood. The finished work is on Instagram, and several cards open the real post.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {brand.gallery.map((item) => (
          <article key={item.title} className="panel overflow-hidden">
            <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
            <div className="flex flex-col gap-3 p-5">
              <h2 className="text-3xl">{item.title}</h2>
              <p className="text-sm leading-6 text-muted">{item.note}</p>
              {item.href ? (
                <a href={item.href} className="nav-link">
                  Open on Instagram
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <CopyDm />
      </div>
    </div>
  );
}
