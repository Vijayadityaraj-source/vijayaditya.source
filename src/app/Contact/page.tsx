import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact(){
    return(
        <>
        <div className="h-[70vh] flex justify-center items-center text-[17px] flex-wrap">
            <div className="about flex flex-col items-center justify-center w-1/2">
                <h1 className="pt-20">📨 Mail @<Link href="mailto:vijayaditya.eng@gmail.com" className="underline text-[#3081f7]">vijayaditya.eng@gmail.com</Link></h1>
                <p>📬 or just drop a msg here. </p><br/>
                {/* <Separator className="my-4"/> */}
                <form action="https://formsubmit.co/vijayaditya.eng@gmail.com" method="POST" className="w-full">
                    <label>Email</label><br/>
                    <Input name="Email" type="email" placeholder="yourmail@gmail.com" className="bg-transparent border-[#3081f7] text-[17px]" required/><br/>
                    <label>Message</label><br/>
                    <Textarea name="Msg" placeholder="Type your message here." cols={50} className="bg-transparent border-[#3081f7] text-[17px] h-full" required/><br/>
                    <Button className="hover:bg-grey bg-[#3081f7] text-white text-[17px]" type="submit">Submit</Button>
                </form>
                {/* <Separator className="my-4"/> */}
                <footer className="fixed w-100 bottom-5">
                    <div className="flex items-center justify-center">
                        <Link href="https://www.linkedin.com/in/vijayaditya-raj-rapaka-5b2659237/"><LinkedInIcon fontSize="large" className="mt-1"/></Link>
                        <Link href="https://github.com/Vijayadityaraj-source/"><GitHubIcon fontSize="large" className="mt-1 ml-5"/></Link>
                        {/* <Link href="https://twitter.com/V_A_R_Rap"><img className="ml-3" width="36" height="36" src="https://img.icons8.com/sf-regular-filled/48/medium-logo.png" alt="medium-logo"/></Link> */}
                        <Link href="https://twitter.com/V_A_R_Rap"><XIcon fontSize="large" className="ml-5 mt-1"/></Link>
                        <Link href="https://www.instagram.com/_vijayadityar_/"><InstagramIcon fontSize="large" className="ml-5 mt-1"/></Link>
                    </div>
                    <p className="text-center m-5">COPYRIGHT2024</p>
                </footer>
            </div>
        </div>
        </>
    )
}