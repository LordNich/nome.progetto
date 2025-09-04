'use client';
import { useState } from 'react';
import { testQuestions } from '@/data/testQuestions';
import { useAppStore } from '@/store/useAppStore';
import { calculateScore } from '@/lib/scoring';
import { useRouter } from 'next/navigation';

export default function TestPage() {
  const [index, setIndex] = useState(0);
  const { answers, setAnswer, setScore } = useAppStore();
  const router = useRouter();
  const q = testQuestions[index];

  function next() {
    if (index < testQuestions.length - 1) setIndex(index + 1);
    else {
      const score = calculateScore(answers);
      setScore(score);
      router.push('/report');
    }
  }

  return (
    <div>
      <h2 className="font-semibold mb-4">{q.text}</h2>
      <div className="space-y-2">
        {q.options.map((o) => (
          <label key={o.label} className="block">
            <input
              type="radio"
              name={q.id}
              value={o.value}
              onChange={() => setAnswer(q.id, o.value)}
            />{' '}
            {o.label}
          </label>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button disabled={index === 0} onClick={() => setIndex(index - 1)} className="px-4 py-2 bg-gray-200 rounded">
          Indietro
        </button>
        <button onClick={next} className="px-4 py-2 bg-primary text-white rounded">
          {index === testQuestions.length - 1 ? 'Invia' : 'Avanti'}
        </button>
      </div>
    </div>
  );
}
