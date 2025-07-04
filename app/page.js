import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Navigation />
      <Header />
    </main>
  );
}
