'use client';
import { useState } from 'react';
import TimerDial from '@/components/TimerDial';

export default function TimerPage() {
  const [minutes, setMinutes] = useState<number | null>(null);
  return (
    <div className="text-center space-y-4">
      {!minutes && (
        <div className="space-x-2">
          {[10,20,30].map(m => (
            <button key={m} onClick={() => setMinutes(m)} className="bg-primary text-white px-3 py-2 rounded">
              {m} min
            </button>
          ))}
        </div>
      )}
      {minutes && <TimerDial minutes={minutes} />}
    </div>
  );
}
