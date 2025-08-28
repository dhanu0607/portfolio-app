import { FaEnvelope,FaPhone,FaGithub,FaLinkedin } from "react-icons/fa";

export default function contact() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 scroll-mt-21" id="contact"
        >
            {/**Section headings */}
            <h2 className="text-4xl font-bold text-cyan-400 mb-12">Contact</h2>

            {/**Glowing box */}
            <div className="w-full max-w-4xl border-2 border-cyan-400 rounded-2xl p-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative">
                {/**Glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-400 blur-md opacity-30"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-10">
                    {/**contact info */}
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg">
                            Feel free to reach out to me via email,phone or connect on social Platforms...
                        </p>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-cyan-400 text-2xl"/>
                               <a href="mailto:dhanushp630@gmail.com" className="text-cyan-400 hover:underline">
                                dhanshp630@gmail.com
                               </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-cyan-400 text-2xl"/>
                            <span>+916362652263</span>
                        </div>
                        <div className="flex gap-6 mt-4">
                            <a href="https://github.com//dhanu0607" target="_blank" rel="noreferrer">
                            <FaGithub className="text-3xl text-gray-400 hover:text-white transition"/>
                            </a>

                            <a href="https://linkedin.com/in/DhanushPoojary" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-3xl text-blue-400 hover:text-white transition"/>
                            </a>
                        </div>
                    </div>
                   
                    
                
                </div>
            </div>
        </section>
    );
}