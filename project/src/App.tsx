import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <>
            <Services />
            <Contact />
          </>
        );
      case 'about':
        return (
          <>
            <About />
            <Reviews />
            <Contact />
          </>
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Reviews />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;