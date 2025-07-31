import HeroComponent from "@/components/HeroComponent";
import TabNewsComponent from "@/components/TabNewsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNK - News",
  description:
    "Stay updated with the latest news and announcements from PT. Multi Nitrotama Kimia (MNK). Discover our recent activities, product launches, and industry insights.",
};

export default function News() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <section
        id="news"
        className="container py-7 px-4 sm:px-7 lg:px-10 flex flex-col w-full gap-10 lg:gap-32 mt-10"
      >
        <TabNewsComponent />
      </section>
    </main>
  );
}
