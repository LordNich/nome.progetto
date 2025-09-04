import { exportReport } from '@/lib/pdf';

export default function PdfButton({ score, level, actions }: { score: number; level: string; actions: string[] }) {
  return (
    <button onClick={() => exportReport(score, level, actions)} className="bg-secondary text-white px-3 py-2 rounded">
      Esporta PDF
    </button>
  );
}
