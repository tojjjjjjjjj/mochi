import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { FLAVORS } from "@/lib/constants";
import FlavorHeader from "@/components/flavor/flavor-header";
import MochiGrid from "@/components/flavor/mochi-grid";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return FLAVORS.map((flavor) => ({
    slug: flavor.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const flavor = FLAVORS.find((f) => f.slug === slug);

  if (!flavor) {
    return { title: "Flavor Not Found | Mochi" };
  }

  return {
    title: `${flavor.name} Mochis | Mochi`,
    description: `${flavor.description} — browse curated AI prompts and skills for ${flavor.name.toLowerCase()}.`,
    openGraph: {
      title: `${flavor.name} Mochis | Mochi`,
      description: `${flavor.description} — browse curated AI prompts and skills for ${flavor.name.toLowerCase()}.`,
      type: "website",
    },
  };
}

export default async function FlavorPage({ params }: Props) {
  const { slug } = await params;
  const flavor = FLAVORS.find((f) => f.slug === slug);

  if (!flavor) {
    notFound();
  }

  const { data: mochis } = await supabase
    .from("mochis")
    .select("*")
    .eq("flavor", slug)
    .order("feed_count", { ascending: false });

  const mochiList = mochis ?? [];

  return (
    <>
      <FlavorHeader slug={slug} mochiCount={mochiList.length} />
      <MochiGrid mochis={mochiList} initialFlavor={slug} />
    </>
  );
}
