export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  from-cyan-950  text-white px:4 sm:px-6"
    >
      {/* Outer Box with Gradient + Glow */}
      <div className="w-full max-w-6xl h-[600px] rounded-lg border-2 border-cyan-400 bg-gradient-to-r from-cyan-500 to-gray-900 relative p-6 sm:p-10">
        
       

        {/* Main Content Split */}
        <div className="flex flex-col md:flex-row items-center h-full">
          
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left md-8 md:md-0 px-2 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              HELLO, <br />
              I AM A <br />
              <span className="bg-cyan-700 text-white px-2">WEB DEVELOPER</span>
            </h1>

            <a
              href="#about"
              className="inline-block mt-4 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-cyan-700 transition"
            >
              EXPLORE
            </a>
          </div>

          {/* Right Side */}
          <div className="w-fullmd:w-1/2 flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-40 sm:w-56 md:w-80 h-auto object-cover rounded-lg border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
