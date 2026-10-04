import type { Metadata } from "next";
import { brand } from "@/content/brand";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-6">
      <div>
        <p className="kicker">About</p>
        <h1 className="mt-3 text-5xl">{brand.name}</h1>
        <div className="mt-6 space-y-4 text-lg leading-8">
          {brand.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-3 text-sm text-muted">
          {brand.policies.map((policy) => (
            <li key={policy}>{policy}</li>
          ))}
        </ul>
      </div>
      <img
        src={brand.gallery[2]?.image ?? brand.gallery[0].image}
        alt=""
        className="h-[520px] w-full rounded-[2rem] object-cover"
      />
    </div>
  );
}
