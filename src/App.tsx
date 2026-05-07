/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIChatbot from "./components/AIChatbot";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background font-sans">
      {/* Simple Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-6 flex justify-between items-center border-b border-border bg-background/90 backdrop-blur">
        <div className="font-black tracking-[-1px] text-[1.2rem]">ALEX_CHEN.OS</div>
        <div className="flex gap-6 text-[10px] uppercase tracking-[2px] text-muted">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
        </div>
      </nav>

      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border font-sans text-[10px] text-muted uppercase tracking-[2px]">
        <p>© {new Date().getFullYear()} Alex Chen. SYSTEM STATUS: OPTIMIZED FOR CONVERSION.</p>
      </footer>

      <AIChatbot />
    </main>
  );
}
