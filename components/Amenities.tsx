import React, { useState } from 'react';
import { AMENITIES } from '../constants';
import Modal from './Modal';

const Amenities: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedAmenities = AMENITIES.slice(0, 10);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedAmenities.map((amenity) => (
            <div key={amenity.name} className="flex items-center space-x-4">
              {amenity.icon}
              <span className="text-gray-800">{amenity.name}</span>
            </div>
          ))}
        </div>
        {AMENITIES.length > 10 && (
          <button 
            onClick={openModal}
            className="mt-6 font-semibold border border-brand-dark rounded-lg px-6 py-3 hover:bg-gray-100 transition duration-300"
          >
            Show all {AMENITIES.length} amenities
          </button>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="What this place offers">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
          {AMENITIES.map((amenity) => (
            <div key={amenity.name} className="flex items-center space-x-4">
              {amenity.icon}
              <span className="text-gray-800 text-lg">{amenity.name}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Amenities;
