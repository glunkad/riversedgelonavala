import React, { useState } from 'react';
import { THINGS_TO_KNOW } from '../constants';
import type { ThingToKnow } from '../types';
import Modal from './Modal';

const Icon: React.FC<{ path: string }> = ({ path }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const Section: React.FC<{ title: string, items: ThingToKnow[] }> = ({ title, items }) => (
    <div className="mb-6 last:mb-0">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-4">
            {items.map(item => (
                <li key={item.text} className="flex items-start space-x-4">
                    {item.icon && <Icon path={item.icon} />}
                    <span className={!item.icon ? 'ml-10' : ''}>{item.text}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ThingsToKnow: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { houseRules, healthAndSafety, cancellationPolicy } = THINGS_TO_KNOW;
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Things to know</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
            <div>
                <h3 className="font-semibold mb-2">House rules</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                    {houseRules.slice(0, 3).map(rule => <li key={rule.text}>{rule.text}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Health & safety</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                    {healthAndSafety.slice(0, 3).map(item => <li key={item.text}>{item.text}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Cancellation policy</h3>
                <ul className="text-sm space-y-1 text-gray-700">
                    {cancellationPolicy.map(item => <li key={item.text}>{item.text}</li>)}
                </ul>
            </div>
        </div>
        <button 
            onClick={openModal}
            className="mt-6 font-semibold underline hover:text-brand-dark"
        >
          Show all
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Things to know">
        <Section title="House rules" items={houseRules} />
        <Section title="Health & safety" items={healthAndSafety} />
        <Section title="Cancellation policy" items={cancellationPolicy} />
      </Modal>
    </>
  );
};

export default ThingsToKnow;
