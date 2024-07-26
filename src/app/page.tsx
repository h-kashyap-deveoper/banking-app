import HeroBannerWithLoginSignup from "@/components/custom/HeroBannerWithLoginSignup/HeroBannerWithLoginSignup";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroBannerWithLoginSignup/>
    </main>
  );
}
