import { Navbar } from "@/src/components/Hero/Navbar";
import { InfiniteNavbarr } from "@/src/components/reusable/Hero/InfiniteNavbar";
import { FollowThisSteps } from "@/src/components/Sell/FollowThisSteps";
import { ImageSection } from "@/src/components/Sell/ImageSection";
import { TipsForSeller } from "@/src/components/Sell/TipsForSeller";
import { LastCTAToSell } from "@/src/components/Sell/LastCTAToSell";
export default function SellPage() {
  return (
    <main className="min-h-screen bg-bg-color overflow-x-hidden">
      <Navbar className=" py-2" />
      <ImageSection/>
      <FollowThisSteps/>
      <TipsForSeller/>
      <LastCTAToSell/>
    </main>
  );
}

