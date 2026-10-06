"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/content/brand";
import { instagramDmUrl, starterMessage } from "@/lib/dm";

const links = [
  { href: "/gallery", label: "Bouquets" },
  { href: "/occasions", label: "Occasions" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function CopyDm({
  label = "DM to order",
  className = "btn btn-solid",
  message,
}: {
  label?: string;
  className?: string;
  message?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    const text = message ?? starterMessage(brand);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
    window.open(instagramDmUrl(brand.handle), "_blank", "noopener,noreferrer");
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {copied ? "Note copied" : label}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="serif text-lg tracking-tight">
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/build" className="btn btn-line hidden sm:inline-flex">
            Build
          </Link>
          <CopyDm className="btn btn-solid" />
          <button
            type="button"
            className="btn btn-line md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="flex flex-col gap-3 border-t border-line px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/build" className="nav-link" onClick={() => setOpen(false)}>
            Build a bouquet
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <p className="kicker">Florist</p>
          <p className="serif mt-3 text-3xl">{brand.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{brand.orderNote}</p>
        </div>
        <div>
          <p className="kicker">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            {[{ href: "/", label: "Home" }, ...links, { href: "/build", label: "Build your bouquet" }].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <p className="kicker">Instagram</p>
          <a className="mt-3 block text-sm" href={brand.instagram}>
            {brand.handle}
          </a>
          <p className="mt-4 text-sm text-muted">
            {brand.location}
            <br />
            {brand.region}
          </p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-xs text-muted md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:justify-between">
          <span>{brand.photoCredit}</span>
          <span>Orders only by Instagram DM.</span>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-bg/95 p-3 backdrop-blur md:hidden">
        <Link href="/build" className="btn btn-line flex-1">
          Build
        </Link>
        <CopyDm className="btn btn-solid flex-1" />
      </div>
    </footer>
  );
}
