import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type ImgModalProps = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
};

const ImgModal: React.FC<ImgModalProps> = ({ images, currentIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  // Update currentImageIndex if currentIndex prop changes
  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  // Handle navigation to the next image
  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Handle navigation to the previous image
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation (Escape to close, left/right arrows for navigation)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goToNext, goToPrevious]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
        aria-label="Close image gallery"
      >
        &times;
      </button>

      {/* Image container */}
      <div className="relative max-w-full max-h-full flex items-center justify-center">
        <Image width={1200} height={800}
          src={images[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
          onError={(e) => { 
            (e.target as HTMLImageElement).onerror = null; 
            (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/E0E0E0/333333?text=Image+Not+Found'; 
          }}
        />

        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-opacity-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-opacity-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImgModal;