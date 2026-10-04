import type { Brand } from "@/content/types";

export function starterMessage(brand: Brand) {
  return `Hi ${brand.handle} — I would like to order a bouquet.\n\nOccasion:\nDate needed:\nColours:\nPickup or delivery:\nAnything else:`;
}

export function customMessage(
  brand: Brand,
  input: {
    style: string;
    wrap: string;
    detail: string;
    fulfillment: string;
    date: string;
    name: string;
    note: string;
    language?: string;
  },
) {
  const spanish = input.language === "es";
  if (spanish) {
    return [
      `Hola ${brand.handle} — me gustaría ordenar un ramo.`,
      ``,
      `Estilo: ${input.style}`,
      `Envoltura: ${input.wrap}`,
      `Ocasión: ${input.detail}`,
      `Fecha: ${input.date || "por confirmar"}`,
      `Entrega: ${input.fulfillment}`,
      `Nombre: ${input.name || "por confirmar"}`,
      input.note ? `Nota: ${input.note}` : `Nota:`,
      ``,
      `Sé que el pedido se confirma por mensaje. No hay pago en el sitio.`,
    ].join("\n");
  }

  return [
    `Hi ${brand.handle} — I would like to order a bouquet.`,
    ``,
    `Style: ${input.style}`,
    `Wrap: ${input.wrap}`,
    `Occasion: ${input.detail}`,
    `Date: ${input.date || "to confirm"}`,
    `Fulfillment: ${input.fulfillment}`,
    `Name: ${input.name || "to confirm"}`,
    input.note ? `Note: ${input.note}` : `Note:`,
    ``,
    `I know the order is confirmed in this chat. Nothing is charged on the website.`,
  ].join("\n");
}

export function instagramDmUrl(handle: string) {
  const username = handle.replace("@", "");
  return `https://ig.me/m/${username}`;
}
