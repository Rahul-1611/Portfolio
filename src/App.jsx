import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div
      className="min-h-screen text-lightest-slate bg-fixed bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')` }}
    >
      {/* Background Glass Overlay */}
      <div className="fixed inset-0 bg-navy/80 backdrop-blur-md z-0 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full min-h-screen">
        <Navbar />
        <main className="flex flex-col w-full flex-grow">
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
