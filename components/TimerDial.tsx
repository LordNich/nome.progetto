import { useEffect, useState } from 'react';

export default function TimerDial({ minutes }: { minutes: number }) {
  const [seconds, setSeconds] = useState(minutes * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (seconds <= 0) setRunning(false);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="text-center space-y-4">
      <div className="text-4xl">{mins}:{secs.toString().padStart(2, '0')}</div>
      <button onClick={() => setRunning(!running)} className="bg-primary text-white px-4 py-2 rounded">
        {running ? 'Pausa' : 'Start'}
      </button>
    </div>
  );
}
