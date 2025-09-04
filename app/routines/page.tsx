import { routines } from '@/data/routines';
import RoutineSteps from '@/components/RoutineSteps';

export default function RoutinesPage() {
  return (
    <div>
      {routines.map((r) => (
        <RoutineSteps key={r.id} routine={r} />
      ))}
    </div>
  );
}
