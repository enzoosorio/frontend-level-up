import { NavbarWithVideo } from "@/src/components/Hero/headerPart/NavbarWithVideo";
import { Categories } from "@/src/components/Hero/Categories";
import { FeaturedCollections } from "@/src/components/Hero/FeaturedCollections";
import { MessageToPublic } from "@/src/components/Hero/MessageToPublic";
import { MoreCategories } from "@/src/components/Hero/moreCategories/MoreCategories";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-color overflow-x-hidden">
    <NavbarWithVideo/>
    <Categories/>
    <FeaturedCollections/>
    <MoreCategories/>
    <MessageToPublic/>
    </main>
  );
}
