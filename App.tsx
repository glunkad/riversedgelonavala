
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import VillaDetails from './components/VillaDetails';
import BookingCard from './components/BookingCard';
import Footer from './components/Footer';

const VillaPage: React.FC = () => (
  <>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <ImageGallery />
      <main className="lg:flex lg:gap-x-12 xl:gap-x-24 mt-8">
        <VillaDetails />
        <BookingCard />
      </main>
    </div>
    <Footer />
  </>
);


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white font-sans text-brand-dark">
        <Navbar />
        <div className="pt-14"> {/* Add padding to offset the fixed navbar */}
          <Routes>
            <Route path="/" element={<VillaPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
