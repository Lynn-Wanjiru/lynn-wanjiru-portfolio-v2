import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introVideo from '../assets/about/Intro video.MP4';

const Hero = () => {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    const video = videoRef.current;
    if (!video) return;

    // Try to honour the requested experience: autoplay with the original sound.
    // Browsers may block audible autoplay; if they do, fall back to muted autoplay.
    video.muted = false;
    video.volume = 0.8;

    const startVideo = async () => {
      try {
        await video.play();
        setSoundOn(true);
      } catch (error) {
        video.muted = true;
        setSoundOn(false);
        try {
          await video.play();
        } catch (playError) {
          console.error('Unable to autoplay introduction video:', playError);
        }
      }
    };

    startVideo();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = soundOn;
      video.volume = 0.8;
      await video.play();
      setSoundOn(!soundOn);
    } catch (error) {
      console.error('Unable to change video sound:', error);
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#fffaf3]">
      {/* Decorative wave inspired by the orange About section, keeping the hero bright and connected to the rest of the site. */}
      <div className="absolute inset-y-0 left-0 w-[72%] md:w-[58%] z-0 pointer-events-none overflow-hidden">
        <svg className="absolute -left-[28%] top-0 h-full w-[125%]" viewBox="0 0 700 900" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 0H470C400 105 430 190 505 270C585 355 620 455 555 555C500 640 390 690 355 775C330 835 350 875 385 900H0Z"
            fill="#ff7a1a"
          />
        </svg>
        <svg className="absolute -left-[8%] top-[8%] h-[84%] w-[88%] opacity-15" viewBox="0 0 700 900" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 0H470C400 105 430 190 505 270C585 355 620 455 555 555C500 640 390 690 355 775C330 835 350 875 385 900H0Z"
            fill="#111827"
          />
        </svg>
      </div>

      {/* Soft glow behind the video adds depth without making the hero dark. */}
      <div className="absolute right-[8%] top-1/2 hidden md:block h-[72vh] w-[32vw] -translate-y-1/2 rounded-[40%] bg-orange-200/40 blur-3xl z-0" />

      {/* Portrait video stays on the right on desktop and fills the screen on smaller devices. */}
      <video
        ref={videoRef}
        className="absolute z-10 right-0 top-0 h-full w-full object-cover md:right-[5%] md:top-1/2 md:h-[88%] md:w-[40%] md:-translate-y-1/2 md:rounded-[2rem] md:object-contain md:shadow-2xl"
        src={introVideo}
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-label="Lynn's portfolio introduction video"
      />

      {/* Desktop keeps the video clean on the right; mobile gets a stronger readability gradient over the video. */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#fffaf3] via-[#fffaf3]/90 to-transparent md:from-transparent md:via-transparent md:to-transparent" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-black/10 md:hidden" />

      <div className="relative z-30 min-h-screen px-6 py-28 md:px-12 lg:px-16 md:py-0 max-w-7xl mx-auto flex items-center">
        <div className="w-full md:w-[58%] lg:w-[60%] flex flex-col items-start text-left">
          <p data-aos="fade-up" className="mb-4 text-sm md:text-base font-bold uppercase tracking-[0.25em] text-[#ff7a1a]">
            Hi, I'm Lynn
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-[#111827] md:text-[#111827] text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-[1.05] max-w-2xl">
            Full Stack Developer <span className="text-[#ff7a1a]">&</span> AI Data Specialist
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[#374151] text-sm md:text-lg font-semibold mb-8 max-w-xl leading-relaxed">
            Based in Nairobi, Kenya. I build fast, scalable web apps with React, TypeScript, Next.js and Node.js — with real-world M-Pesa and PayPal payments integration.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-base rounded-full bg-[#111827] text-white font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-md">View My Work</a>
            <a href="https://wa.me/254796908826" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-base rounded-full bg-white/80 border border-[#111827] text-[#111827] font-semibold hover:bg-white transition-all duration-300 backdrop-blur-md">Contact Me</a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-6 right-6 z-40 px-4 py-2 rounded-full bg-white/90 border border-black/10 text-[#111827] text-xs md:text-sm font-semibold shadow-lg backdrop-blur-md hover:bg-white transition-all duration-300"
        aria-label={soundOn ? 'Mute introduction video' : 'Turn on introduction video sound'}
      >
        {soundOn ? '🔊 Sound On' : '🔇 Turn Sound On'}
      </button>

      <div data-aos="fade-up" data-aos-delay="800" className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#111827]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
