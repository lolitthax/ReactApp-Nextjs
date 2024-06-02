import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionHero } from "@/components/SectionHero";
import { SectionService } from "@/components/SectionService";

export default function Home() {
  return (
    <>

      <Header />

      <SectionHero />

      <SectionService />
    </>
  );
}
