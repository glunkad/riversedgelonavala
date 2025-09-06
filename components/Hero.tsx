
import React from 'react';
import { VILLA_DETAILS } from '../constants';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${className}`}>
        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.82 3.745 4.133.601c.73.106 1.02.998.494 1.512l-2.99 2.914.706 4.116c.125.726-.638 1.283-1.29.953L10 15.17l-3.698 1.944c-.652.33-1.415-.227-1.29-.953l.706-4.116-2.99-2.914c-.525-.514-.236-1.406.494-1.512l4.133-.601 1.82-3.745z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
    return (
        <section className="pt-8 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">
                {VILLA_DETAILS.name}
            </h1>
            <div className="flex items-center space-x-4 text-sm font-medium text-brand-dark">
                <div className="flex items-center">
                    <StarIcon className="text-brand-pink mr-1" />
                    <span>{VILLA_DETAILS.rating}</span>
                    <span className="text-brand-light mx-1">·</span>
                    <a href="#reviews" className="underline">{VILLA_DETAILS.reviewsCount} reviews</a>
                </div>
                {VILLA_DETAILS.superhost && (
                    <div className="flex items-center">
                        <span className="text-brand-light">·</span>
                        <span className="ml-2">Superhost</span>
                    </div>
                )}
                <div className="flex items-center">
                    <span className="text-brand-light">·</span>
                    <a href="#" className="underline ml-2">{VILLA_DETAILS.location}</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
