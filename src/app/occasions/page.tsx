import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/content/brand";

export const metadata: Metadata = { title: "Occasions" };

export default function OccasionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="kicker">Occasions</p>
      <h1 className="mt-3 text-5xl">What the bouquet is for</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {brand.occasions.map((item) => (
          <article key={item.name} className="panel overflow-hidden">
            <img src={item.image} alt="" className="h-52 w-full object-cover" />
            <div className="p-5">
              <h2 className="text-3xl">{item.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
      <Link href="/build" className="btn btn-solid mt-10">
        Build a note for this
      </Link>
    </div>
  );
}
