// src/components/About.js
export default function About() {
  const CARDS = [
    {
      title: "Education",
      desc: "Currently pursuing my degree in Computer Science, with focus on web technologies.",
    },
    {
      title: "Hobbies",
      desc: "Coding, playing vollyball, photography, and exploring new tech.",
    },
    {
      title: "Interests",
      desc: "AI, Data Science, UI/UX design, and full-stack development.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl rounded-xl p-8 border-2 border-cyan-400/60 bg-gradient-to-br from-cyan-900/40 to-gray-900/40 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-cyan-300 mb-6">
          About Me
        </h2>

        {/* Short Intro */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Hi, I’m <span className="text-cyan-400 font-semibold">Dhanush</span>, a passionate web developer
          who enjoys creating clean, responsive, and modern web applications.  
          My goal is to turn ideas into interactive, user-friendly experiences on the web.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-lg border-2 border-cyan-400/60 bg-gray-900/60 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
