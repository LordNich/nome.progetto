export type Question = {
  id: string;
  text: string;
  options: { value: number; label: string }[];
};

export const testQuestions: Question[] = [
  {
    id: 'hours',
    text: 'Quante ore di schermo al giorno?',
    options: [
      { value: 0, label: '0' },
      { value: 1, label: '1-2' },
      { value: 2, label: '3+' }
    ]
  },
  {
    id: 'age',
    text: 'Età del bambino?',
    options: [
      { value: 0, label: '0-2' },
      { value: 1, label: '3-5' },
      { value: 2, label: '6+' }
    ]
  },
  {
    id: 'startage',
    text: 'Quando ha iniziato a usare gli schermi?',
    options: [
      { value: 0, label: 'Mai' },
      { value: 1, label: 'Prima dei 2 anni' },
      { value: 2, label: 'Dopo i 2 anni' }
    ]
  },
  {
    id: 'bedtime',
    text: 'Usa lo schermo prima di dormire?',
    options: [
      { value: 2, label: 'Si' },
      { value: 0, label: 'No' }
    ]
  },
  {
    id: 'device',
    text: 'Tiene il dispositivo in mano?',
    options: [
      { value: 2, label: 'Si' },
      { value: 0, label: 'No' }
    ]
  },
  {
    id: 'content',
    text: 'Che tipo di contenuti guarda?',
    options: [
      { value: 2, label: 'Veloci/YouTube' },
      { value: 1, label: 'Cartoni' },
      { value: 0, label: 'Video educativi' }
    ]
  },
  {
    id: 'table',
    text: 'Usa lo schermo a tavola?',
    options: [
      { value: 2, label: 'Sempre' },
      { value: 1, label: 'A volte' },
      { value: 0, label: 'Mai' }
    ]
  },
  {
    id: 'tantrum',
    text: 'Usi lo schermo per calmare i capricci?',
    options: [
      { value: 2, label: 'Spesso' },
      { value: 1, label: 'Qualche volta' },
      { value: 0, label: 'Mai' }
    ]
  },
  {
    id: 'coview',
    text: 'Guardate insieme?',
    options: [
      { value: 0, label: 'Sempre' },
      { value: 1, label: 'A volte' },
      { value: 2, label: 'Mai' }
    ]
  }
];
