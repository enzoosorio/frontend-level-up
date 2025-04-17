import { InfiniteNavbarr } from "@/src/components/reusable/Hero/InfiniteNavbar";
import { NavbarWithVideo } from "@/src/components/Hero/NavbarWithVideo";
import { Categories } from "@/src/components/Hero/Categories";
import { FeaturedCollections } from "@/src/components/Hero/FeaturedCollections";
import { MessageToPublic } from "@/src/components/Hero/MessageToPublic";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-color overflow-x-hidden">
    <InfiniteNavbarr/>
    <NavbarWithVideo/>
    <Categories/>
    <FeaturedCollections/>
    <MessageToPublic/>
    </main>
  );
}
