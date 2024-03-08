import projects from "../../../public/projects.json";
import blogs from "../../../public/blogs.json";
import Link from "next/link";
import React from "react";

export default function Showcase(){

    return(
        <div className="showcase w-2/4 pt-5 m-auto pb-3">
            <p className="showcase-p m-5 text-[20px] font-black pl-1">Projects</p>
            {projects.map((project,index)=>(
                <div key={index} className="m-6">
                    <Link href={project.link}>
                        <p className="hover:text-[#E41415] font-thin text-[19.5px] m-0">{project.name}</p>
                    </Link>
                    <p className="text-[#64748B] text-[14px]">
                        {project.description}{project.deployed!="" && <Link className="hover:text-blue-100" href={project.deployed}>[Depolyed Website Link]</Link>}
                    </p>
                </div>
            ))}
            <br/>
            <p className="showcase-p m-5 text-[20px] font-black">Blogs</p>
            {blogs.map((blog,index)=>(
                <div key={index} className="m-6">
                    <Link href={blog.link}>
                        <p className="hover:text-[#E41415] font-thin text-[19.5px] m-0">{blog.name}</p>
                    </Link>
                    <p className="text-[#64748B] text-[14px]">{blog.date}</p>
                </div>
            ))}
        </div>
    )

}