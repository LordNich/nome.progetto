export const riskMapping = [
  {
    level: 'Basso',
    range: [0, 33],
    message: 'Rischio basso: continua così!',
    actions: ['Mantieni le buone abitudini', 'Offri alternative di gioco', 'Coinvolgi tutta la famiglia']
  },
  {
    level: 'Medio',
    range: [34, 66],
    message: 'Rischio medio: attenzione agli schermi',
    actions: ['Stabilisci regole chiare', 'Evita lo schermo a tavola', 'Spegni 1 ora prima di dormire']
  },
  {
    level: 'Alto',
    range: [67, 100],
    message: 'Rischio alto: riduci subito il tempo di schermo',
    actions: ['Consulta il pediatra', 'Proponi più attività fisiche', 'Usa lo schermo solo insieme']
  }
];

export function mapRisk(score: number) {
  return riskMapping.find(r => score >= r.range[0] && score <= r.range[1]);
}
