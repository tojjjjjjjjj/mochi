import { supabase } from "@/lib/supabase";
import { Hero } from "@/components/home/hero";
import { FlavorGrid } from "@/components/home/flavor-grid";
import { FeaturedMochis } from "@/components/home/featured-mochis";

export default async function Home() {
  const { data: mochis } = await supabase
    .from("mochis")
    .select("*")
    .eq("is_house_special", true)
    .order("feed_count", { ascending: false })
    .limit(6);

  return (
    <>
      <Hero />
      <FeaturedMochis mochis={mochis ?? []} />
      <FlavorGrid />
    </>
  );
}
