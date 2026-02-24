import { supabase } from "@/lib/supabase";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { CategoryPills } from "@/components/home/category-pills";
import { FeaturedMochis } from "@/components/home/featured-mochis";
import { FlavorGrid } from "@/components/home/flavor-grid";

export default async function Home() {
  const [hotRes, specialsRes, freshRes] = await Promise.all([
    supabase
      .from("mochis")
      .select("*")
      .order("feed_count", { ascending: false })
      .limit(6),
    supabase
      .from("mochis")
      .select("*")
      .eq("is_house_special", true)
      .order("feed_count", { ascending: false })
      .limit(6),
    supabase
      .from("mochis")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  return (
    <>
      <Hero />
      <HowItWorks />
      <CategoryPills />
      <FeaturedMochis
        hottest={hotRes.data ?? []}
        houseSpecials={specialsRes.data ?? []}
        fresh={freshRes.data ?? []}
      />
      <FlavorGrid />
    </>
  );
}
