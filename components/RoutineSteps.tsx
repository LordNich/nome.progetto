import Card from './Card';
import type { Routine } from '@/data/routines';

export default function RoutineSteps({ routine }: { routine: Routine }) {
  return (
    <Card>
      <h3 className="font-semibold mb-2">{routine.title}</h3>
      <ol className="list-decimal pl-5">
        {routine.steps.map((s, i) => (
          <li key={i}>{s.icon} {s.text}</li>
        ))}
      </ol>
    </Card>
  );
}
