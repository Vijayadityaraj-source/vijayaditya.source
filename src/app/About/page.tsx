import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function About() {
  return (
    <div className="about flex items-center justify-center text-[17px] ">
      <div className="about flex w-1/2 flex-col items-center justify-center">
        <h2 className="abouth2 pt-20 text-[20px]">
          HI 👋 MY NAME IS VIJAYADITYA
        </h2>
        <br />
        <p>
          I&#39;m a passionate, creative and perceptive engineer with a hands-on
          approach to problem-solving and an unending thirst for knowledge.
          Anything and everything that can be classified as technology
          fascinates me. <br />
          <br /> Currently in my final year of undergrad at NITW pursuing
          Computer Science Engineering. I am Passionate about Web Development
          and Machine Learning.
        </p>
        <br />
        <div>
          <p>🌍 I&#39;m based in India</p>
          <p>🧠 I&#39;m learning React, Next.js and Tensorflow</p>
          <p>💼 Any freelance work? do reach, email :D</p>
          <p>💬 Ask me about anything, i am happy to help</p>
          <p>🌸 Plan: Learning</p>
        </div>
        <Separator className="my-4" />
        {/* <h2 className="text-[18px]">COURSEWORK</h2><br/>
                <ul style={{listStyleType:"square"}}>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management System</li>
                    <li>Object Oriented Programming</li>
                    <li>Operating Systems</li>
                    <li>Data Warehousing and Data Mining</li>
                    <li>Software Engineering</li>
                    <li>Computer Networks</li>
                    <li>Parallel Processing</li>
                </ul>
                <Separator className="my-4" /> */}
        <div className="space-y-1 break-words">
          <h2 className="pt-5 pb-5 text-[18px] font-medium leading-none underline underline-offset-8 decoration-green-500 -rotate-2">
            Favorite Tech
          </h2>
          <p className="text-muted-foreground text-[18px]">
            Tools, languages that I like to work with.
          </p>
          <br />
        </div>
        <div className="flex h-12 flex-wrap items-center space-x-4 text-sm">
          <Image
            className="mb-[13px] ml-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/c-programming.png"
            alt="c-programming"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/c-plus-plus-logo.png"
            alt="c-plus-plus-logo"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/python--v1.png"
            alt="python--v1"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/java-coffee-cup-logo.png"
            alt="java-coffee-cup-logo"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/html-5--v1.png"
            alt="html-5--v1"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/ios/50/css-filetype.png"
            alt="css-filetype"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/tailwind_css.png"
            alt="tailwind_css"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/pulsar-color/48/javascript.png"
            alt="javascript"
          />
          <Image
            className="mb-[13px]"
            width="36"
            height="36"
            src="https://img.icons8.com/officel/80/react.png"
            alt="react"
          />
          <Image
            className="mb-[13px]"
            src="/nextjslogo.png"
            width={48}
            height={48}
            alt="next js"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/ios/50/express-js.png"
            alt="express-js"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/firebase.png"
            alt="firebase"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/tensorflow.png"
            alt="tensorflow"
          />
          <Image
            className="mb-[13px]"
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/git.png"
            alt="git"
          />
        </div>
      </div>
    </div>
  );
}
