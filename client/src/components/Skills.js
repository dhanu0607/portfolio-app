//skill.js
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs} from "react-icons/fa";

export default function Skills() {
    const skills = [
        { name: "HTML",
            level:"Intermediate",
            percent:75,
            icon:<FaHtml5 className="text-orange-500 text-4xl"/>
        },
        { name: "Css",
            level:"Intermediate",
            percent:75,
            icon:<FaCss3Alt className="text-blue-500 text-4xl"/>
        },
        { name: "JavaSCript",
            level:"Intermediate",
            percent:75,
            icon:<FaJs className="text-yellow-500 text-4xl"/>
        },
        { name: "ReactJs",
            level:"Beginner",
            percent:50,
            icon:<FaReact className="text-cyan-500 text-4xl"/>
        },
        { name: "NodeJs",
            level:"Beginner",
            percent:50,
            icon:<FaNodeJs className="text-green-500 text-4xl"/>
        }
    ];

    return(
        <section
        className="min-h-screen
        flex flex-col
        items-center
        justify-center
        px-6 
        py-16
        scroll-mt-36">
            {/**Section heaading */}
            <h2 className="text-4xl
            font-bold
            text-cyan-400
            mb-12">Skills</h2>
            {/**Glowing container */}
            <div className="w-full max-w-5xl border-2 border-cyan-400 rounded-2xl p-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative">
                {/**Subtle glowing border effect */}
                <div className=" absolute inset-0 rounded-2xl border border-cyan-400 blur-md opacity-30"></div>

                {/**skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                    {skills.map((skill,index) => (
                        <div key={index}
                        className="p-6 border border-cyan-500 rounded-xl bg-gray-900/60 backdrop-blur-0
                        hover:scale-105 transition-transform duration-300"
                        >
                        {/**Icon +name */}
                        <div className="flex items-center gap-4 mb-4">
                            {skill.icon}
                            <div>
                                <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                                <p className="text-cyan-300">{skill.level}</p>
                            </div>
                        </div>    
                        {/**progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-3">
                            <div
                            className="bg-cyan-500 h-3 rounded-full"
                            style={{ width:`${skill.percent}%`}}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{skill.percent}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}