import { ImageResponse } from "next/og";
import { supabase } from "@/lib/supabase";
import type { Mochi } from "@/types/database";

export const runtime = "edge";
export const alt = "Mochi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await supabase
    .from("mochis")
    .select("*")
    .eq("slug", slug)
    .single();

  const mochi = data as Mochi | null;

  if (!mochi) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #FFF0F5, #FFFFFF)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            fontWeight: 800,
          }}
        >
          &#x1F361; mochi.market
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #FFF0F5, #FFFFFF)",
          padding: "60px 80px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#C93D6A",
              marginBottom: 16,
            }}
          >
            &#x1F361; mochi.market
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#1D1D1F",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {mochi.title}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#58585D",
              lineHeight: 1.4,
            }}
          >
            {mochi.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "#86868B",
          }}
        >
          <span>
            {mochi.flavor_emoji} {mochi.flavor}
          </span>
          <span>&bull;</span>
          <span>&#x1F361; {mochi.feed_count} fed</span>
          {mochi.is_house_special && (
            <>
              <span>&bull;</span>
              <span>&#9733; Chef&apos;s Pick</span>
            </>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
