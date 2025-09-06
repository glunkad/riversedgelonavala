import React from 'react';
import { SLEEPING_ARRANGEMENTS } from '../constants';

const SleepingArrangements: React.FC = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Where you'll sleep</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SLEEPING_ARRANGEMENTS.map((arrangement) => (
          <div key={arrangement.room} className="border border-gray-300 rounded-lg p-4">
            {arrangement.icon}
            <p className="font-semibold mt-2">{arrangement.room}</p>
            <p className="text-sm text-brand-light">{arrangement.bedType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepingArrangements;
