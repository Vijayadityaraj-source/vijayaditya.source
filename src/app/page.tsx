import { turrent_road } from "./fonts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="home flex h-[80vh] flex-col items-center justify-center">
        <p className={`${turrent_road.className} pb-14`}>vijayaditya.source</p>
        <Button className="home-button font-mono text-base md:text-2xl">
          <Link href="https://docs.google.com/document/d/1NNR0Hh6zE3Q5nH_EUO5fpU7D9UFvGGrdFIoksZ7jsT0/edit">
            Resume
          </Link>
        </Button>
        {/* <p className="pt-5 text-center font-mono text-lg text-white">
          COPYRIGHT2024
        </p> */}
      </div>
      <div className="relative ">
        <div className="absolute inset-x-0 pb-5 text-center">COPYRIGHT2024</div>
      </div>
    </>
  );
}
