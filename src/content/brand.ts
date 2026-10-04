import type { Brand } from "./types";

export const brand: Brand = {
  slug: "thebloomsbar",
  name: "The Blooms Bar",
  handle: "@_thebloomsbar_",
  instagram: "https://www.instagram.com/_thebloomsbar_/",
  location: "Kerman",
  region: "California",
  country: "US",
  variant: "ribbon",
  eyebrow: "Kerman · Central Valley",
  headline: "Luxury bouquets, wrapped like a ribbon.",
  subhead:
    "The Blooms Bar is a Kerman florist for rose counts, mixed bouquets, proposals, and brides. Delivery is available. Orders are in English or Spanish, and the studio is closed on Sundays.",
  orderNote:
    "Luxury flower bouquets in Kerman, California. Delivery available. Español e inglés. Closed Sundays. Orders only by Instagram DM.",
  stats: [
    { value: "1.1K", label: "Instagram followers" },
    { value: "256", label: "posts on the feed" },
    { value: "EN / ES", label: "order in either language" },
    { value: "Sun", label: "the studio is closed" },
  ],
  styles: [
    { id: "roses", name: "Rose count", blurb: "A clean count of roses, including the large 100-rose bouquets." },
    { id: "mix", name: "Mixed bouquet", blurb: "Roses with lisianthus, carnations, peonies, and baby’s breath." },
    { id: "purple", name: "Purple mix", blurb: "The purple mixed bouquet that shows up in the reels." },
    { id: "basket", name: "Anniversary basket", blurb: "A hamper or basket, not only a handheld bouquet." },
    { id: "proposal", name: "Proposal", blurb: "A bouquet planned around the question." },
    { id: "bridal", name: "Bridal", blurb: "Bride bouquets and the pieces that go with them." },
    { id: "describe", name: "I will describe it", blurb: "Bring a screenshot from the feed and say what to change." },
  ],
  wraps: [
    { id: "blush", name: "Blush", blurb: "Soft pink paper and a satin ribbon." },
    { id: "black", name: "Black", blurb: "Dark paper when the flowers need contrast." },
    { id: "cream", name: "Cream", blurb: "Quiet paper for whites and pastels." },
    { id: "kraft", name: "Kraft", blurb: "Brown paper, simpler and warmer." },
  ],
  details: [
    { id: "birthday", name: "Birthday", blurb: "A bouquet or basket for the day." },
    { id: "anniversary", name: "Anniversary", blurb: "Including the anniversary baskets on the feed." },
    { id: "proposal", name: "Proposal", blurb: "Tell them the plan in the DM." },
    { id: "wedding", name: "Wedding party", blurb: "Bridal work. Ask about timing early." },
    { id: "just", name: "Just because", blurb: "No occasion required." },
  ],
  fulfillments: [
    { id: "pickup", name: "Pickup in Kerman", blurb: "Ask for the pickup window in the chat." },
    { id: "delivery", name: "Delivery", blurb: "Delivery is offered. Share the city in the DM." },
  ],
  gallery: [
    {
      title: "Rose counts",
      note: "Large rose bouquets, including 100 roses. Mood photo, not a client arrangement.",
      image: "/media/roses.jpg",
      href: "https://www.instagram.com/p/DScDJrOlTZ4/",
    },
    {
      title: "Purple and mixed blooms",
      note: "Mixed colour bouquets for the 559. See the reel for the real wrap.",
      image: "/media/pink.jpg",
      href: "https://www.instagram.com/reel/Da0yLnHPNa0/",
    },
    {
      title: "Anniversary baskets",
      note: "Baskets and hampers, not only handheld bouquets.",
      image: "/media/blush.jpg",
      href: "https://www.instagram.com/_thebloomsbar_/reel/Dc_Z8y2qVNJ/",
    },
    {
      title: "For the car, for her",
      note: "Bouquets photographed in the car and with the night-out arrangements.",
      image: "/media/wrap.jpg",
      href: "https://www.instagram.com/_thebloomsbar_/reel/DdmWfKPvSQY/",
    },
  ],
  occasions: [
    {
      name: "Anniversary",
      note: "Baskets and rose counts for the date.",
      image: "/media/peony.jpg",
    },
    {
      name: "Proposals",
      note: "The proposals highlight on the profile is there for a reason. Share the timing.",
      image: "/media/white.jpg",
    },
    {
      name: "Brides",
      note: "Bridal bouquets. Closed Sundays, so plan the pickup day.",
      image: "/media/wedding.jpg",
    },
  ],
  faqs: [
    {
      q: "How do I order?",
      a: "Message @_thebloomsbar_ on Instagram. Build a note on this site if you want the details copied for you first.",
    },
    {
      q: "Do you deliver?",
      a: "Yes. The bio says delivery is available. Pickup is in Kerman. Share the address area in the DM so they can confirm.",
    },
    {
      q: "Can I order in Spanish?",
      a: "Yes. The account is Español / English. The builder can copy the note in Spanish.",
    },
    {
      q: "Are you open Sunday?",
      a: "No. The studio is closed on Sundays.",
    },
    {
      q: "Do you ship?",
      a: "Nothing on the account offers shipping. This is local pickup and delivery.",
    },
  ],
  about: [
    "The Blooms Bar is the Kerman florist behind @_thebloomsbar_: luxury flower bouquets, rose counts, mixed colour, anniversary baskets, proposals, and bridal work.",
    "The feed is bilingual, and the ordering path is a direct message. This website does not take payment and does not list prices.",
    "Highlights on the profile cover client photos, policies, how to order, flower care, brides, and proposals. Ask there, or in the DM, before you assume a date is free.",
  ],
  policies: [
    "Closed on Sundays.",
    "Delivery is available. Confirm the area in the chat.",
    "No checkout and no published prices on this site.",
  ],
  quote: {
    text: "For the queen, and for the Tuesday that is not a holiday.",
    by: "Kerman florist · DM @_thebloomsbar_",
  },
  photoCredit:
    "Mood photographs are stock florals. Finished bouquets are on the public Instagram account.",
};
