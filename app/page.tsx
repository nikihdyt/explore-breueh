import Beach from "@/components/Beach";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Culinary from "@/components/Culinary";
import Culture from "@/components/Culture/inde";
import Ebook from "@/components/Ebook";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Beach />
      <Culinary/>
      <Culture />
      <Video />
      <Blog />
      <Ebook />
    </>
  );
}
