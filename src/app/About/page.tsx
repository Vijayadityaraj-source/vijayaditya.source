import { Separator } from "@/components/ui/separator";
import Image from 'next/image'

export default function About(){
    return(
        <div className="about flex justify-center items-center text-[17px] ">
            <div className="about flex flex-col items-center justify-center w-1/2">
                <h2 className="abouth2 pt-20 text-[20px]">HI 👋 MY NAME IS VIJAYADITYA</h2><br/>
                <p>I'm a passionate, creative and perceptive engineer with a hands-on approach to problem-solving and an unending thirst for knowledge. Anything and everything that can be classified as technology fascinates me. <br/><br/> Currently in my final year of undergrad at NITW pursuing Computer Science Engineering. I am Passionate about Web Development and Machine Learning.</p>
                <br/>
                <div>
                <p>🌍 I'm based in India</p>
                <p>🧠 I'm learning React, Next.js and Tensorflow</p>
                <p>💼 Any freelance work? do reach, email :)</p>
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
                    <h2 className="text-[18px] font-medium leading-none pt-5 ">Favorite Tech</h2>
                    <p className="text-[18px] text-muted-foreground">
                        Tools, languages that I like to work with.
                    </p>
                    <br/>
                    </div>
                    <div className="flex h-12 items-center space-x-4 text-sm flex-wrap">
                        <img className="ml-[13px] mb-[13px]" width="48" height="48" src="https://img.icons8.com/fluency/48/c-programming.png" alt="c-programming"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/ios/50/css-filetype.png" alt="css-filetype"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/pulsar-color/48/javascript.png" alt="javascript"/>
                        <img className="mb-[13px]" width="36" height="36" src="https://img.icons8.com/officel/80/react.png" alt="react"/>
                        <Image
                            className="mb-[13px]"
                            src="/nextjslogo.png"
                            width={48}
                            height={48}
                            alt="next js"
                        />
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/tensorflow.png" alt="tensorflow"/>
                        <img className="mb-[13px]" width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                    </div>
                </div>
        </div>
    )
}