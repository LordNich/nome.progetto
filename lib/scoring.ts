export function calculateScore(answers: Record<string, number>): number {
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const max = 18; // 9 questions * 2 points
  return Math.round((total / max) * 100);
}
