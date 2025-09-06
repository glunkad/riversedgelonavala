import React from 'react';
import type { Amenity, Review, ThingToKnow, SleepingArrangement } from './types';

export const VILLA_DETAILS = {
  name: 'River’s Edge | 3BHK | Private Pool | Lonavala',
  location: 'Lonavala, Maharashtra, India',
  rating: 4.88,
  reviewsCount: 17,
  superhost: true,
  hostName: 'Gunjan',
  specs: {
    guests: 15,
    bedrooms: 3,
    beds: 3,
    baths: 3,
  },
  pricePerNight: 11999,
  whatsappNumber: "918793720167",
  description: "✨ Your private riverside escape in the heart of Lonavala ✨\n" +
      "\n" +
      "Imagine waking up to the sound of flowing water, enjoying your morning tea in a lush garden, and ending the day with a refreshing dip in your private pool. Welcome to River Edge Villa, a peaceful 3BHK stay crafted for families, friends, and groups looking to relax, celebrate, and create unforgettable memories.\n" + "\n"+
      "The space\n" +
      "• 3 Spacious AC Bedrooms with cozy bedding & extra mattresses for groups\n" +
      "\n" +
      "• Private Pool (15x20x5 ft) with riverside vibes & seating area\n" +
      "\n" +
      "• Garden Paradise perfect for morning walks, badminton, or evening chai\n" +
      "\n" +
      "• Living Room with Smart TV & Bluetooth Speaker – host movie nights or jam sessions\n" +
      "\n" +
      "• Pet-Friendly Stay – your furry companions are welcome\n" +
      "\n" +
      "• Free Wi-Fi for workcations or sharing Insta-worthy moments\n" +
      "\n" +
      "🍳 Kitchen & Dining\n" +
      "\n" +
      "Enjoy the freedom of cooking your own meals or ordering in:\n" +
      "\n" +
      "• Fully equipped kitchen with refrigerator, gas stove, and water purifier\n" +
      "\n" +
      "• Essential cookware, crockery, and dining space for group meals\n" +
      "\n" +
      "• Food delivery from Swiggy, Zomato & BlinkIt arrives quickly\n" +
      "\n" +
      "🛏️ Bedrooms & Sleeping Arrangements\n" +
      "\n" +
      "• 3 air-conditioned bedrooms with double beds\n" +
      "\n" +
      "• Fresh towels, clean linen & bedding for every room\n" +
      "\n" +
      "• Extra mattresses available for larger groups\n" +
      "\n" +
      "• Inverter backup for peace of mind\n" +
      "\n" +
      "🚿 Bathrooms\n" +
      "\n" +
      "• 3 modern bathrooms with geysers for hot water\n" +
      "\n" +
      "• Complimentary body soap, shampoo & hand wash\n" +
      "\n" +
      "🌟 Why Choose River Edge Villa?\n" +
      "\n" +
      "✔️ Centrally located – just minutes from Mapro Garden & Lonavala Station\n" +
      "✔️ Perfect for large groups – accommodates up to 15 guests comfortably\n" +
      "✔️ Riverside charm + private pool – rare combination in Lonavala\n" +
      "✔️ Pet-friendly & family-friendly – space for everyone you love\n" +
      "\n" +
      "📍 Nearby Attractions\n" +
      "\n" +
      "1.5 km – Mapro Garden\n" +
      "\n" +
      "2 km – Oven Fresh Café\n" +
      "\n" +
      "2.5 km – Lonavala Railway Station\n" +
      "\n" +
      "6 km – Khandala & Kune Waterfalls\n" +
      "\n" +
      "7 km – Rajmachi Garden\n" +
      "\n" +
      "11 km – Lion’s Point\n" +
      "\n" +
      "12 km – Tiger’s Point\n" +
      "Guest access\n" +
      "• Entire villa exclusively yours\n" +
      "\n" +
      "• Private pool & garden\n" +
      "\n" +
      "• Dedicated parking space\n" +
      "Other things to note\n" +
      "🍴 Dining Options\n" +
      "\n" +
      "While we don’t serve in-house meals, Lonavala’s best food is just a click away. Order anytime from Swiggy, Zomato, or BlinkIt and dine in comfort at the villa.\n" +
      "\n" +
      "📝 House Truths\n" +
      "\n" +
      "• Refundable security deposit ₹3,000 at check-in (via UPI/GPay), returned at check-out if no damages\n" +
      "\n" +
      "• No loud music outdoors post 10:30 PM (local rules)\n" +
      "\n" +
      "• Pool timings: 7:00 AM – 10:00 PM for safety\n" +
      "\n" +
      "💬 Book Your Stay\n" +
      "\n" +
      "Whether it’s a family getaway, a friends’ reunion, or a peaceful riverside escape, River Edge Villa is your perfect Lonavala home. 🌿✨\n" +
      "\n" +
      "📅 Book now for an unforgettable stay beside the river!",
};

export const GALLERY_IMAGES: string[] = [
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1339214293451615870/original/cd1e2014-5bb2-4522-967d-7ce3084e2ae9.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1339214293451615870/original/14747892-9c7c-41f3-8e9d-07f9b046fdb6.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/f1846a05-c59b-457f-8708-e10c314bd183.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/71940f84-6d37-4284-a9b7-c038e35ed25b.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA==/original/c0ec3742-c4b2-4d83-bbbb-d2d00e3aaf92.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA==/original/e5fc6e43-8229-4cdd-8de9-d097850dff41.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/c2ab1653-1e26-401e-9c11-8708b184da53.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/97480451-f06d-4675-88d9-794d0291c19e.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/163a2195-1411-425e-818a-30868a9cd8a6.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1339214293451615870/original/b21b4d1d-f532-4194-aaca-7a79988290a6.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/d37629c7-5dd4-44b4-9e92-8aa806ee6b2a.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/3d66396f-6aa3-4302-8ffc-a2991f2fbe78.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/15c3ef03-e135-4368-b419-d42cffd9e478.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1339214293451615870/original/a5a9c3b5-2ea7-488b-b263-d393a3bdcf01.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA==/original/65bec9a3-07ea-49b5-93cb-1e8058627ff4.jpeg?im_w=1200',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMzOTIxNDI5MzQ1MTYxNTg3MA%3D%3D/original/e2fdffa2-e900-4bb0-8ffe-c3f6ebc06e95.jpeg?im_w=1200',
];

export const AMENITIES: Amenity[] = [
  // { name: 'River view', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg> },
  { name: 'Private pool', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 9.925l.016-.016M12 6.375l.016-.016m0 0l.016-.016m-4.232 3.582l.016-.016" /></svg> },
  { name: 'Kitchen', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { name: 'Wifi', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M4.868 12.156a9.5 9.5 0 0114.264 0" /></svg> },
  { name: 'Free parking on premises', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m-4.5-9a4.5 4.5 0 119 0" /></svg> },
  { name: 'Air conditioning', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { name: 'Patio or balcony', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-4h-3a1 1 0 00-1-1H9a1 1 0 00-1 1H5M14 9V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" /></svg> },
  { name: 'Backyard', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg> },
  { name: 'TV', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  // { name: 'First aid kit', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> },
  { name: 'Dedicated workspace', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  { name: 'BBQ grill', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3c2.21 0 4.21.896 5.657 2.343L12 11l5.657 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11l-8.243-8.243a1 1 0 011.414 0l8.243 8.243" /></svg> },
  { name: 'Security cameras', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
  { name: 'Fire extinguisher', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  // { name: 'Washer', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0115.357-2m0 0H15" /></svg> },
  // { name: 'Dryer', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg> },
  { name: 'Hot water', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5A2.5 2.5 0 005 10v9a2 2 0 002 2h10a2 2 0 002-2v-9a2.5 2.5 0 00-2.5-2.5H15M12 3v12m0 0l-3-3m3 3l3-3m-3 6h.01" /></svg> },
  { name: 'Bed linens', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 10h18M3 15h18M3 20h18" /></svg> },
  { name: 'Shampoo', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 6v4m-2-2h4" /></svg> },
  { name: 'Extra pillows', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> },
];

export const SLEEPING_ARRANGEMENTS: SleepingArrangement[] = [
  {
    room: 'Bedroom 1',
    bedType: '1 king bed',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M10 15h4M4.5 7.5h15" /></svg>
  },
  {
    room: 'Bedroom 2',
    bedType: '1 queen bed',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M10 15h4M4.5 7.5h15" /></svg>
  },
];


export const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'Hrishikesh',
    avatar: 'https://a0.muscache.com/im/pictures/user/1b3c6419-f2bb-4608-80de-aa0402f9d1d0.jpg?im_w=240',
    date: 'March 2025',
    rating: 5,
    text: 'My stay at River’s Edge place was fantastic! The villa was exactly as described, clean, and well-equipped. The location was perfect, within walking distance of many restaurants and shops. Gunjan was incredibly responsive and helpful, providing clear instructions and local recommendations. I would highly recommend this listing to anyone visiting the area. The check in process was very easy.',
  },
  {
    id: 2,
    author: 'Vaibhav',
    avatar: 'https://a0.muscache.com/im/pictures/user/31994ae7-bfb8-4388-89fd-93c3476393cf.jpg?im_w=240',
    date: 'April 2025',
    rating: 5,
    text: "I reserved this place for my parents, and it turned out to be a wonderful stay. The swimming pool was large, the hall was spacious, and the bedrooms were clean and well-maintained. Overall, it was an excellent experience—they thoroughly enjoyed their time there.",
  },
  {
    id: 3,
    author: 'Simpy',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/6290ab3c-90c2-403e-aa8a-41aae968e51f.jpeg?im_w=240',
    date: 'April 2025',
    rating: 5,
    text: "I think ur place was well maintained and clean. It was an overall very good experience and we enjoyed being at your place.",
  },
  {
    id: 4,
    author: 'Bhavik',
    avatar: 'https://a0.muscache.com/im/pictures/user/dc87ae40-df17-42c2-8d04-ffa311685825.jpg?im_w=240',
    date: 'February 2025',
    rating: 5,
    text: "We had a wonderful stay. The villa itself was beautiful, spacious, and well-maintained. The location was perfect, with stunning views of the surrounding landscape.",
  },
  {
    id: 5,
    author: 'Naveen',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/5ad190aa-7997-4d44-a910-a19629321778.jpeg?im_w=240',
    date: 'May 2025',
    rating: 5,
    text: 'The Place was were Good and  Rooms and Washroom were cleaned and maintained well. The Pool was also clean.',
  },
  {
    id: 6,
    author: 'Jean',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/f549d920-365b-4ffa-b91b-bc3c89d3e77b.jpeg?im_w=240',
    date: 'March 2025',
    rating: 5,
    text: "We had a great stay. We were 7 friends, Gunjan is very communicative. The pool can easily accommodate 7+ people. Must visit if you’re in Lonavala.",
  },
  {
    id: 7,
    author: 'Varun',
    avatar: 'https://a0.muscache.com/im/pictures/user/094aa711-effb-4e3f-aaa9-c5997aa4a01f.jpg?im_w=240',
    date: 'March 2025',
    rating: 5,
    text: "Amazing stay and the ambience was also amazing. Worth every penny",
  },
  {
    id: 8,
    author: 'Pankaj',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/baf22df1-2b7b-4305-a6ab-e6b8877e16fe.jpeg?im_w=240',
    date: 'July 2025',
    rating: 5,
    text: "It was a really nice experience",
  },
  {
    id: 8,
    author: 'Rachit',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/c1dfb830-156f-4ecd-8ca2-53407c4c1665.jpeg?im_w=240',
    date: 'April 2025',
    rating: 5,
    text: "Amazing Property. Great Host. Felt like Home",
  },
  {
    id: 9,
    author: 'Vikrant',
    avatar: 'https://a0.muscache.com/im/pictures/user/d4c006ec-07c8-4c28-91be-1152d6958919.jpg?im_w=240',
    date: 'April 2025',
    rating: 4,
    text: "Good property in a very affordable price",
  },
  {
    id: 10,
    author: 'Vikrant',
    avatar: 'https://a0.muscache.com/im/pictures/user/c84d405f-e11e-4e87-8f7c-5967c63ffdf1.jpg?im_w=240',
    date: 'May 2025',
    rating: 5,
    text: "Nice pace ! Visited with friends 🧡",
  },
];

export const THINGS_TO_KNOW: {
  houseRules: ThingToKnow[];
  healthAndSafety: ThingToKnow[];
  cancellationPolicy: ThingToKnow[];
} = {
  houseRules: [
    { text: 'Check-in: After 2:00 PM', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { text: 'Checkout: 11:00 AM', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { text: '6 guests maximum', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0' },
    { text: 'No smoking', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
    { text: 'No pets', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
  ],
  healthAndSafety: [
    { text: 'Carbon monoxide alarm not reported', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { text: 'Smoke alarm not reported', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { text: 'Pool/hot tub without a gate or lock', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { text: 'Nearby lake, river, other body of water', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  ],
  cancellationPolicy: [
    { text: 'Free cancellation for 48 hours.' },
    { text: 'Review the full cancellation policy for more details.' },
  ],
};