import React, { useState } from 'react';
import { VILLA_DETAILS, REVIEWS } from '../constants';
import type { Review } from '../types';
import Modal from './Modal';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.82 3.745 4.133.601c.73.106 1.02.998.494 1.512l-2.99 2.914.706 4.116c.125.726-.638 1.283-1.29.953L10 15.17l-3.698 1.944c-.652.33-1.415-.227-1.29-.953l.706-4.116-2.99-2.914c-.525-.514-.236-1.406.494-1.512l4.133-.601 1.82-3.745z" clipRule="evenodd" />
    </svg>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="space-y-3">
            <div className="flex items-center space-x-3">
                <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-brand-light">{review.date}</p>
                    <p className="text-sm ">{review.rating}⭐</p>
                </div>
            </div>
            <p className="text-gray-800">
                {review.text}
            </p>
        </div>
    );
};

const Reviews: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const displayedReviews = REVIEWS.slice(0, 6);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Add an id here so Navbar can target it */}
            <div id="reviews">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                    <StarIcon className="text-brand-pink mr-2"/>
                    {VILLA_DETAILS.rating} · {VILLA_DETAILS.reviewsCount} reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-6">
                    {displayedReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
                {REVIEWS.length > 6 && (
                    <button
                        onClick={openModal}
                        className="mt-8 font-semibold border border-brand-dark rounded-lg px-6 py-3 hover:bg-gray-100 transition duration-300"
                    >
                        Show all {REVIEWS.length} reviews
                    </button>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title={`★ ${VILLA_DETAILS.rating} · ${REVIEWS.length} reviews`}>
                <div className="space-y-8">
                    {REVIEWS.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default Reviews;
