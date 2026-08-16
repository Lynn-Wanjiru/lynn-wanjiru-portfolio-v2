import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSupabase, SiMongodb, SiMysql, SiExpress, SiPaypal } from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#0f172a' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#0f172a' },
  { name: 'Supabase / PostgreSQL', icon: <SiSupabase />, color: '#0f172a' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'Express.js', icon: <SiExpress />, color: '#0f172a' },
  { name: 'M-Pesa Daraja API', icon: <FaMobileAlt />, color: '#ff7a1a' },
  { name: 'PayPal', icon: <SiPaypal />, color: '#00457c' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e' },
  { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white pt-24 pb-24 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">What I work with</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Skills & Stack</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div key={skill.name} data-aos="fade-up" data-aos-delay={i * 60} className="flex flex-col items-center justify-center gap-3 bg-[#f4f4f4] rounded-2xl p-6 hover:bg-[#ff7a1a] hover:text-white group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,122,26,0.25)]">
              <span className="text-4xl transition-colors duration-300 group-hover:text-white" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-sm font-bold text-gray-800 group-hover:text-white text-center transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
