import {projects} from "../../../public/projects.json";
import {blogs} from "../../../public/blogs.json";
import Link from "next/link";

export default function Showcase(){

    return(
        <div className="showcase w-2/4 pt-5 m-auto">
            <p className="showcase-p m-5 text-[20px] font-black">Projects</p>
            {projects.map((project)=>(
                <div className="m-6">
                    <Link href={project.link}>
                        <p className="hover:text-[#E41415] font-thin text-[19.5px] m-0">{project.name}</p>
                    </Link>
                    <p className="text-[#64748B] text-[14px]">
                        {project.description}{project.deployed!="" && <Link className="hover:text-blue-100" href={project.deployed}>[LINK]</Link>}
                    </p>
                </div>
            ))}
            <br/>
            <p className="showcase-p m-5 text-[20px] font-black">Blogs</p>
            {blogs.map((blog)=>(<Link href={blog.link}>
                <div className="m-6">
                    <p className="hover:text-[#E41415] font-thin text-[19.5px] m-0">{blog.name}</p>
                    <p className="text-[#64748B] text-[14px]">{blog.date}</p>
                </div>
            </Link>))}
        </div>
    )

}