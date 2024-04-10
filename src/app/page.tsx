import { turrent_road } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home flex h-[80vh] flex-col items-center justify-center">
        <p className={`home-heading text-[#e41415] ${turrent_road.className} pb-14`}>vijayaditya.source</p>
        {/* <Button className="home-button font-mono text-base md:text-2xl hover:scale-110 transition-all"> */}
          <Link className="resume font-mono text-4xl -rotate-2 hover:rotate-0 transition-all duration-75" href="https://docs.google.com/document/d/1NNR0Hh6zE3Q5nH_EUO5fpU7D9UFvGGrdFIoksZ7jsT0/edit">
            <div>
              <span>🔗Resume</span>
              <div className="w-full h-2 bg-green-500 rounded-full hover:text-green-500"></div>
              <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2"></div>
            </div>
          </Link>
        {/* </Button> */}
        {/* <p className="pt-5 text-center font-mono text-lg text-white">
          COPYRIGHT2024
        </p> */}
      </div>
      <div className="relative ">
        <div className="copyright text-xl absolute inset-x-0 pb-5 text-center">COPYRIGHT2024</div>
      </div>
    </>
  );
}
