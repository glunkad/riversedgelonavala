import type React from 'react';

export interface Amenity {
  name: string;
  icon: React.ReactNode;
}

export interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
}

export interface ThingToKnow {
  text: string;
  icon?: string; // SVG path data
}

export interface SleepingArrangement {
  room: string;
  bedType: string;
  icon: React.ReactNode;
}

export interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}
