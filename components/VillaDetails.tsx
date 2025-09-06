import React, {useState} from 'react';
import {VILLA_DETAILS} from '../constants';
import Amenities from './Amenities';
import Reviews from './Reviews';
import LocationMap from './LocationMap';
import Modal from './Modal';
import ThingsToKnow from './ThingsToKnow';
import SleepingArrangements from './SleepingArrangements';

const VillaDetails: React.FC = () => {
    const {hostName, specs, description} = VILLA_DETAILS;
    const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);

    const descriptionPreview = description.substring(0, 250) + '...';
    const showMoreButton = description.length > 250;

    return (
        <div className="w-full lg:w-3/5">
            {/* Host and Specs */}
            <div className="pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Entire villa in Lonavala, India</h2>
                        <p className="text-brand-light">
                            {specs.guests} guests · {specs.bedrooms} bedrooms · {specs.beds} beds
                            · {specs.baths} bathrooms
                        </p>
                    </div>
                    <img
                        src="https://a0.muscache.com/im/pictures/user/User/original/ebf73fc3-a1ef-4309-a3ef-78363ac043e2.jpeg?im_w=240"
                        alt="Host" className="rounded-full w-14 h-14"/>
                </div>
            </div>

            {/* Description */}
            <div className="py-6 border-b border-gray-200">
                <p className="text-gray-800 whitespace-pre-line">
                    {showMoreButton ? descriptionPreview : description}
                </p>
                {showMoreButton && (
                    <button
                        onClick={() => setIsDescriptionModalOpen(true)}
                        className="font-semibold underline mt-2 hover:text-brand-dark"
                    >
                        Show more
                    </button>
                )}
            </div>

            {/* Sleeping Arrangements */}
            <div id="sleeping" className="border-b border-gray-200">
                <SleepingArrangements/>
            </div>

            {/* Amenities */}
            <div id="amenities" className="py-6 border-b border-gray-200">
                <Amenities/>
            </div>

            {/* Reviews */}
            <div id="reviews" className="py-6 border-b border-gray-200">
                <Reviews/>
            </div>

            {/* Location Map */}
            <div id="location" className="py-6 border-b border-gray-200">
                <LocationMap/>
            </div>

            {/* Things to Know */}
            <div id="know">
                <ThingsToKnow/>
            </div>

            {/* Description Modal */}
            <Modal
                isOpen={isDescriptionModalOpen}
                onClose={() => setIsDescriptionModalOpen(false)}
                title="About this space"
            >
                <p className="text-gray-800 whitespace-pre-line">{description}</p>
            </Modal>
        </div>
    );
};

export default VillaDetails;