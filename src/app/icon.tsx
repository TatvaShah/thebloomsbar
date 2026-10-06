import { ImageResponse } from "next/og";
import { brand } from "@/content/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const letter = brand.name.replace(/[^A-Za-z]/g, "").slice(0, 1);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.variant === "ribbon" ? "#140c0e" : "#f6f3ee",
          color: brand.variant === "ribbon" ? "#e7c27a" : "#1b1916",
          fontSize: 36,
          fontFamily: "Georgia",
        }}
      >
        {letter}
      </div>
    ),
    size,
  );
}
