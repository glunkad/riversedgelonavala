import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';

const PhotoTour: React.FC<{ images: string[]; initialIndex: number; onClose: () => void }> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  return (
    <div
      className="fixed inset-0 bg-black z-50 flex flex-col p-4 text-white"
      role="dialog"
      aria-modal="true"
    >
      <header className="flex-shrink-0 flex items-center justify-between">
        <div className="text-lg">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/20"
          aria-label="Close photo tour"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 z-10"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        {/* Image Display */}
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Villa view ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 z-10"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </main>
    </div>
  );
};

const ImageGallery: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  if (GALLERY_IMAGES.length < 5) {
    return <div>Not enough images to display gallery.</div>;
  }

  const openTour = (index: number) => {
    setInitialImageIndex(index);
    setIsTourOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeTour = () => {
    setIsTourOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="relative">
        <div 
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[450px] overflow-hidden rounded-2xl"
        >
          {/* Main Image */}
          <div className="md:col-span-2 md:row-span-2 cursor-pointer" onClick={() => openTour(0)}>
            <img src={GALLERY_IMAGES[0]} alt="Villa main view" className="w-full h-full object-cover hover:brightness-90 transition duration-300" />
          </div>
          {/* Small Images */}
          {GALLERY_IMAGES.slice(1, 5).map((src, index) => (
            <div key={index} className="overflow-hidden cursor-pointer" onClick={() => openTour(index + 1)}>
              <img src={src} alt={`Villa view ${index + 2}`} className="w-full h-full object-cover hover:brightness-90 transition duration-300" />
            </div>
          ))}
        </div>
        <button 
          onClick={() => openTour(0)}
          className="absolute bottom-4 right-4 bg-white bg-opacity-90 text-brand-dark font-semibold text-sm px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition"
        >
          Show all photos
        </button>
      </div>

      {isTourOpen && (
        <PhotoTour images={GALLERY_IMAGES} initialIndex={initialImageIndex} onClose={closeTour} />
      )}
    </>
  );
};

export default ImageGallery;