import React from "react";
import {VILLA_DETAILS} from "../constants";

const LocationMap: React.FC = () => {
    return (
        <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Where you’ll be</h2>
            <p className="mb-4 text-brand-dark">{VILLA_DETAILS.location}</p>

            {/* Google Maps Embed */}
            <div className="h-96 w-full rounded-xl overflow-hidden">
                <iframe
                    title="River's Edge Villa Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.828947272856!2d73.4178183!3d18.7523252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801004c3906bd%3A0xb43996ef363818e5!2sRiver's%20Edge%20Villa!5e0!3m2!1sen!2sin!4v1693740000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">About the neighborhood</h3>
                <p className="text-gray-800 mt-2">
                    The villa is nestled in a serene location in Lonavala, known for its
                    lush green valleys, stunning waterfalls, and pleasant weather. It
                    offers a perfect escape from the hustle and bustle of city life,
                    providing peace and privacy while still being accessible to local
                    attractions like Bhushi Dam, Lonavala Lake, and various viewpoints.
                </p>
            </div>
        </div>
    );
};

export default LocationMap;

