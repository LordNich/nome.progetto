import { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip } from 'chart.js';
Chart.register(ArcElement, Tooltip);

export default function GaugeChart({ score }: { score: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [score, 100 - score],
            backgroundColor: ['#2F855A', '#E5E7EB'],
            borderWidth: 0
          }
        ]
      },
      options: {
        cutout: '80%',
        plugins: { tooltip: { enabled: false } }
      }
    });
    return () => chart.destroy();
  }, [score]);
  return <canvas ref={ref} />;
}
