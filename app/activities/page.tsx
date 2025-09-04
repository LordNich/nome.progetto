'use client';
import { useState } from 'react';
import { activities, Activity } from '@/data/activities';
import ActivityCard from '@/components/ActivityCard';

export default function ActivitiesPage() {
  const [age, setAge] = useState<'all' | '0-2' | '3-5'>('all');
  const list = activities.filter((a) => age === 'all' || a.age === age);

  function randomPick() {
    const item = list[Math.floor(Math.random() * list.length)];
    alert(item.title);
  }

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <select value={age} onChange={(e) => setAge(e.target.value as any)} className="border p-2 rounded">
          <option value="all">Filtra per età</option>
          <option value="0-2">0-2</option>
          <option value="3-5">3-5</option>
        </select>
        <button onClick={randomPick} className="bg-secondary text-white px-3 py-2 rounded">
          Scegli per me
        </button>
      </div>
      {list.map((a: Activity) => (
        <ActivityCard key={a.id} activity={a} />
      ))}
    </div>
  );
}
