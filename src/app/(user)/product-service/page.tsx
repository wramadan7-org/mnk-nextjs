import HeroComponent from "@/components/HeroComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNK - Product & Service",
  description:
    "Explore the range of products and services offered by PT. Multi Nitrotama Kimia (MNK), Indonesia’s leading provider of mining explosives and blasting services.",
};

export default function ProductService() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-100 overflow-x-hidden">
      <HeroComponent />

      <h1>Product & Service</h1>
    </main>
  );
}
