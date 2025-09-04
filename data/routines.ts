export type Routine = {
  id: string;
  title: string;
  steps: { icon: string; text: string }[];
};

export const routines: Routine[] = [
  {
    id: 'bedtime',
    title: 'Routine della nanna',
    steps: [
      { icon: '🛁', text: 'Bagnetto caldo' },
      { icon: '🦷', text: 'Lavaggio denti' },
      { icon: '📖', text: 'Leggi un libro' },
      { icon: '💤', text: 'Luce soffusa e nanna' }
    ]
  },
  {
    id: 'tv-off',
    title: 'Spegni la TV',
    steps: [
      { icon: '⏰', text: 'Avvisa 5 minuti prima' },
      { icon: '🖐️', text: 'Conta fino a 5 e spegni' },
      { icon: '🎲', text: 'Proponi un gioco' }
    ]
  },
  {
    id: 'mealtime',
    title: 'A tavola',
    steps: [
      { icon: '🍽️', text: 'Metti il piatto' }
    ]
  },
  {
    id: 'restaurant',
    title: 'Al ristorante',
    steps: [
      { icon: '🪑', text: 'Scegli il posto' }
    ]
  }
];
