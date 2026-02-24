import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Mochi } from "@/types/database";
import MochiDetail from "@/components/mochi/mochi-detail";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getMochi(slug: string): Promise<Mochi | null> {
  const { data } = await supabase
    .from("mochis")
    .select("*")
    .eq("slug", slug)
    .single();
  return data as Mochi | null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mochi = await getMochi(slug);

  if (!mochi) {
    return { title: "Mochi Not Found | Mochi" };
  }

  return {
    title: `${mochi.title} | Mochi`,
    description: mochi.tagline,
    openGraph: {
      title: `${mochi.title} | Mochi`,
      description: mochi.tagline,
      type: "article",
    },
  };
}

export default async function MochiPage({ params }: Props) {
  const { slug } = await params;
  const mochi = await getMochi(slug);

  if (!mochi) {
    notFound();
  }

  return <MochiDetail mochi={mochi} />;
}
