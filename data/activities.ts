export type Activity = {
  id: string;
  title: string;
  age: '0-2' | '3-5';
  duration: string;
  materials: string;
  steps: string[];
  language: string;
};

export const activities: Activity[] = [
  {
    id: 'bolle',
    title: 'Bolle di sapone',
    age: '0-2',
    duration: '10 min',
    materials: 'Sapone e acqua',
    steps: ['Prepara la soluzione', 'Fai bolle grandi', 'Insegui le bolle'],
    language: 'Nomina forme e dimensioni'
  },
  {
    id: 'disegno',
    title: 'Disegno libero',
    age: '3-5',
    duration: '20 min',
    materials: 'Carta e colori',
    steps: ['Prepara il tavolo', 'Disegna la famiglia', 'Racconta il disegno'],
    language: 'Chiedi cosa rappresenta'
  },
  {
    id: 'musica',
    title: 'Musica e ballo',
    age: '0-2',
    duration: '15 min',
    materials: 'Riproduttore audio',
    steps: ['Metti la musica', 'Balla insieme', 'Fai pause e ripeti'],
    language: 'Nomina parti del corpo'
  },
  {
    id: 'giardino',
    title: 'Tesoro nel giardino',
    age: '3-5',
    duration: '25 min',
    materials: 'Piccoli oggetti',
    steps: ['Nascondi gli oggetti', 'Dai indizi', 'Trova il tesoro'],
    language: 'Usa parole direzionali'
  },
  {
    id: 'lettura',
    title: 'Lettura insieme',
    age: '0-2',
    duration: '10 min',
    materials: 'Libro illustrato',
    steps: ['Scegli un libro', 'Indica le immagini', 'Imita i suoni'],
    language: 'Ripeti nuove parole'
  }
];
