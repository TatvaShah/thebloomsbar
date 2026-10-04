import type { Metadata } from "next";
import { brand } from "@/content/brand";
import { Builder } from "@/components/builder";

export const metadata: Metadata = {
  title: "Build your bouquet",
  description: `Compose an Instagram note for ${brand.name}. Nothing is charged on this page.`,
};

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <p className="kicker">Order</p>
      <h1 className="mt-3 text-5xl md:text-6xl">Build your bouquet</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Four quick choices. The last step copies a personal note and opens the {brand.name} Instagram DM. Nothing is
        charged here, and no prices are published.
      </p>
      <div className="mt-10">
        <Builder />
      </div>
    </div>
  );
}
