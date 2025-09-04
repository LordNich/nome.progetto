'use client';
import { useAppStore } from '@/store/useAppStore';
import { mapRisk } from '@/data/riskMapping';
import GaugeChart from '@/components/GaugeChart';
import PdfButton from '@/components/PdfButton';

export default function ReportPage() {
  const { score } = useAppStore();
  if (score == null) return <p>Nessun punteggio disponibile.</p>;
  const risk = mapRisk(score);
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-semibold">Il tuo livello di rischio</h2>
      <GaugeChart score={score} />
      <p>{risk?.message}</p>
      <ul className="list-disc text-left pl-5">
        {risk?.actions.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      <div className="flex justify-center space-x-2">
        <a href="/activities" className="bg-primary text-white px-3 py-2 rounded">Apri attività</a>
        <a href="/timer" className="bg-primary text-white px-3 py-2 rounded">Apri timer</a>
        {risk && <PdfButton score={score} level={risk.level} actions={risk.actions} />}
      </div>
    </div>
  );
}
