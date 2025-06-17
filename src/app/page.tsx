"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const sections = ["About", "Education", "Research", "Contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("About");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-700/10 via-gray-700/10 to-slate-600/10 animate-gradient"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-600/20 to-slate-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-slate-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-modern rounded-2xl px-8 py-4 shadow-modern-lg">
            <div className="flex justify-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 magnetic ${
                    activeSection === section
                      ? "text-white bg-gradient-to-r from-slate-700 to-slate-600 shadow-modern"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {activeSection === section && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl animate-glow"></div>
                  )}
                  <span className="relative z-10">{section}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          {activeSection === "About" && (
            <div className="animate-slide-in-bottom">
              <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                
                {/* Profile Image */}
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-500 rounded-full blur-2xl opacity-30 animate-morph"></div>
                    <Image
                      src="/KobinaKorankyeToonBW.png"
                      alt="Kobina Korankye"
                      width={320}
                      height={320}
                      className="object-cover rounded-full shadow-modern-lg animate-float ring-4 ring-white/20"
                      priority
                    />
                  </div>
                </div>

                {/* Hero Text */}
                <div className="text-center lg:text-left space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-6xl lg:text-8xl font-black text-white font-display">
                      <span className="text-shimmer">Kobina</span>
                      <br />
                      <span className="text-gradient-modern">Korankye</span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mx-auto lg:mx-0"></div>
                  </div>
                  
                  <p className="text-2xl text-gray-300 font-light leading-relaxed">
                    Philosophy PhD Student
                    <br />
                    <span className="text-slate-400">University of Georgia</span>
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                      Exploring the intersections of epistemology, artificial intelligence, and philosophy of language. 
                      Passionate about understanding the nature of knowledge and its implications for modern technology.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="btn-modern px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl font-semibold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300">
                      Download CV
                    </button>
                    <button
                      onClick={() => setActiveSection("Contact")}
                      className="btn-modern px-8 py-4 glass-modern text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === "Education" && (
            <div className="animate-slide-in-left">
              <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-5xl font-black text-center text-white mb-16">
                  <span className="text-shimmer">Education</span>
                </h2>
                
                <div className="space-y-8">
                  {/* University of Georgia */}
                  <div className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white">University of Georgia</h3>
                        <p className="text-xl text-slate-400 font-semibold">PhD, Philosophy</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-300">Current GPA: 4.0</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-white">Athens, Georgia</p>
                        <p className="text-gray-400">Expected: May 2028</p>
                      </div>
                    </div>
                  </div>

                  {/* Kent State University */}
                  <div className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <h3 className="text-3xl font-bold text-white">Kent State University</h3>
                        <p className="text-xl text-slate-400 font-semibold">MA, Philosophy</p>
                        <div className="glass-dark-modern rounded-xl p-4">
                          <p className="text-gray-300 italic leading-relaxed">
                            Thesis: Misgivings About the Given: Externalist Elements in BonJour's Internalist Foundationalism
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-300">Final GPA: 3.95</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-white">Kent, Ohio</p>
                        <p className="text-gray-400">August 2023</p>
                      </div>
                    </div>
                  </div>

                  {/* University of Ghana */}
                  <div className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-white">University of Ghana</h3>
                        <p className="text-xl text-slate-400 font-semibold">BA, Philosophy and Political Science</p>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-300">Final GPA: 3.58 (USA equivalent: 3.64)</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-lg font-semibold text-white">Accra, Ghana</p>
                        <p className="text-gray-400">May 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research Section */}
          {activeSection === "Research" && (
            <div className="animate-slide-in-right">
              <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-5xl font-black text-center text-white mb-16">
                  <span className="text-shimmer">Research</span>
                </h2>

                {/* Research Interests */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                    <h3 className="text-2xl font-bold text-slate-300 mb-6 flex items-center">
                      <div className="w-4 h-4 bg-slate-500 rounded-full mr-3 animate-pulse"></div>
                      Primary Areas
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-lg">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mr-3"></div>
                        Epistemology
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full mr-3"></div>
                        Artificial Intelligence
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full mr-3"></div>
                        Philosophy of Language
                      </li>
                    </ul>
                  </div>

                  <div className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                    <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center">
                      <div className="w-4 h-4 bg-gray-500 rounded-full mr-3 animate-pulse"></div>
                      Secondary Areas
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-lg">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full mr-3"></div>
                        Applied Ethics
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-gray-400 rounded-full mr-3"></div>
                        African Philosophy
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full mr-3"></div>
                        Logic
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Publications */}
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white text-center">Publications</h3>
                  <div
                    className="glass-modern rounded-2xl p-8 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 cursor-pointer magnetic"
                    onClick={() => router.push('http://rave.ohiolink.edu/etdc/view?acc_num=kent168420538470892')}
                  >
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white">
                        Misgivings About the Given: Externalist Elements in BonJour's Internalist Foundationalism
                      </h4>
                      <p className="text-gray-300">
                        Korankye, K. O. (2023). [Master's thesis, Kent State University]. OhioLINK Electronic Theses and Dissertations Center.
                      </p>
                      <div className="glass-dark-modern rounded-xl p-4">
                        <p className="text-slate-400 hover:text-slate-300 transition-colors">
                          http://rave.ohiolink.edu/etdc/view?acc_num=kent168420538470892
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 italic">APA Style (7th edition)</p>
                    </div>
                  </div>
                </div>

                {/* Conference Presentations */}
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white text-center">Conference Presentations</h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Deepfakes, not Cheapfakes",
                        venue: "Emerging Technologies and Social Ethics, University of Tennessee, Knoxville, TN",
                        date: "April 2024",
                        color: "slate"
                      },
                      {
                        title: "Can Aesthetic Considerations Be The Sole Justification for Conservation?",
                        venue: "Integrative Conservation Conference, University of Georgia, Athens GA",
                        date: "February 2024",
                        color: "gray"
                      },
                      {
                        title: "Private Language by Accident: Implications of Wittgenstein's Private Language Argument on An Accidentally Private Language",
                        venue: "International Conference: Formal Philosophy 2023, Higher School of Economics, Moscow (online)",
                        date: "October 2023",
                        color: "stone"
                      }
                    ].map((presentation, index) => (
                      <div key={index} className="glass-modern rounded-2xl p-6 shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-500 magnetic">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                          <div className="space-y-3 flex-1">
                            <h4 className={`text-xl font-bold text-${presentation.color}-400`}>
                              {presentation.title}
                            </h4>
                            <p className="text-gray-300 italic">{presentation.venue}</p>
                          </div>
                          <div className={`glass-dark-modern px-4 py-2 rounded-xl text-${presentation.color}-400 font-semibold`}>
                            {presentation.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === "Contact" && (
            <div className="animate-slide-in-bottom">
              <div className="max-w-4xl mx-auto text-center space-y-12">
                <h2 className="text-5xl font-black text-white mb-16">
                  <span className="text-shimmer">Get in Touch</span>
                </h2>

                <div className="glass-modern rounded-2xl p-12 shadow-modern-lg">
                  <div className="space-y-8">
                    <p className="text-2xl text-gray-300 leading-relaxed">
                      I'm always interested in discussing philosophy, research collaborations,
                      or academic opportunities.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-400">Email</h3>
                        <p className="text-gray-300">kobikorankye@uga.edu</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-400">Location</h3>
                        <p className="text-gray-300">Athens, Georgia</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-400">Phone</h3>
                        <p className="text-gray-300">+1 330 907 2708</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-400">Institution</h3>
                        <p className="text-gray-300">University of Georgia</p>
                      </div>
                    </div>

                    <div className="pt-8">
                      <a
                        href="mailto:kobikorankye@uga.edu"
                        className="btn-modern inline-block px-12 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl font-semibold shadow-modern-lg hover:shadow-modern transform hover:scale-105 transition-all duration-300"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full pointer-events-none z-50 opacity-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />
    </div>
  );
}
