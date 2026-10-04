import type { Metadata } from "next";
import { brand } from "@/content/brand";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <p className="kicker">FAQ</p>
      <h1 className="mt-3 text-5xl">Before you message</h1>
      <div className="mt-8 grid gap-3">
        {brand.faqs.map((faq) => (
          <details key={faq.q} className="panel p-5" open>
            <summary className="cursor-pointer text-lg">{faq.q}</summary>
            <p className="mt-3 text-sm leading-6 text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
