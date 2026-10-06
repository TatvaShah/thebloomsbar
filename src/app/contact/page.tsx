import type { Metadata } from "next";
import { brand } from "@/content/brand";
import { CopyDm } from "@/components/chrome";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
      <div>
        <p className="kicker">Contact</p>
        <h1 className="mt-3 text-5xl">Message {brand.handle}</h1>
        <p className="mt-4 text-muted">{brand.orderNote}</p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="kicker">Instagram</dt>
            <dd className="mt-1">
              <a href={brand.instagram}>{brand.instagram}</a>
            </dd>
          </div>
          <div>
            <dt className="kicker">Based in</dt>
            <dd className="mt-1">
              {brand.location}, {brand.region}
            </dd>
          </div>
        </dl>
        <div className="mt-8">
          <CopyDm label="Copy a starter note" />
        </div>
      </div>
      <div className="panel p-6">
        <h2 className="text-3xl">What to include</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
          <li>The occasion and the date you need it.</li>
          <li>Colours, or a screenshot from the feed.</li>
          <li>Pickup or delivery, and the area.</li>
          <li>Banner wording, a card line, or a plush if that is part of the design.</li>
        </ul>
      </div>
    </div>
  );
}
