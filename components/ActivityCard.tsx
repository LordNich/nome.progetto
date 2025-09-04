import Card from './Card';
import type { Activity } from '@/data/activities';

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Card>
      <h3 className="font-semibold">{activity.title}</h3>
      <p className="text-sm">Durata: {activity.duration}</p>
      <ul className="list-disc pl-5 text-sm">
        {activity.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <p className="text-sm italic">Interazione linguistica: {activity.language}</p>
    </Card>
  );
}
