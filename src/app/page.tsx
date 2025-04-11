import Image from "next/image";
import { InfiniteNavbar } from "@/src/components/InfiniteNavbar";
import { NavbarWithVideo } from "@/src/components/Hero/NavbarWithVideo";
import { Categories } from "@/src/components/Hero/Categories";
import { FeaturedCollections } from "@/src/components/Hero/FeaturedCollections";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-color overflow-x-hidden">
    <InfiniteNavbar/>
    <NavbarWithVideo/>
    <Categories/>
    <FeaturedCollections/>
    </main>
  );
}
